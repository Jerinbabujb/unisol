import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import SideBar from "../../SideBar"; // 1. Import SideBar

const GroupsLists = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('public');
  const {
    globalRoomLists, globalRoom, globalRoomJoin, joinedRooms,
    joinRoom, getPrivateRoom, privateRoom, privateRoomMembers
  } = useContext(ChatContext);
  const { authUser, logout } = useContext(AuthContext);

  useEffect(() => {
    globalRoomLists();
    getPrivateRoom();
    privateRoomMembers();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isJoind = (roomName) => {
    return joinedRooms?.some(room => room.roomName === roomName);
  }

  const isPrivateRoomJoined = (roomName) => {
    return privateRoom?.some(room => room.roomName === roomName);
  }

  const handleBack = () => {
    navigate("/");
  };

  const joiningRoom = (room, id) => {
    joinRoom(id);
    globalRoomJoin(room);
    navigate(`/global-room/${room}`);
  }
  const joiningRoomPrivate = (room, id) => {
    joinRoom(id);
    globalRoomJoin(room);
    navigate(`/private-room/${room}`);
  }

  return (
    <div className="flex h-screen w-full bg-[#FDFCFE] font-sans text-gray-900 overflow-hidden relative">

      {/* 2. DESKTOP SIDEBAR */}
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      {/* 3. MAIN VIEWPORT - Added lg:pl-[120px] for Sidebar offset */}
      <main className="flex-1 overflow-y-auto bg-[#FDFCFE] custom-scrollbar pb-32 lg:pb-10 lg:pl-[120px] transition-all duration-300">

        {/* Mobile Header */}
        <header className="lg:hidden bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-[#F4F0F9] px-6 py-4 flex items-center justify-between">
          <button onClick={handleBack} className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h2 className="font-black text-gray-900">Communities</h2>
          <div className="w-6"></div>
        </header>

        <div className="max-w-6xl mx-auto p-6 md:p-10">

          {/* Tabs Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex bg-gray-100 p-1.5 rounded-2xl w-fit">
              <button onClick={() => setActiveTab("public")} className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "public" ? "bg-white text-[#5D3289] shadow-sm" : "text-gray-400"}`}>Public</button>
              <button onClick={() => setActiveTab("private")} className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "private" ? "bg-white text-[#5D3289] shadow-sm" : "text-gray-400"}`}>Private</button>
            </div>

            {/* Desktop Only Create Button */}
            {activeTab === 'private' && (
              <button
                onClick={() => navigate('/create-room')}
                className="hidden md:block bg-[#5D3289] text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-[#4B2471] transition-all"
              >
                + Create Room
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="relative mb-10 group">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3289] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Find your tribe..." className="w-full bg-white border border-[#F4F0F9] py-4 pl-14 pr-6 rounded-[24px] outline-none focus:ring-4 focus:ring-purple-500/5 focus:border-[#5D3289] transition-all shadow-sm" />
          </div>

          {/* Room Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {(activeTab === 'public' ? globalRoom : privateRoom).map((room, index) => (
              <div key={index} className="bg-white rounded-[32px] border border-[#F4F0F9] overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(93,50,137,0.08)] transition-all duration-300 group">
                <div className="h-32 bg-gradient-to-br from-[#5D3289] to-[#7B52AB] relative">
                  {room.roomImage && <img src={room.roomImage} className="w-full h-full object-cover" alt="" />}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {activeTab}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-gray-900 mb-2">{room.roomName}</h3>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                    </div>

                    {activeTab === "public" ? (
                      <button onClick={() => joiningRoom(room.roomName, room.id)} className="bg-[#5D3289] text-white px-5 py-2 rounded-xl text-xs font-bold">Join Hub</button>
                    ) : (
                      <button onClick={() => joiningRoomPrivate(room.roomName, room.id)} className="bg-[#5D3289] text-white px-5 py-2 rounded-xl text-xs font-bold">Join Hub</button>

                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(activeTab === 'public' ? globalRoom : privateRoom).length === 0 && (
            <div className="text-center py-20 text-gray-400 font-medium">No communities found in this category.</div>
          )}
        </div>
      </main>

      {/* 4. MOBILE FLOATING "CREATE ROOM" BUTTON */}
      {activeTab === 'private' && (
        <button
          onClick={() => navigate('/create-room')}
          className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-[#5D3289] text-white rounded-full shadow-2xl flex items-center justify-center z-50 active:scale-95 transition-transform"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </button>
      )}

      {/* 5. MOBILE BOTTOM NAVIGATION */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-2 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">

        {/* Home */}
        <button onClick={() => navigate('/')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg>
        </button>

        {/* Friend Requests (Active Page) */}
        <button onClick={() => navigate('/friend-request')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/friend-request' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </button>

        {/* Chat Room */}
        <button onClick={() => navigate('/global-room-lists')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/global-room-lists' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
        </button>

        {/* Messages */}
        <button onClick={() => navigate('/messages')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/messages' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
        </button>

        {/* Profile (Added) */}
        <button onClick={() => navigate('/profile')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/profile' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
        </button>

        {/* Settings */}
        <button onClick={() => navigate('/settings')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/settings' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </button>

        {/* Logout */}
        <button onClick={handleLogout} className="flex flex-col items-center flex-1 transition-all text-gray-400 hover:text-red-500">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        </button>
      </nav>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 0px; } 
        .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
      `}} />
    </div>
  );
};

export default GroupsLists;