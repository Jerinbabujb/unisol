import { createContext, useContext, useEffect, useRef, useState } from "react";
import { socket } from "../socket"; 
import MusicInviteModal from "../src/modal/MusicInviteModal";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FiX } from "react-icons/fi";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {

  const audioRef = useRef(null);
  const isRemoteAction = useRef(false);

  const [currentSong, setCurrentSong] = useState(null);
  const [partnerId, setPartnerId] = useState(null);
  const [pendingTime, setPendingTime] = useState(0);
  const [syncState, setSyncState] = useState({ action: null, time: 0, version: 0 });                                                                                                                 
  /* ---------------- SEND INVITE ---------------- */
  const sendMusicInvite = (toUserId, song) => {
    setPartnerId(toUserId);

    socket.emit("music-invite", {
      to: toUserId,
      songUrl: song.song_url,
      songName: song.song_name,
    });
    console.log("Full song object:", song); // 👈 add this
  console.log("song_url:", song.song_url);
  console.log("song_name:", song.song_name);

  };

  /* ---------------- ACCEPT INVITE ---------------- */
// In MusicContext.jsx
const musicInviteRef = useRef(null);
const [musicInvite, setMusicInviteState] = useState(null);

// Keep ref in sync with state
const setMusicInvite = (val) => {
  musicInviteRef.current = val;
  setMusicInviteState(val);
};

const acceptInvite = () => {
  const invite = musicInviteRef.current; // ✅ always fresh
  if (!invite) return;

  console.log("musicInvite.songUrl:", invite.songUrl);

  socket.emit("music-accepted", {
    to: invite.from,
    songUrl: invite.songUrl,
  });

  setPartnerId(invite.from);
  setCurrentSong(invite.songUrl);
 
  setMusicInvite(null);
  setTimeout(() => {
    setSyncState({ action: "play", time: 0, version: Date.now() });
  }, 500);
};
const rejectInvite = () => {
  socket.emit("music-rejected", {
    to: musicInvite.from,
  });

  setMusicInvite(null);
};
  /* ---------------- LOCAL CONTROLS ---------------- */

  const handlePlay = () => {
  if (!partnerId || isRemoteAction.current) return;

  const audio = audioRef.current?.audio?.current;
  if (!audio) return;

  socket.emit("music-sync", {
    to: partnerId,
    action: "play",
    currentTime: audio.currentTime,
  });

  console.log("Audio element:", audio);
  console.log("Current time:", audio.currentTime);
};

  const handlePause = () => {
    if (!partnerId || isRemoteAction.current) return;
    const audio = audioRef.current?.audio?.current;
  if (!audio) return;
    socket.emit("music-sync", {
      to: partnerId,
      action: "pause",
      currentTime: audio.currentTime,
    });
  };

  const handleSeek = () => {
    if (!partnerId || isRemoteAction.current) return;
   const audio = audioRef.current?.audio?.current;
  if (!audio) return;
    socket.emit("music-sync", {
      to: partnerId,
      action: "seek",
      currentTime: audio.currentTime,
    });
  };

  /* ---------------- SOCKET LISTENERS ---------------- */

  useEffect(() => {
  socket.on("music-invite", (data) => {
    setMusicInvite(data);
    console.log("Incoming invite:", data);
  });

 socket.on("music-start", ({ songUrl, startTime, from }) => {
    console.log("music started");
    const delay = (Date.now() - startTime) / 1000;
    setCurrentSong(songUrl);
    setPartnerId(from);
    console.log("from",from);
    // Use a version/timestamp to ensure the Effect triggers even if time is the same
    setSyncState({ action: "play", time: delay, version: Date.now() });
  });

  socket.on("music-sync", ({ action, currentTime }) => {
    setSyncState({ action, time: currentTime, version: Date.now() });
  });

  return () => {
    socket.off("music-invite");
    socket.off("music-start");
    socket.off("music-sync");
  };
}, [socket]);
useEffect(() => {
  if (!syncState.action) return;

  // ✅ Retry until audio is available
  const tryPlay = () => {
    const audio = audioRef.current?.audio?.current;
    console.log("tryPlay audio:", audio);
    if (!audio) {
      setTimeout(tryPlay, 100); // retry every 100ms
      return;
    }

    isRemoteAction.current = true;

    if (syncState.action === "play") {
      audio.currentTime = syncState.time;
      audio.play().catch(e => console.log("Autoplay blocked:", e));
    } else if (syncState.action === "pause") {
      audio.pause();
    } else if (syncState.action === "seek") {
      audio.currentTime = syncState.time;
    }

    setTimeout(() => { isRemoteAction.current = false; }, 200);
  };

  tryPlay();
}, [syncState]); // ✅ only syncState as dependency
 return (
  <MusicContext.Provider value={{
    audioRef, currentSong, musicInvite, sendMusicInvite,
    acceptInvite, handlePlay, handlePause, handleSeek,
    rejectInvite, pendingTime, setPendingTime
  }}>
    {children}
    <MusicInviteModal />
{currentSong && (
  <div style={{
    position: 'fixed', bottom: 0, left: 0, right: 0,
    zIndex: 9999, background: '#1a1a2e', padding: '8px 16px'
  }}>
    {/* Close button */}
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        onClick={() => setCurrentSong(null)} // ✅ null not false
        style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '4px' }}
      >
        <FiX size={18} />
      </button>
    </div>

    <AudioPlayer
      ref={audioRef}
      src={currentSong}
      autoPlay
      showJumpControls={false}
      layout="horizontal"
      onPlay={handlePlay}
      onPause={handlePause}
      onSeeked={handleSeek}
    />
  </div>
)}
  </MusicContext.Provider>
);
};

