import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { ChatContext } from './ChatContext';

export const CallContext = createContext();

export const CallProvider = ({ children, socket }) => {
    const { authUser } = useContext(AuthContext);
    const [call, setCall] = useState({ isReceivingCall: false, from: null, name: null, offer: null, type: 'video' });
    const [callAccepted, setCallAccepted] = useState(false);
    const [isCalling, setIsCalling] = useState(false);
    const [stream, setStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);

    const peerConnection = useRef(null);
    const localVideo = useRef();
    const remoteVideo = useRef();

    const servers = {
        iceServers: [{ urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"] }]
    };

    useEffect(() => {
        if (!socket) return;

        socket.on("incoming-call", ({ from, name, offer, type }) => {
            setCall({ isReceivingCall: true, from, name, offer, type });
        });

        socket.on("call-accepted", async ({ answer }) => {
            setCallAccepted(true);
            await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on("ice-candidate", async ({ candidate }) => {
            if (candidate && peerConnection.current) {
                await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
            }
        });

        socket.on("call-ended", () => endCall());

        return () => {
            socket.off("incoming-call");
            socket.off("call-accepted");
            socket.off("ice-candidate");
        };
    }, [socket]);

    const initializeMedia = async (type) => {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
            video: type === 'video', 
            audio: true 
        });
        setStream(mediaStream);
        if (localVideo.current) localVideo.current.srcObject = mediaStream;
        return mediaStream;
    };

    const initiateCall = async (targetUserId, targetName, type) => {
        setIsCalling(true);
        const mediaStream = await initializeMedia(type);

        peerConnection.current = new RTCPeerConnection(servers);
        mediaStream.getTracks().forEach(track => peerConnection.current.addTrack(track, mediaStream));

        peerConnection.current.ontrack = (event) => {
            setRemoteStream(event.streams[0]);
            if (remoteVideo.current) remoteVideo.current.srcObject = event.streams[0];
        };

        peerConnection.current.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("ice-candidate", { to: targetUserId, candidate: event.candidate });
            }
        };

        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        socket.emit("call-user", { to: targetUserId, name: authUser.fullName, offer, type });
    };

    const answerCall = async () => {
        setCallAccepted(true);
        const mediaStream = await initializeMedia(call.type);

        peerConnection.current = new RTCPeerConnection(servers);
        mediaStream.getTracks().forEach(track => peerConnection.current.addTrack(track, mediaStream));

        peerConnection.current.ontrack = (event) => {
            setRemoteStream(event.streams[0]);
            if (remoteVideo.current) remoteVideo.current.srcObject = event.streams[0];
        };

        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(call.offer));
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);

        socket.emit("answer-call", { to: call.from, answer });
    };

    const endCall = () => {
        if (stream) stream.getTracks().forEach(track => track.stop());
        if (peerConnection.current) peerConnection.current.close();
        setCallAccepted(false);
        setIsCalling(false);
        setCall({ isReceivingCall: false });
        window.location.reload(); // Simplest way to reset all states
    };
    useEffect(() => {
    // If we have a user but the socket doesn't know about them yet
    if (authUser?.id && socket) {
        // Update the query parameters
        socket.io.opts.query = {
            userId: authUser.id
        };
        // Reconnect to apply the new query
        socket.disconnect().connect();
        console.log("[DEBUG] Socket re-connected with User ID:", authUser.id);
    }
}, [authUser, socket]);

    return (
        <CallContext.Provider value={{ 
            call, callAccepted, isCalling, initiateCall, answerCall, endCall, 
            localVideo, remoteVideo, stream 
        }}>
            {children}
        </CallContext.Provider>
    );
};