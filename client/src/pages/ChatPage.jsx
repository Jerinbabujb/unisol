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
        .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
      `}} />
    </div>
  );
};

export default ChatPage;