import { useContext, useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { FiX, FiMusic, FiVideo } from "react-icons/fi";
import { MdPhotoLibrary } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { GiGamepad } from "react-icons/gi";
import ReactPlayer from "react-player";

// Contexts
import { AuthContext } from "../../../../context/AuthContext";
import { MusicContext } from "../../../../context/MusicContext";
import { CallContext } from "../../../../context/CallContext";
import { ChatContext } from "../../../../context/ChatContext";
import { GameContext } from "../../../../context/GameContext";
import { GroupVideoContext } from "../../../../context/GroupVideoContext"; 
import assets from "../../../assets";

const PrivateChatWindow = () => {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Context Destructuring
  const { authUser } = useContext(AuthContext);
  const { selectedUser, messages, globalSendMessage, sendMessage, getRoomMessages, currentRoom } = useContext(ChatContext);
  const { currentSong, sendMusicInvite, getSongs, song } = useContext(MusicContext);
  const { getGames, gamesLists, postAnswer } = useContext(GameContext);
  
  // Group Video Context
  const {
    videoRef,
    currentVideo,
    isPlaying: isVideoPlaying,
    joinVideoRoom,
    startGroupVideo,
    handlePlay: videoPlay,
    handlePause: videoPause,
    handleSeek: videoSeek,
    isHost
  } = useContext(GroupVideoContext);

  // Local States
  const [input, setInput] = useState('');
  const [musicList, setMusicList] = useState(false);
  const [games, setGames] = useState(false);
  
  // Video States
  const [videoPopup, setVideoPopup] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [hasJoinedVideo, setHasJoinedVideo] = useState(false);

  // Check room and initialize video socket room
  useEffect(() => {
    if (!currentRoom) {
      navigate("/global-room-lists");
    } else {
      joinVideoRoom(roomName); 
    }
  }, [currentRoom, roomName, navigate, joinVideoRoom]);

  // Initial Fetches
  useEffect(() => {
    if (typeof getSongs === 'function') getSongs();
    if (typeof getGames === 'function') getGames();
    getRoomMessages();
  }, [getRoomMessages, getSongs, getGames]);

  // Auto-scroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentVideo, hasJoinedVideo]); // Added video states to trigger scroll when invite appears

  // Handlers
  const handleBack = () => navigate('/global-room-lists');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await globalSendMessage(input.trim());
    setInput('');
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

  const selectedUserIdTransfer = (url) => {
    postAnswer(selectedUser?.id);
    navigate(`/${url}`, { state: { selectedUserId: selectedUser?.id } });
  };

  const formatMessageTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const goToProfile = (roomName) => navigate(`/${roomName}/profile`);

  const handleStartVideo = () => {
    if (videoUrl.trim() === "") return;
    startGroupVideo(roomName, videoUrl);
    setHasJoinedVideo(true); 
    setVideoPopup(false);
    setVideoUrl("");
  };

  return (
    <div className="flex flex-col h-screen bg-[#f4f6fb] overflow-hidden">
      
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-4 bg-white border-b border-gray-200 shadow-sm z-20 shrink-0">
        <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div onClick={() => goToProfile(roomName)} className="cursor-pointer">
          <h3 className="font-bold text-gray-800">{roomName}</h3>
          <span className="text-xs text-green-500 font-medium">● Online</span>
        </div>
      </header>

      {/* Video Player Area */}
      {currentVideo && hasJoinedVideo && (
        <div className="w-full bg-black relative shrink-0 z-10" style={{ height: "30vh", minHeight: "200px" }}>
          <button 
            onClick={() => setHasJoinedVideo(false)} 
            className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full z-20 hover:bg-black transition"
          >
            <FiX size={18} />
          </button>
          
          <ReactPlayer
            ref={videoRef}
            url={currentVideo}
            playing={isVideoPlaying}
            onPlay={videoPlay}
            onPause={videoPause}
            onSeek={(e) => videoSeek(e)}
            width="100%"
            height="100%"
            controls={isHost}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 custom-scroll">
        {messages.map((msg, index) => {
          if (!msg || typeof msg !== 'object') return null;
          const isMine = msg.senderId === authUser?.id;
          return (
            <div key={index} className={`flex items-end gap-3 ${isMine ? "justify-end" : "justify-start"}`}>
              {!isMine && msg.sender?.avatar && (
                <img src={msg.sender.avatar} className="w-8 h-8 rounded-full object-cover" alt="Avatar" />
              )}
              <div className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                isMine ? "bg-indigo-600 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none border border-gray-100"
              }`}>
                <p className="text-sm">{msg.text}</p>
                <p className={`text-[10px] mt-1 opacity-70 ${isMine ? "text-indigo-100" : "text-gray-400"}`}>
                  {formatMessageTime(msg.createdAt)}
                </p>
              </div>
            </div>
          );
        })}

        {/* Video Invite - Rendered as a System Message Bubble */}
        {currentVideo && !hasJoinedVideo && (
          <div className="flex justify-center my-4 animate-fadeIn">
            <div className="bg-white border border-indigo-100 shadow-sm rounded-2xl p-4 flex flex-col items-center gap-2 max-w-sm w-full relative">
              
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <FiVideo size={20} />
                <span>Someone started a video!</span>
              </div>
              
              <p className="text-xs text-gray-500 text-center mb-1">
                Want to join and watch together?
              </p>
              
              <button 
                onClick={() => setHasJoinedVideo(true)} 
                className="bg-indigo-600 text-white px-8 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition w-full shadow-sm"
              >
                Join Video
              </button>
            </div>
          </div>
        )}

        {/* Scroll Target */}
        <div ref={scrollRef} />
      </main>

      {/* Input Area */}
      <div className="p-3 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)] shrink-0">
        <form onSubmit={handleSendMessage} className="relative flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow-inner">
          
          {/* Action Icons */}
          <button type="button" onClick={() => { setVideoPopup(!videoPopup); setMusicList(false); setGames(false); }} className="hover:text-indigo-600 text-gray-500 transition">
            <FiVideo size={22} />
          </button>
          <button type="button" onClick={() => { setMusicList(!musicList); setVideoPopup(false); setGames(false); }} className="hover:text-indigo-600 text-gray-500 transition">
            <FiMusic size={22} />
          </button>
          <button type="button" onClick={() => { setGames(!games); setMusicList(false); setVideoPopup(false); }} className="hover:text-indigo-600 text-gray-500 transition">
            <GiGamepad size={22} />
          </button>

          <label htmlFor="image" className="cursor-pointer hover:text-indigo-600 text-gray-500 transition">
            <MdPhotoLibrary size={22} />
          </label>
          <input type="file" id="image" onChange={handleSendImage} accept="image/*" hidden />

          {/* Text Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-800 px-2"
          />

          <button type="submit" className="hover:scale-110 transition">
            <img src={assets.send_button} className="w-8 h-8" alt="Send" />
          </button>

          {/* --- POPUPS --- */}
          
          {/* Video Popup */}
          {videoPopup && (
            <div className="absolute bottom-16 left-4 right-4 md:right-auto md:left-4 w-auto md:w-80 bg-zinc-900 text-white rounded-xl shadow-2xl p-5 z-50 border border-zinc-700 animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold">Start Group Video</h3>
                <FiX size={18} className="cursor-pointer text-gray-400 hover:text-white" onClick={() => setVideoPopup(false)} />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Paste YouTube Link..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full bg-zinc-800 text-white text-sm px-3 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={handleStartVideo}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  Start Video
                </button>
              </div>
            </div>
          )}

          {/* Music Popup */}
          {musicList && (
            <div className="absolute bottom-16 left-12 w-72 bg-zinc-900 text-white rounded-xl shadow-2xl p-4 z-50 border border-zinc-700 animate-fadeIn">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Music List</h3>
                <FiX size={18} className="cursor-pointer text-gray-400 hover:text-white" onClick={() => setMusicList(false)} />
              </div>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {song?.map((item, index) => (
                  <div key={index} onClick={() => { sendMusicInvite(selectedUser?.id, item); setMusicList(false); }} className="px-3 py-2 rounded-md hover:bg-indigo-600 cursor-pointer transition text-sm">
                    {item.song_name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Games Popup */}
          {games && (
            <div className="absolute bottom-16 left-20 w-72 bg-zinc-900 text-white rounded-xl shadow-2xl p-4 z-50 border border-zinc-700 animate-fadeIn">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold">Games</h3>
                <FiX size={18} className="cursor-pointer text-gray-400 hover:text-white" onClick={() => setGames(false)} />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {gamesLists?.map((item, index) => (
                  <div key={index} onClick={() => { selectedUserIdTransfer(item.name); setGames(false); }} className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition">
                    <img src={item.icon} className="w-8 h-8 rounded-md" alt="Game" />
                    <span className="text-[10px] text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default PrivateChatWindow;