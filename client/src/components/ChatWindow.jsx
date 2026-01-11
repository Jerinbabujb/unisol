const ChatWindow = () => (
  <>
    <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/150?u=emma" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-bold">Emma, 24</h3>
          <p className="text-[10px] text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active now
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">📞</button>
        <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">📹</button>
        <button className="px-4 py-1.5 text-xs font-bold text-pink-500 bg-pink-50 rounded-full hover:bg-pink-100 transition">View Profile</button>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
      <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest">Today</div>
      
      {/* Received */}
      <div className="flex items-start gap-3 max-w-[60%]">
        <img src="https://i.pravatar.cc/150?u=emma" className="w-8 h-8 rounded-full mt-1" />
        <div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
            Hey! I saw you like hiking too. Have you been to the Peaks lately?
          </div>
          <span className="text-[10px] text-gray-400 ml-1 mt-1 block">10:42 AM</span>
        </div>
      </div>

      {/* Sent */}
      <div className="flex flex-col items-end gap-1 ml-auto max-w-[60%]">
        <div className="bg-pink-500 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm">
          Yes! I went last Saturday. The weather was perfect for it. Do you go often?
        </div>
        <span className="text-[10px] text-gray-400 mr-1">10:45 AM ✓✓</span>
      </div>

      {/* Typing indicator (simulated) */}
      <div className="flex items-start gap-3 opacity-50">
        <img src="https://i.pravatar.cc/150?u=emma" className="w-8 h-8 rounded-full" />
        <div className="bg-white p-3 rounded-full flex gap-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>

    <div className="p-6 bg-white border-t border-gray-100">
      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3">
        <button className="text-gray-400 text-xl">+</button>
        <button className="text-gray-400 text-xl">🖼️</button>
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400"
        />
        <button className="text-gray-400">😊</button>
        <button className="bg-pink-500 text-white p-2 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </button>
      </div>
    </div>
  </>
);

export default ChatWindow;