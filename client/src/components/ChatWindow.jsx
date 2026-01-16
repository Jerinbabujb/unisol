import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import assets from "../assets";

const ChatWindow = () => {
  const { selectedUser, setSelectedUser } = useContext(ChatContext);

  if (!selectedUser) {
    return (
      <div className='hidden md:flex flex-col items-center justify-center h-full gap-2 text-gray-400 bg-gray-50/50'>
        <img src={assets.logo} alt='' className='w-16 opacity-20 grayscale'/>
        <p className='text-lg font-medium'>Select a match to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="bg-white px-4 py-3 md:px-6 md:py-4 flex justify-between items-center border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-3">
          {/* Back Button for Mobile */}
          <button 
            onClick={() => setSelectedUser(null)}
            className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-full transition"
          >
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
        
        <div className="flex items-center gap-2">
          <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 text-lg">📞</button>
          <button className="hidden sm:block px-4 py-1.5 text-xs font-bold text-pink-500 bg-pink-50 rounded-full">View Profile</button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6 bg-[#F5F7FA]">
        <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest">Today</div>
        
        {/* Received */}
        <div className="flex items-start gap-3 max-w-[90%] md:max-w-[70%]">
          <img src={selectedUser.avatar || assets.logo} className="w-8 h-8 rounded-full mt-1 object-cover" alt="" />
          <div>
            <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
              Hey! I saw you like hiking too. Have you been to the Peaks lately?
            </div>
            <span className="text-[10px] text-gray-400 ml-1 mt-1 block">10:42 AM</span>
          </div>
        </div>

        {/* Sent */}
        <div className="flex flex-col items-end gap-1 ml-auto max-w-[90%] md:max-w-[70%]">
          <div className="bg-pink-500 text-white p-3 md:p-4 rounded-2xl rounded-tr-none shadow-md text-sm">
            Yes! I went last Saturday. The weather was perfect. Do you go often?
          </div>
          <span className="text-[10px] text-gray-400 mr-1">10:45 AM ✓✓</span>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 md:p-6 bg-white border-t border-gray-100 shrink-0">
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 md:py-3">
          <button className="text-gray-400 text-xl font-light hover:text-pink-500">+</button>
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400"
          />
          <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
            <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;