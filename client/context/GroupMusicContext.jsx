import { createContext, useEffect, useRef, useState } from "react";
import { socket } from "../socket"; 
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FiX } from "react-icons/fi";

export const GroupMusicContext = createContext();

export const GroupMusicProvider = ({ children }) => {
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(null); // What the user is currently listening to
  const [activeGroupMusic, setActiveGroupMusic] = useState(null); // The active music URL broadcasted to the room
  
  const [roomId, setRoomId] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [syncState, setSyncState] = useState({ action: null, time: 0, version: 0 });

  /* ---------------- ROOM JOIN ---------------- */
  const joinMusicRoom = (room) => {
    setRoomId(room);
    socket.emit("music-room-join", { room });
  };

  /* ---------------- HOST CONTROLS ---------------- */
  const startGroupMusic = (room, songUrl) => {
    setIsHost(true);
    setCurrentSong(songUrl);
    setActiveGroupMusic(songUrl); // Set locally immediately 
    
    socket.emit("group-music-start", {
      room,
      songUrl,
    });
  };

  /* ---------------- VIEWER CONTROLS ---------------- */
  const joinActiveMusic = () => {
    setIsHost(false);
    setCurrentSong(activeGroupMusic); // Will begin playing and sync to host within ~2 seconds
  };

  const leaveMusic = () => {
    setCurrentSong(null);
    if (isHost) {
      setIsHost(false);
      // Optional: Inform room host left
    }
  };

  /* ---------------- SOCKET LISTENERS ---------------- */
  useEffect(() => {
    const handleStart = (data) => {
      if (!isHost) {
        setActiveGroupMusic(data.songUrl); // Triggers the chat invite bubble
      }
    };

    const handleSync = ({ time, action }) => {
      if (!isHost) {
        setSyncState({ time, action, version: Date.now() });
      }
    };

    socket.on("group-music-start", handleStart);
    socket.on("group-music-sync", handleSync);

    return () => {
      socket.off("group-music-start", handleStart);
      socket.off("group-music-sync", handleSync);
    };
  }, [isHost]);

  /* ---------------- HOST: LIVE SYNC BROADCAST ---------------- */
  useEffect(() => {
    if (!roomId || !isHost || !currentSong) return;

    // The host continuously broadcasts their timestamp so late joiners jump to the right spot
    const interval = setInterval(() => {
      const audio = audioRef.current?.audio?.current;
      // Only broadcast sync if we're actually playing to prevent unnecessary jumps
      if (audio && !audio.paused) {
        socket.emit("group-music-sync", {
          room: roomId,
          time: audio.currentTime,
          action: "sync",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [roomId, isHost, currentSong]); 

  /* ---------------- VIEWER: APPLY INCOMING SYNC ---------------- */
  useEffect(() => {
    if (isHost || !currentSong || !syncState.action) return;
    
    const audio = audioRef.current?.audio?.current;
    if (!audio) return; 

    const safeTime = Number(syncState.time) || 0;
    const localTime = audio.currentTime || 0;

    if (syncState.action === "sync" || syncState.action === "seek") {
      // If we are out of sync by more than 1.5 seconds, jump to host time
      if (Math.abs(localTime - safeTime) > 1.5) {
        audio.currentTime = safeTime;
      }
    }
    
    if (syncState.action === "pause") {
      audio.pause();
    } else if (syncState.action === "play") {
      if (audio.paused) {
        audio.play().catch(e => console.log("Play blocked:", e));
      }
    }
  }, [syncState, isHost, currentSong]);


  /* ---------------- PLAYER ACTION HANDLERS ---------------- */
  const handlePlay = () => {
    if (!roomId || !isHost) return;
    const time = audioRef.current?.audio?.current?.currentTime || 0;
    socket.emit("group-music-sync", { room: roomId, action: "play", time });
  };

  const handlePause = () => {
    if (!roomId || !isHost) return;
    const time = audioRef.current?.audio?.current?.currentTime || 0;
    socket.emit("group-music-sync", { room: roomId, action: "pause", time });
  };

  const handleSeek = () => {
    if (!roomId || !isHost) return;
    const time = audioRef.current?.audio?.current?.currentTime || 0;
    socket.emit("group-music-sync", { room: roomId, action: "seek", time });
  };

  return (
    <GroupMusicContext.Provider value={{
      currentSong, activeGroupMusic, startGroupMusic, joinActiveMusic, joinMusicRoom, leaveMusic
    }}>
      {children}
      
      {currentSong && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          zIndex: 9999, background: '#1a1a2e',
          padding: '6px 12px 10px',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={leaveMusic}
              style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2px' }}
            >
              <FiX size={16} />
            </button>
          </div>

          <AudioPlayer
            ref={audioRef}
            src={currentSong}
            autoPlay
            showJumpControls={false}
            showDownloadProgress={false}
            showFilledProgress={true}
            layout="horizontal"
            style={{
              background: 'transparent',
              boxShadow: 'none',
              padding: '0',
            }}
            customStyles={{ mainColor: '#a855f7' }}
            onPlay={handlePlay}
            onPause={handlePause}
            onSeeked={handleSeek}
          />
        </div>
      )}
    </GroupMusicContext.Provider>
  );
};