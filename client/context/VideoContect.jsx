import { createContext, useEffect, useRef, useState, useContext } from "react";
import { socket } from "../socket";
import { AuthContext } from "./AuthContext";
import VideoInviteModal from "../src/modal/VideoInviteModal";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const { authUser } = useContext(AuthContext);
const [scheduledStart, setScheduledStart] = useState(null);
  const videoRef = useRef(null);
  const syncLockUntil = useRef(0);
  const isPlayingRef = useRef(false);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [partnerId, setPartnerId] = useState(null);
  const [syncState, setSyncState] = useState(null);
  const [videoInvite, setVideoInvite] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const setPlaying = (val) => {
    isPlayingRef.current = val;
    setIsPlaying(val);
  };
useEffect(() => {
  setPlayerReady(false);
}, [currentVideo]);
  /* ---------------- INVITE ---------------- */
  const sendVideoInvite = (to, videoUrl) => {
    if (!socket.connected) {
      console.log("❌ SOCKET NOT CONNECTED");
      return;
    }
    
    socket.emit("video-invite", { to, videoUrl });
  };

  /* ---------------- ACCEPT & REJECT ---------------- */
  const acceptInvite = () => {
  if (!videoInvite) return;

  // Start 3 seconds in future
  const startAt = Date.now() + 3000;

  socket.emit("video-accepted", {
    to: videoInvite.from,
    videoUrl: videoInvite.videoUrl,
    startAt,
  });

  setPartnerId(videoInvite.from);
  setCurrentVideo(videoInvite.videoUrl);

  // Save scheduled start
  setScheduledStart(startAt);

  setVideoInvite(null);

  // DO NOT PLAY IMMEDIATELY
  setPlaying(false);
};

  const rejectInvite = () => {
    if (!videoInvite) return;
    socket.emit("video-rejected", { to: videoInvite.from });
    setVideoInvite(null);
  };

  /* ---------------- SOCKET LISTENERS ---------------- */
  useEffect(() => {
    const handleInvite = (data) => setVideoInvite(data);
    const handleSync = ({ action, time }) => setSyncState({ action, time });

    const handleAccepted = (data) => {
 
    setPartnerId(data.from);
    setCurrentVideo(data.videoUrl);
      isPlaying(true);

  // Shared synchronized start time
  setScheduledStart(data.startAt);

  syncLockUntil.current = Date.now() + 3500;

  // DO NOT PLAY NOW
  setPlaying(false);
};

    const handleRejected = () => {
      alert("Your video invite was declined.");
      setPartnerId(null);
    };

    const handleClose = () => {
      setCurrentVideo(null);
      setPartnerId(null);
      setPlaying(false);
    };

    socket.on("video-invite", handleInvite);
    socket.on("video-sync", handleSync);
    socket.on("video-accepted", handleAccepted);
    socket.on("video-rejected", handleRejected);
    socket.on("video-close", handleClose);

    return () => {
      socket.off("video-invite", handleInvite);
      socket.off("video-sync", handleSync);
      socket.off("video-accepted", handleAccepted);
      socket.off("video-rejected", handleRejected);
      socket.off("video-close", handleClose);
    };
  }, []);
  
  /* ---------------- SYNCHRONIZED START ---------------- */
useEffect(() => {
  if (!scheduledStart) return;
  if (!playerReady) return;
  if (!videoRef.current) return;

  const delay = scheduledStart - Date.now();

  const startVideo = () => {
    try {
      if (typeof videoRef.current.seekTo === "function") {
        videoRef.current.seekTo(0, "seconds");
      }

      setPlaying(true);
    } catch (err) {
      console.log("Start sync error:", err);
    }
  };

  if (delay <= 0) {
    startVideo();
    return;
  }

  const timer = setTimeout(startVideo, delay);

  return () => clearTimeout(timer);
}, [scheduledStart, playerReady]);
  /* ---------------- SYNC APPLY ---------------- */
/* ---------------- SYNC APPLY ---------------- */
  useEffect(() => {
    if (!syncState || !videoRef.current) return;

    // Set a lock so that when we call seekTo(), it doesn't trigger handleSeek()
    syncLockUntil.current = Date.now() + 1500; 

    const safeTime = Number(syncState.time) || 0;

    // Apply the seek action
    if (typeof videoRef.current.seekTo === 'function') {
      videoRef.current.seekTo(safeTime, 'seconds');
    }

    // Apply Play/Pause state
    if (syncState.action === "play") {
      setPlaying(true);
    } else if (syncState.action === "pause") {
      setPlaying(false);
    }
    // Note: If action is 'seek', we just seek and keep previous playing state
    
  }, [syncState]);
  /* ---------------- LOCAL CONTROLS ---------------- */
  // Inside VideoProvider
// Inside VideoProvider, update the "SOCKET LISTENERS" section
const handleSync = ({ action, time }) => {
  console.log(`📡 [Received Sync] Action: ${action}, Time: ${time}`);
  setSyncState({ action, time });
};

// Inside your local control functions:
/* ---------------- LOCAL CONTROLS ---------------- */
const handlePlay = () => {
    // 1. Safety Check: Only proceed if ref is ready
    if (!videoRef.current) {
      console.warn("Play blocked: videoRef.current is null");
      return;
    }
    if (Date.now() < syncLockUntil.current) return;
    if (!partnerId) return;

    setPlaying(true);

    // 2. Direct Call: ReactPlayer v3 exposes these on the ref itself
    const currentTime = typeof videoRef.current.getCurrentTime === 'function' 
      ? videoRef.current.getCurrentTime() 
      : 0;

    socket.emit("video-sync", {
      to: partnerId,
      action: "play",
      time: currentTime,
    });
  };

  const handlePause = () => {
    // 1. Safety Check
    if (!videoRef.current) {
      console.warn("Pause blocked: videoRef.current is null");
      return;
    }
    if (Date.now() < syncLockUntil.current) return;
    if (!partnerId) return;

    setPlaying(false);

    // 2. Direct Call
    const currentTime = typeof videoRef.current.getCurrentTime === 'function' 
      ? videoRef.current.getCurrentTime() 
      : 0;

    socket.emit("video-sync", {
      to: partnerId,
      action: "pause",
      time: currentTime,
    });
  };

// Inside VideoProvider in VideoContext.jsx

const handleSeek = (seconds) => {
  // 1. Prevent loop: If we are currently "locked" (receiving a remote update), don't emit back
  if (Date.now() < syncLockUntil.current) return;
  if (!partnerId) return;

  console.log(`⏩ [Local] Seeking to: ${seconds}s`);

  socket.emit("video-sync", {
    to: partnerId,
    action: "seek", // We use 'seek' to distinguish from play/pause
    time: seconds,
  });
};

  const handleCloseVideo = () => {
    if (partnerId) {
      socket.emit("video-close", { to: partnerId });
    }
    setCurrentVideo(null);
    setPartnerId(null);
    setPlaying(false);
  };

  return (
    <VideoContext.Provider
      value={{
        videoRef,
        currentVideo,
        setCurrentVideo,
        sendVideoInvite,
        acceptInvite,
        rejectInvite,
        handlePlay,
        handlePause,
        handleSeek,
        handleCloseVideo,
        videoInvite,
        isPlaying,
        setPlayerReady
      }}
    >
      {children}
      <VideoInviteModal />
    </VideoContext.Provider>
  );
};