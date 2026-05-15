import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar'; // Import SideBar
import MessageList from '../components/chat/MessageList';
import ProfileSidebar from '../components/chat/ProfileSidebar';
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from '../../context/AuthContext';
import ChatWindow from '../components/chat/ChatWindow';

const ChatPage = () => {
  const { selectedUser } = useContext(ChatContext);
  const { logout } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-white font-sans text-slate-900 overflow-hidden relative">

      {/* 1. DESKTOP FLOATING SIDEBAR */}
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      {/* 2. MAIN PAGE WRAPPER */}
      {/* lg:pl-[110px] creates space so the floating sidebar doesn't cover the Message List */}
      <div className="flex flex-col flex-1 lg:pl-[110px] transition-all duration-300">

        {/* TOP NAVBAR */}
        <div className="z-30">
          <Navbar />
        </div>

        <div className="flex flex-1 overflow-hidden relative">
          {/* LEFT SIDEBAR (Message List) */}
          <aside className={`${selectedUser ? 'hidden md:flex' : 'flex'} w-full md:w-80 lg:w-96 flex-shrink-0 border-r border-gray-100 flex-col bg-white z-20`}>
            <MessageList />
          </aside>

          {/* MAIN CHAT WINDOW */}
          <main className={`${!selectedUser ? 'hidden md:flex' : 'flex'} flex-1 bg-[#F5F7FA] flex-col overflow-hidden relative mb-20 lg:mb-0`}>
            <ChatWindow setOpenProfile={setOpenProfile} />
          </main>

          {/* RIGHT SIDEBAR (Profile Details) */}
          {openProfile && (
            <>
              {/* Desktop View */}
              <aside className="hidden xl:flex w-80 flex-shrink-0 border-l border-gray-100 p-6 overflow-y-auto bg-white">
                <ProfileSidebar setOpenProfile={setOpenProfile} />
              </aside>

              {/* Mobile/Tablet Overlay */}
              <div className="fixed inset-0 z-50 bg-white lg:hidden animate-in slide-in-from-right duration-300">
                <ProfileSidebar setOpenProfile={setOpenProfile} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* 3. MOBILE BOTTOM NAVIGATION */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-4 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">
        {/* Home */}
        <button onClick={() => navigate('/')} className={`flex flex-col items-center transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg>
        </button>

        {/* Friend Requests */}
        <button onClick={() => navigate('/friend-request')} className={`flex flex-col items-center transition-all ${location.pathname === '/friend-request' ? 'text-[#5D3289]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>

        {/* Chat Rooms */}
        <button onClick={() => navigate('/global-room-lists')} className={`flex flex-col items-center transition-all ${location.pathname === '/global-room-lists' ? 'text-[#5D3289]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
        </button>

        {/* Messages (Active) */}
        <button onClick={() => navigate('/messages')} className={`flex flex-col items-center transition-all ${location.pathname.includes('/messages') ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
        </button>

        {/* Profile */}
        <button onClick={() => navigate('/profile')} className={`flex flex-col items-center transition-all ${location.pathname === '/profile' ? 'text-[#5D3289]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
        </button>
      </nav>

      <style dangerouslySetInnerHTML={{
        __html: `
        .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
      `}} />
    </div>
  );
};

export default ChatPage;