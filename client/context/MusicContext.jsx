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

    socket.emit("music-sync", {
      to: partnerId,
      action: "play",
      currentTime: audioRef.current.currentTime,
    });
  };

  const handlePause = () => {
    if (!partnerId || isRemoteAction.current) return;

    socket.emit("music-sync", {
      to: partnerId,
      action: "pause",
      currentTime: audioRef.current.currentTime,
    });
  };

  const handleSeek = () => {
    if (!partnerId || isRemoteAction.current) return;

    socket.emit("music-sync", {
      to: partnerId,
      action: "seek",
      currentTime: audioRef.current.currentTime,
    });
  };

  /* ---------------- SOCKET LISTENERS ---------------- */

  useEffect(() => {
    if (!socket) return;

    socket.on("music-invite", (data) => {
      setMusicInvite(data);
    });

    socket.on("music-start", ({ songUrl, startTime }) => {
      setCurrentSong(songUrl);

      const delay = (Date.now() - startTime) / 1000;

      setTimeout(() => {
        audioRef.current.currentTime = delay;
        audioRef.current.play();
      }, 100);
    });

    socket.on("music-sync", ({ action, currentTime }) => {
      if (!audioRef.current) return;

      isRemoteAction.current = true;

      audioRef.current.audio.current.currentTime = currentTime;

      if (action === "play") {
        audioRef.current.play();
      }

      if (action === "pause") {
        audioRef.current.pause();
      }

      if (action === "seek") {
        audioRef.current.audio.current.currentTime = currentTime;
      }

      setTimeout(() => {
        isRemoteAction.current = false;
      }, 200);
    });

    return () => {
      socket.off("music-invite");
      socket.off("music-start");
      socket.off("music-sync");
    };
  }, [socket, partnerId]);

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
        rejectInvite
      }}
    >
      {children}
          <MusicInviteModal />

    </MusicContext.Provider>
  );
};

