import { createContext, useContext, useEffect, useRef, useState } from "react";
import { socket } from "../socket"; 
import MusicInviteModal from "../src/modal/MusicInviteModal";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {

  const audioRef = useRef(null);
  const isRemoteAction = useRef(false);

  const [currentSong, setCurrentSong] = useState(null);
  const [musicInvite, setMusicInvite] = useState(null);
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
    console.log("song name:",song.song_name);
    console.log("reciver is:",toUserId);
  };

  /* ---------------- ACCEPT INVITE ---------------- */
  const acceptInvite = () => {
    socket.emit("music-accepted", {
      to: musicInvite.from,
      songUrl: musicInvite.songUrl,
    });

    setPartnerId(musicInvite.from);
    setMusicInvite(null);
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
useEffect(() => {
  console.log("Current Audio Ref State:", audioRef.current?.audio?.current);
}, [socket, audioRef.current?.audio?.current]);
  /* ---------------- SOCKET LISTENERS ---------------- */

  useEffect(() => {
  socket.on("music-invite", (data) => {
    setMusicInvite(data);
    console.log("Incoming invite:", data);
  });

 socket.on("music-start", ({ songUrl, startTime }) => {
    const delay = (Date.now() - startTime) / 1000;
    setCurrentSong(songUrl);
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
  const audio = audioRef.current?.audio?.current;
  console.log("audio",audio);
  if (!audio || !syncState.action) return;

  isRemoteAction.current = true;

  if (syncState.action === "play") {
    audio.currentTime = syncState.time;
    audio.play().catch(e => console.log("Autoplay blocked", e));
  } else if (syncState.action === "pause") {
    audio.pause();
  } else if (syncState.action === "seek") {
    audio.currentTime = syncState.time;
  }

  const timer = setTimeout(() => { isRemoteAction.current = false; }, 200);
  return () => clearTimeout(timer);
}, [syncState, audioRef.current?.audio?.current]);
  return (
    <MusicContext.Provider
      value={{
        audioRef,
        currentSong,
        musicInvite,
        sendMusicInvite,
        acceptInvite,
        handlePlay,
        handlePause,
        handleSeek,
        rejectInvite,
        pendingTime,
        setPendingTime
      }}
    >
      {children}
          <MusicInviteModal />

    </MusicContext.Provider>
  );
};

