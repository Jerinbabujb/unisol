import { useContext, useEffect, useState, useRef } from "react";
import { ChatContext } from "../../context/ChatContext";
import assets from "../assets";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ChatWindow = () => {
  const { selectedUser, setSelectedUser, messages, getMessages, sendMessage } = useContext(ChatContext);
  const { authUser } = useContext(AuthContext);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser.id);
    }
  }, [selectedUser, getMessages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await sendMessage({ text: input.trim() });
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

  const formatMessageTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!selectedUser) {
    return (
      <div className='hidden md:flex flex-col items-center justify-center h-full gap-2 text-gray-400 bg-gray-50/50'>
        <img src={assets.logo} alt='' className='w-16 opacity-20 grayscale' />
        <p className='text-lg font-medium'>Select a match to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 md:px-6 md:py-4 flex justify-between items-center border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => setSelectedUser(null)} className="md:hidden p-2 -ml-2 text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img src={selectedUser.avatar || assets.logo} className="w-10 h-10 rounded-full object-cover" alt="" />
          <div>
            <h3 className="font-bold text-sm md:text-base">{selectedUser.fullName}</h3>
            <p className="text-[10px] text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active now
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 bg-[#F8F9FB]">
        {messages.map((msg, index) => {
          const isMine = msg.senderId === authUser.id;
          return (
            <div 
              key={index} 
              className={`flex items-end gap-2 ${isMine ? 'flex-row-reverse self-end' : 'flex-row self-start'}`}
            >
              <img 
                src={isMine ? (authUser.avatar || assets.avatar_icon) : (selectedUser.avatar || assets.avatar_icon)} 
                className="w-7 h-7 rounded-full object-cover mb-1" 
                alt="" 
              />
              
              <div className={`flex flex-col ${isMine ? 'items-end' : 'items-start'}`}>
                {msg.image ? (
                  <img src={msg.image} alt='' className='max-w-[200px] md:max-w-xs rounded-2xl border border-gray-200 shadow-sm' />
                ) : (
                  <div className={`p-3 rounded-2xl text-sm shadow-sm max-w-[260px] md:max-w-md break-words ${
                    isMine 
                      ? 'bg-pink-500 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                )}
                <span className="text-[9px] text-gray-400 mt-1 px-1">
                  {formatMessageTime(msg.createdAt)}
                </span>
              </div>
              <div ref={scrollRef} />
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2 md:gap-3 bg-gray-100 px-4 py-2 rounded-full">
          <input 
            type='text' 
            onChange={(e) => setInput(e.target.value)} 
            value={input} 
            placeholder='Type a message...' 
            className='flex-1 bg-transparent border-none outline-none text-sm py-1.5 text-gray-700 placeholder-gray-400'
          />
          
          <input type='file' id='image' onChange={handleSendImage} accept='image/*' hidden />
          <label htmlFor='image' className="cursor-pointer hover:opacity-70 transition">
            <img src={assets.gallery_icon} alt='gallery' className='w-5' />
          </label>
          
          <button type="submit" className="hover:scale-110 transition active:scale-95">
            <img src={assets.send_button} alt='send' className='w-8 h-8' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;