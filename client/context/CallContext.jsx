import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export const CallContext = createContext();

export const CallProvider = ({ children, socket }) => {
  const { authUser } = useContext(AuthContext);

  const [call, setCall] = useState({
    isReceivingCall: false,
    from: null,
    name: null,
    offer: null,
    type: "video",
  });

  const [callAccepted, setCallAccepted] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [stream, setStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const peerConnection = useRef(null);
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  const servers = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
    ],
  };

  /* -------------------- SOCKET CONNECT AFTER LOGIN -------------------- */
  useEffect(() => {
    if (authUser?.id && socket && !socket.connected) {
      socket.auth = { userId: authUser.id };
      socket.connect();
      console.log("[SOCKET] connected as", authUser.id);
    }
  }, [authUser, socket]);

  /* -------------------- SOCKET LISTENERS -------------------- */
  useEffect(() => {
    if (!socket) return;

    socket.on("incoming-call", ({ from, name, offer, type }) => {
      console.log("[CALL] Incoming from", from);
      setCall({ isReceivingCall: true, from, name, offer, type });
    });

    socket.on("call-accepted", async ({ answer }) => {
      console.log("[CALL] Accepted");
      setCallAccepted(true);
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    socket.on("ice-candidate", async ({ candidate }) => {
      if (candidate && peerConnection.current) {
        await peerConnection.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        );
      }
    });

    socket.on("call-rejected", () => {
      toast.error("Call declined");
      resetCallState();
    });

    socket.on("call-ended", () => {
      toast("Call ended");
      resetCallState();
    });

    return () => {
      socket.off("incoming-call");
      socket.off("call-accepted");
      socket.off("ice-candidate");
      socket.off("call-rejected");
      socket.off("call-ended");
    };
  }, [socket]);

  /* -------------------- MEDIA -------------------- */
  const initializeMedia = async (type) => {
    const media = await navigator.mediaDevices.getUserMedia({
      video: type === "video",
      audio: true,
    });

    setStream(media);
    if (localVideo.current) {
      localVideo.current.srcObject = media;
    }

    return media;
  };

  /* -------------------- START CALL -------------------- */
  const initiateCall = async (targetUserId, targetName, type = "video") => {
    if (targetUserId === authUser.id) return;

    console.log("[CALL] Calling", targetUserId);
    setIsCalling(true);

    const media = await initializeMedia(type);

    peerConnection.current = new RTCPeerConnection(servers);

    media.getTracks().forEach((track) =>
      peerConnection.current.addTrack(track, media)
    );

    peerConnection.current.ontrack = (e) => {
      setRemoteStream(e.streams[0]);
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = e.streams[0];
      }
    };

    peerConnection.current.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("ice-candidate", {
          to: targetUserId,
          candidate: e.candidate,
        });
      }
    };

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    socket.emit("call-user", {
      to: targetUserId,
      name: authUser.fullName,
      offer,
      type,
    });
  };

  /* -------------------- ANSWER CALL -------------------- */
  const answerCall = async () => {
    console.log("[CALL] Answering");

    setCallAccepted(true);

    const media = await initializeMedia(call.type);

    peerConnection.current = new RTCPeerConnection(servers);

    media.getTracks().forEach((track) =>
      peerConnection.current.addTrack(track, media)
    );

    peerConnection.current.ontrack = (e) => {
      setRemoteStream(e.streams[0]);
      if (remoteVideo.current) {
        remoteVideo.current.srcObject = e.streams[0];
      }
    };

    peerConnection.current.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("ice-candidate", {
          to: call.from,
          candidate: e.candidate,
        });
      }
    };

    await peerConnection.current.setRemoteDescription(
      new RTCSessionDescription(call.offer)
    );

    const answer = await peerConnection.current.createAnswer();
    await peerConnection.current.setLocalDescription(answer);

    socket.emit("answer-call", {
      to: call.from,
      answer,
    });
  };

  /* -------------------- DECLINE -------------------- */
  const rejectCall = () => {
    socket.emit("reject-call", { to: call.from });
    resetCallState();
  };

  /* -------------------- END CALL -------------------- */
  const endCall = () => {
    socket.emit("end-call", { to: call.from });
    resetCallState();
  };

  /* -------------------- CLEANUP -------------------- */
  const resetCallState = () => {
    if (stream) stream.getTracks().forEach((t) => t.stop());

    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }

    setStream(null);
    setRemoteStream(null);
    setIsCalling(false);
    setCallAccepted(false);
    setCall({
      isReceivingCall: false,
      from: null,
      name: null,
      offer: null,
      type: "video",
    });
  };

  return (
    <CallContext.Provider
      value={{
        call,
        callAccepted,
        isCalling,
        initiateCall,
        answerCall,
        rejectCall,
        endCall,
        localVideo,
        remoteVideo,
        stream,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};
