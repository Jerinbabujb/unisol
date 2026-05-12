import React, { useContext, useState } from 'react';
import SideBar from '../components/SideBar';
import FeedContainer from '../components/FeedContainer';
import RightSideBar from '../components/RightSideBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Add your auth clearing logic here (e.g., localStorage.removeItem('token'))
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full bg-[#FDFCFE] font-sans text-gray-900 overflow-hidden relative">

      {/* 1. Floating Left Navigation - Desktop */}
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      {/* 2. Main Discovery Viewport */}
      {/* Notice the lg:pl-[120px] -> This makes room for the collapsed floating dock (88px wide + 32px gap) */}
      <main className="flex-1 overflow-y-auto bg-[#FDFCFE] relative custom-scrollbar flex flex-col lg:pl-[120px]">
        <FeedContainer onOpenMenu={() => setIsMobileMenuOpen(true)} />
      </main>

      {/* 3. Match Queue & Messages - Desktop */}
      {/* Made this slightly sleeker and let it border smoothly */}
      <aside className="hidden xl:flex w-[340px] flex-shrink-0 bg-white shadow-[-12px_0_40px_-12px_rgba(93,50,137,0.05)] z-20 relative border-l border-[#F4F0F9]">
        <RightSideBar />
      </aside>

      {/* MOBILE OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-[#1A0B2E]/40 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl animate-in slide-in-from-left duration-300">
            {/* Mobile Sidebar content */}
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAV */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-4 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">
        {/* Home */}
        <button onClick={() => navigate('/')} className={`flex flex-col items-center transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg>
        </button>

        {/* Friend Requests */}
        <button onClick={() => navigate('/friend-request')} className={`flex flex-col items-center transition-all text-gray-400 hover:text-gray-600`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </button>

        {/* Chat Room (New) */}
        <button onClick={() => navigate('/global-room-lists')} className={`flex flex-col items-center transition-all ${location.pathname === '/chatroom' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
        </button>

        {/* Messages */}
        <button onClick={() => navigate('/messages')} className={`flex flex-col items-center transition-all ${location.pathname === '/messages' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
        </button>

        {/* Profile */}
        <button onClick={() => navigate('/profile')} className={`flex flex-col items-center transition-all ${location.pathname === '/profile' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
        </button>

        {/* Logout (New) */}
        <button onClick={() => logOut()} className="flex flex-col items-center transition-all text-gray-400 hover:text-red-500">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        </button>
      </nav>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 0px; } 
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
      `}} />
    </div>
  );
};

export default HomePage;