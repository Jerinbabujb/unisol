import { useContext, useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { MdPhotoLibrary } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { GiGamepad } from "react-icons/gi";
import { AuthContext } from "../../../../context/AuthContext";
import { MusicContext } from "../../../../context/MusicContext";
import { CallContext } from "../../../../context/CallContext";
import { ChatContext } from "../../../../context/ChatContext";
import { GameContext } from "../../../../context/GameContext";
import assets from "../../../assets";


const GlobalChatWindow=()=>{
  const {roomName} = useParams();
   const { selectedUser, setSelectedUser, getMessages, sendMessage, getSongs, song,currentRoom,
        roomMessages,
        sendRoomMessage, globalSendMessage,messages,getRoomMessages } = useContext(ChatContext);
  const { authUser,onlineUsers } = useContext(AuthContext);
const {
  audioRef,
  currentSong,
  sendMusicInvite,
  handlePlay,
  handlePause,
  handleSeek,
  acceptInvite
} = useContext(MusicContext);
  const [musicList,setMusicList]= useState(false);
  // Call Context states and functions
  const { 
    initiateCall, 
    isCalling, 
    callAccepted, 
    localVideo, 
    remoteVideo, 
    endCall 
  } = useContext(CallContext);



useEffect(()=>{
  if(!currentRoom){
    navigate("/global-room-lists");
  }
},[])
 




  const {getGames,
        gamesLists,postAnswer} = useContext(GameContext);

  const [input, setInput] = useState('');
    const [games,setGames]= useState(false);

  const scrollRef = useRef(null);
  const navigate=useNavigate();
useEffect(()=>{
    getSongs();
    getGames();
    getRoomMessages();
  },[])
  
  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    getRoomMessages()
  }, [getRoomMessages]);

const handleBack = () => {
  navigate('/global-room-lists');
  
};
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

  const selectedUserIdTransfer=(url)=>{
    postAnswer(selectedUser?.id);
    navigate(`/${url}`,{state:{selectedUserId:selectedUser?.id}});
  }
  const formatMessageTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

 const goToProfile=(roomName)=>{
 navigate(`/${roomName}/profile`)
 }

 
return (
  <div className="flex flex-col h-full bg-[#f4f6fb] relative">

    {/* Header */}
    <div className="px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 border-b bg-white shadow-sm z-10">
      
     <button
  onClick={handleBack}
  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 active:scale-95 transition shadow-md"
>
  <svg
    className="w-5 h-5 text-black"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M15 19l-7-7 7-7"
    />
  </svg>
</button>

      <div className="flex flex-col">
        <h3 onClick={()=>goToProfile(roomName)} className="font-semibold text-gray-800 text-sm md:text-base">
          {roomName}
        </h3>
        <span className="text-xs text-green-500">Online</span>
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto px-3 md:px-6 py-4 flex flex-col gap-3 custom-scroll">

      {messages.map((msg, index) => {
  if (!msg) return null;
  const isMine = msg.senderId === authUser.id;

  return (
    <div
      key={index}
      className={`flex items-end gap-2 ${isMine ? "justify-end" : "justify-start"}`}
    >
      {/* Show avatar only for other users */}
      {!isMine && msg.sender?.avatar && (
        <img
          src={msg.sender.avatar}
          alt={msg.sender.username || ""}
          className="w-8 h-8 rounded-full object-cover"
        />
      )}

      <div className="flex flex-col max-w-[75%]">
        <div
          className={`px-4 py-2 text-sm rounded-2xl shadow-sm break-words ${
            isMine
              ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-br-none"
              : "bg-white text-gray-800 border rounded-bl-none"
          }`}
        >
          {msg.text}
        </div>

        <span className="text-[10px] text-gray-400 mt-1 px-1">
          {formatMessageTime(msg.createdAt)}
        </span>
      </div>

      {/* Optional: show your own avatar for sent messages if you want */}
      {isMine && msg.sender?.avatar && (
        <img
          src={msg.sender.avatar}
          alt={msg.sender.username || ""}
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
    </div>
  );
})}

      <div ref={scrollRef} />
    </div>

    {/* Input */}
    <div
      className="p-3 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
      style={{ paddingBottom: currentSong ? "100px" : "12px" }}
    >
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-inner"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700"
        />

        {/* Music */}
        <button
          type="button"
          onClick={() => setMusicList(!musicList)}
          className="hover:text-purple-500 transition"
        >
          <FiMusic size={24} />
        </button>

        {/* Music Popup */}
        {musicList && (
          <div className="absolute bottom-16 right-4 w-72 bg-zinc-900 text-white rounded-xl shadow-2xl p-4 z-50 border border-zinc-700 animate-fadeIn">

            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold">Music List</h3>
              <FiX
                size={18}
                className="cursor-pointer text-gray-400 hover:text-white"
                onClick={() => setMusicList(false)}
              />
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2">
              {song?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    sendMusicInvite(selectedUser.id, item);
                    setMusicList(false);
                  }}
                  className="px-3 py-2 rounded-md hover:bg-purple-600 cursor-pointer transition"
                >
                  {item.song_name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Games */}
        <button
          type="button"
          onClick={() => setGames(!games)}
          className="hover:text-purple-500 transition"
        >
          <GiGamepad size={24} />
        </button>

        {/* Games Popup */}
        {games && (
          <div className="absolute bottom-16 right-4 w-72 bg-zinc-900 text-white rounded-xl shadow-2xl p-4 z-50 border border-zinc-700 animate-fadeIn">

            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold">Games</h3>
              <FiX
                size={18}
                className="cursor-pointer text-gray-400 hover:text-white"
                onClick={() => setGames(false)}
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {gamesLists?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => selectedUserIdTransfer(item.name)}
                  className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition"
                >
                  <img src={item.icon} className="w-8 h-8" />
                  <span className="text-[10px] text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image */}
        <input
          type="file"
          id="image"
          onChange={handleSendImage}
          accept="image/*"
          hidden
        />

        <label htmlFor="image" className="cursor-pointer hover:text-purple-500">
          <MdPhotoLibrary size={22} />
        </label>

        {/* Send */}
        <button type="submit" className="hover:scale-110 transition">
          <img src={assets.send_button} className="w-8 h-8" />
        </button>
      </form>
    </div>
  </div>
);
};
export default GlobalChatWindow;