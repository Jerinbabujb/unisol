import React, { useContext, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import MessageList from '../components/chat/MessageList';
import ProfileSidebar from '../components/chat/ProfileSidebar';
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from '../../context/AuthContext';
import ChatWindow from '../components/chat/ChatWindow';

const ChatPage = () => {
  const { selectedUser } = useContext(ChatContext);
  const { logout, authUser } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const accentColor = authUser?.preferredColor || '#5D3289';

  const fontSize = useMemo(() => {
    switch (authUser?.preferredFont) {
      case 'small':
        return '14px';
      case 'large':
        return '18px';
      case 'extra-large':
        return '20px';
      case 'normal':
      default:
        return '16px';
    }
  }, [authUser?.preferredFont]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div
      className="flex h-screen bg-white font-sans text-slate-900 overflow-hidden relative"
      style={{
        fontSize,
        '--accent-color': accentColor
      }}
    >

      {/* Desktop Sidebar */}
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col flex-1 lg:pl-[110px] transition-all duration-300">

        <Navbar />

        <div className="flex flex-1 overflow-hidden relative">

          {/* Message List */}
          <aside className={`${selectedUser ? 'hidden md:flex' : 'flex'} w-full md:w-80 lg:w-96 flex-shrink-0 border-r border-gray-100 flex-col bg-white z-20`}>
            <MessageList />
          </aside>

          {/* Chat Window */}
          <main className={`${!selectedUser ? 'hidden md:flex' : 'flex'} flex-1 bg-[#F5F7FA] flex-col overflow-hidden relative mb-20 lg:mb-0`}>
            <ChatWindow setOpenProfile={setOpenProfile} />
          </main>

          {/* Profile Sidebar */}
          {openProfile && (
            <>
              <aside className="hidden xl:flex w-80 flex-shrink-0 border-l border-gray-100 p-6 overflow-y-auto bg-white">
                <ProfileSidebar setOpenProfile={setOpenProfile} />
              </aside>

              <div className="fixed inset-0 z-50 bg-white lg:hidden animate-in slide-in-from-right duration-300">
                <ProfileSidebar setOpenProfile={setOpenProfile} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-2 py-4 flex justify-between items-center z-40 safe-area-pb">

        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center flex-1 transition-all ${
            location.pathname === '/' ? 'scale-110' : 'text-gray-400'
          }`}
          style={{ color: location.pathname === '/' ? accentColor : undefined }}
        >
          🏠
        </button>

        <button
          onClick={() => navigate('/friend-request')}
          className={`flex flex-col items-center flex-1 transition-all ${
            location.pathname === '/friend-request' ? 'scale-110' : 'text-gray-400'
          }`}
          style={{ color: location.pathname === '/friend-request' ? accentColor : undefined }}
        >
          ❤️
        </button>

        <button
          onClick={() => navigate('/global-room-lists')}
          className={`flex flex-col items-center flex-1 transition-all ${
            location.pathname === '/global-room-lists' ? 'scale-110' : 'text-gray-400'
          }`}
          style={{ color: location.pathname === '/global-room-lists' ? accentColor : undefined }}
        >
          💬
        </button>

        <button
          onClick={() => navigate('/messages')}
          className={`flex flex-col items-center flex-1 transition-all ${
            location.pathname === '/messages' ? 'scale-110' : 'text-gray-400'
          }`}
          style={{ color: location.pathname === '/messages' ? accentColor : undefined }}
        >
          📩
        </button>

        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center flex-1 transition-all ${
            location.pathname === '/profile' ? 'scale-110' : 'text-gray-400'
          }`}
          style={{ color: location.pathname === '/profile' ? accentColor : undefined }}
        >
          👤
        </button>

        <button
          onClick={() => navigate('/settings')}
          className={`flex flex-col items-center flex-1 transition-all ${
            location.pathname === '/settings' ? 'scale-110' : 'text-gray-400'
          }`}
          style={{ color: location.pathname === '/settings' ? accentColor : undefined }}
        >
          ⚙️
        </button>

        <button
          onClick={handleLogout}
          className="flex flex-col items-center flex-1 text-gray-400 hover:text-red-500"
        >
          🚪
        </button>
      </nav>

      <style dangerouslySetInnerHTML={{
        __html: `
          .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
        `
      }} />
    </div>
  );
};

export default ChatPage;