import { createContext, useEffect, useRef, useState, useContext } from "react";
import { socket } from "../socket";
import { AuthContext } from "./AuthContext";

export const GroupVideoContext = createContext();

export const GroupVideoProvider = ({ children }) => {
  const { authUser } = useContext(AuthContext);

  const videoRef = useRef(null);

  const syncLockUntil = useRef(0);
  const isPlayingRef = useRef(false);

  const [roomId, setRoomId] = useState(null);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [syncState, setSyncState] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  
  // NEW: Track if the current user is the host
  const [isHost, setIsHost] = useState(false);

  const setPlaying = (val) => {
    isPlayingRef.current = val;
    setIsPlaying(val);
  };

  /* ---------------- JOIN ROOM ---------------- */

  const joinVideoRoom = (room) => {
    setRoomId(room);
    socket.emit("video-room-join", { room });
  };

  /* ---------------- START VIDEO (HOST) ---------------- */

  const startGroupVideo = (room, videoUrl) => {
    const startAt = Date.now() + 3000;
    
    setIsHost(true); // You started the video, you are the host

    socket.emit("group-video-start", {
      room,
      videoUrl,
      startAt,
      currentTime: 0,
    });

    setCurrentVideo(videoUrl);
  };

  /* ---------------- SOCKET LISTENERS ---------------- */

  useEffect(() => {
    const handleStart = (data) => {
      setIsHost(false); // Someone else started it, you are a viewer
      setCurrentVideo(data.videoUrl);

      syncLockUntil.current = Date.now() + 3000;

      const delay = data.startAt - Date.now();

      const startVideo = () => {
        const seekTime = 0;

        if (videoRef.current?.seekTo) {
          videoRef.current.seekTo(seekTime, "seconds");
        }

        setPlaying(true);
      };

      if (delay <= 0) startVideo();
      else setTimeout(startVideo, delay);
    };

    const handleSync = ({ time, action }) => {
      setSyncState({ time, action });
    };

    socket.on("group-video-start", handleStart);
    socket.on("group-video-sync", handleSync);

    return () => {
      socket.off("group-video-start", handleStart);
      socket.off("group-video-sync", handleSync);
    };
  }, []);

  /* ---------------- LIVE SYNC ---------------- */

  useEffect(() => {
    if (!roomId) return;

    const interval = setInterval(() => {
      if (!videoRef.current) return;
      if (!isPlayingRef.current) return;
      
      // NEW: Only the host should continuously broadcast their timestamp to the room
      if (!isHost) return;

      const currentTime =
        typeof videoRef.current.getCurrentTime === "function"
          ? videoRef.current.getCurrentTime()
          : 0;

      socket.emit("group-video-sync", {
        room: roomId,
        time: currentTime,
        action: "sync",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [roomId, isHost]); // Added isHost to dependency array

  /* ---------------- APPLY SYNC ---------------- */

  useEffect(() => {
    if (!syncState || !videoRef.current) return;
    
    // NEW: The host doesn't need to sync to incoming events, they dictate the time
    if (isHost) return; 

    const safeTime = Number(syncState.time) || 0;

    if (syncState.action === "sync" || syncState.action === "seek") {
      const localTime = videoRef.current.getCurrentTime?.() || 0;

      if (Math.abs(localTime - safeTime) > 1) {
        videoRef.current.seekTo(safeTime, "seconds");
      }
    }
    
    // Sync play and pause actions for viewers
    if (syncState.action === "pause") {
      setPlaying(false);
    } else if (syncState.action === "play") {
      setPlaying(true);
    }
  }, [syncState, isHost]);

  /* ---------------- LOCAL CONTROLS ---------------- */

  const handlePlay = () => {
    if (!roomId || !isHost) return; // Only host can play

    const time = videoRef.current?.getCurrentTime?.() || 0;

    setPlaying(true);

    socket.emit("group-video-sync", {
      room: roomId,
      action: "play",
      time,
    });
  };

  const handlePause = () => {
    if (!roomId || !isHost) return; // Only host can pause

    const time = videoRef.current?.getCurrentTime?.() || 0;

    setPlaying(false);

    socket.emit("group-video-sync", {
      room: roomId,
      action: "pause",
      time,
    });
  };

  const handleSeek = (seconds) => {
    if (!roomId || !isHost) return; // Only host can seek

    socket.emit("group-video-sync", {
      room: roomId,
      action: "seek",
      time: seconds,
    });
  };

  return (
    <GroupVideoContext.Provider
      value={{
        videoRef,
        currentVideo,
        isPlaying,
        setPlayerReady,
        isHost, // Exporting this so the chat window can use it

        roomId,
        joinVideoRoom,
        startGroupVideo,

        handlePlay,
        handlePause,
        handleSeek,
      }}
    >
      {children}
    </GroupVideoContext.Provider>
  );
};