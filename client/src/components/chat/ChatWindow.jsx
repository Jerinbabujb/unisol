import { useContext, useEffect, useState, useRef } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";
import { CallContext } from "../../../context/CallContext";
import { MusicContext } from "../../../context/MusicContext";
import { VideoContext } from "../../../context/VideoContect";
import { GameContext } from "../../../context/GameContext";
import assets from "../../assets";
import toast from "react-hot-toast";
import { FiX, FiMusic, FiVideo } from "react-icons/fi";
import { MdPhotoLibrary } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"
const ChatWindow = ({ setOpenProfile }) => {
  const {
    selectedUser,
    setSelectedUser,
    messages,
    getMessages,
    sendMessage,
    getSongs,
    song,
  } = useContext(ChatContext);

  const { authUser, onlineUsers } = useContext(AuthContext);

  const {
    currentVideo,
    sendVideoInvite,
    videoRef,
    isPlaying,
    handlePlay: handleVideoPlay, // Aliased
    handlePause: handleVideoPause, // Aliased
    handleSeek: handleVideoSeek, // Aliased
    handleCloseVideo,
    setPlayerReady
  } = useContext(VideoContext);

  const {
    audioRef,
    currentSong: currentMusicSong, // Aliased
    sendMusicInvite,
    handlePlay: handleMusicPlay, // Aliased
    handlePause: handleMusicPause, // Aliased
    handleSeek: handleMusicSeek, // Aliased
    acceptInvite
  } = useContext(MusicContext);

  const {
    currentSong: currentCallSong, // Aliased
    sendMusicInvite: sendCallMusicInvite, // Aliased if needed
    initiateCall,
    isCalling,
    callAccepted,
    localVideo,
    remoteVideo,
    endCall,
  } = useContext(CallContext);

  const { getGames, gamesLists, postAnswer } = useContext(GameContext);

  const [input, setInput] = useState("");
  const [games, setGames] = useState(false);
  const [musicList, setMusicList] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [activeVideoId, setActiveVideoId] = useState(null);

  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getSongs();
    getGames();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser.id);
    }
  }, [selectedUser]);

  const handleBack = () => {
    setSelectedUser(null);
    navigate("/");
    setTimeout(() => navigate("/messages"), 10);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await sendMessage({ text: input.trim() });
    setInput("");
  };

  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = async () => {
      await sendMessage({ image: reader.result });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const handleVideoRequest = async () => {
    if (!youtubeUrl.trim()) {
      toast.error("Please enter a YouTube URL");
      return;
    }
    if (
      !youtubeUrl.includes("youtube.com") &&
      !youtubeUrl.includes("youtu.be")
    ) {
      toast.error("Please enter a valid YouTube link");
      return;
    }
    try {
      sendVideoInvite(selectedUser.id, youtubeUrl.trim());
      toast.success("Video invite sent!");
      setYoutubeUrl("");
      setVideoPopup(false);
    } catch (error) {
      toast.error("Failed to send invite");
    }
  };

  const selectedUserIdTransfer = (url) => {
    postAnswer(selectedUser?.id);
    navigate(`/${url}`, { state: { selectedUserId: selectedUser?.id } });
  };

  const formatMessageTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const extractVideoId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  if (!selectedUser) {
    return (
      <div className="hidden md:flex flex-col items-center justify-center h-full gap-2 text-gray-400 bg-gray-50/50">
        <img src={assets.logo} alt="" className="w-16 opacity-20 grayscale" />
        <p className="text-lg font-medium">Select a match to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">

      {/* REACT PLAYER */}
      {currentVideo && (
        <div className="absolute inset-0 z-[999] bg-black flex flex-col items-center justify-center">
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 z-[1000] bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            ✕ Close
          </button>

          <div className="w-full h-full md:max-w-4xl md:max-h-[70vh]">
      <ReactPlayer
  ref={videoRef}
  url={currentVideo}
  playing={isPlaying}
  controls
  width="100%"
  height="100%"
  progressInterval={250}
  onReady={() => {
    console.log("PLAYER READY");
    setPlayerReady(true);
  }}
  onPlay={handleVideoPlay}
  onPause={handleVideoPause}
  onSeek={handleVideoSeek}
/>
          </div>
        </div>
      )}

      {(isCalling || callAccepted) && (
        <div className="absolute inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <video
            ref={remoteVideo}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          <video
            ref={localVideo}
            autoPlay
            muted
            playsInline
            className="absolute top-6 right-6 w-32 h-44 object-cover rounded-2xl border-2 border-white shadow-2xl z-50 bg-black"
          />
          <div className="absolute bottom-12 flex flex-col items-center gap-4">
            <p className="text-white font-medium text-lg drop-shadow-md">
              {callAccepted ? "Connected" : `Calling ${selectedUser.fullName}...`}
            </p>
            <button
              onClick={endCall}
              className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-90 cursor-pointer"
            >
              <span className="text-2xl">✕</span>
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="px-4 py-3 md:px-6 md:py-4 flex justify-between items-center border-b border-gray-100 shrink-0 z-10 bg-white">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setOpenProfile(true)}
        >
          <button
            onClick={handleBack}
            className="md:hidden p-2 -ml-2 text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={selectedUser.avatar || assets.logo}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />

          <div>
            <h3 className="font-bold text-sm md:text-base">{selectedUser.fullName}</h3>
            {onlineUsers.includes(selectedUser?.id) && (
              <p className="text-[10px] text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Active now
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => initiateCall(selectedUser.id, selectedUser.fullName, "audio")}
            className="p-2.5 bg-gray-50 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer"
          >
            📞
          </button>
          <button
            onClick={() => initiateCall(selectedUser.id, selectedUser.fullName, "video")}
            className="p-2.5 bg-gray-50 rounded-full hover:bg-pink-50 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer"
          >
            📽️
          </button>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 bg-[#F8F9FB]">
        {messages.map((msg, index) => {
          const isMine = msg.senderId === authUser.id;
          const isYoutube =
            msg.text?.includes("youtube.com") || msg.text?.includes("youtu.be");

          let videoId = null;
          if (isYoutube) {
            const cleanUrl = msg.text.replace("🎵 YouTube Request:", "").trim();
            videoId = extractVideoId(cleanUrl);
          }

          return (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                isMine ? "flex-row-reverse self-end" : "flex-row self-start"
              }`}
            >
              <img
                src={
                  isMine
                    ? authUser.avatar || assets.avatar_icon
                    : selectedUser.avatar || assets.avatar_icon
                }
                className="w-7 h-7 rounded-full object-cover mb-1"
              />

              <div className={`flex flex-col ${isMine ? "items-end" : "items-start"}`}>
                {msg.image ? (
                  <img src={msg.image} className="max-w-[200px] md:max-w-xs rounded-2xl" />
                ) : isYoutube && videoId ? (
                  <div
                    onClick={() => setActiveVideoId(videoId)}
                    className="cursor-pointer bg-black text-white px-4 py-2 rounded-2xl text-sm"
                  >
                    ▶ Play YouTube Video
                  </div>
                ) : (
                  <div
                    className={`p-3 rounded-2xl text-sm max-w-[260px] ${
                      isMine ? "bg-pink-500 text-white" : "bg-white text-gray-800 border"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
                <span className="text-[9px] text-gray-400 mt-1">
                  {formatMessageTime(msg.createdAt)}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>

      {/* INPUT */}
      <div
        className="p-4 bg-white border-t border-gray-100 relative"
        style={{ paddingBottom: currentMusicSong ? "100px" : "0" }}
      >
        <form
          onSubmit={handleSendMessage}
          className="flex items-center gap-2 md:gap-3 bg-gray-100 px-4 py-2 rounded-full relative"
        >
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a message..."
            className="flex-1 bg-transparent border-none outline-none text-sm py-1.5 text-gray-700 placeholder-gray-400"
          />

          {/* VIDEO */}
          <button
            type="button"
            onClick={() => {
              setVideoPopup(!videoPopup);
              setMusicList(false);
              setGames(false);
            }}
            className="hover:text-purple-400 transition cursor-pointer text-gray-600"
          >
            <FiVideo size={24} />
          </button>

          {videoPopup && (
            <div className="absolute bottom-14 right-0 w-72 bg-zinc-900 text-white rounded-xl shadow-2xl p-4 z-50 border border-zinc-700 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">Request YouTube Video</h3>
                <button
                  type="button"
                  onClick={() => setVideoPopup(false)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <FiX size={18} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Paste YouTube URL here..."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="w-full bg-zinc-800 text-white text-xs rounded-lg p-2.5 outline-none border border-zinc-700 focus:border-purple-500 transition"
              />
              <button
                type="button"
                onClick={handleVideoRequest}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg text-xs transition active:scale-95 cursor-pointer"
              >
                Request Video
              </button>
            </div>
          )}

          {/* MUSIC */}
          <button
            type="button"
            onClick={() => {
              setMusicList(!musicList);
              setVideoPopup(false);
              setGames(false);
            }}
            className="hover:text-purple-400 transition cursor-pointer text-gray-600"
          >
            <FiMusic size={24} />
          </button>

          {musicList && (
            <div className="absolute bottom-14 right-0 w-72 bg-zinc-900 text-white rounded-xl shadow-2xl p-4 z-50 border border-zinc-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Music List</h3>
                <button
                  type="button"
                  onClick={() => setMusicList(false)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <FiX size={18} />
                </button>
              </div>
              <div className="max-h-40 overflow-y-auto space-y-2 mb-3">
                {song?.map((item, index) => (
                  <div
                    key={item.id || index}
                    onClick={() => {
                      sendMusicInvite(selectedUser.id, item);
                      setMusicList(false);
                    }}
                    className="cursor-pointer px-2 py-1 rounded-md hover:bg-purple-600 transition text-sm"
                  >
                    {item.song_name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IMAGE */}
          <input
            type="file"
            id="image"
            onChange={handleSendImage}
            accept="image/*"
            hidden
          />
          <label
            htmlFor="image"
            className="cursor-pointer hover:opacity-70 transition text-gray-600 hover:text-purple-400"
          >
            <MdPhotoLibrary size={24} />
          </label>

          {/* SEND */}
          <button
            type="submit"
            className="hover:scale-110 transition active:scale-95 cursor-pointer shrink-0"
          >
            <img src={assets.send_button} alt="send" className="w-8 h-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;