import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import FeedContainer from '../components/FeedContainer';
import RightSideBar from '../components/RightSideBar';
import { useNavigate, useLocation } from 'react-router-dom';
import FriendRequests from '../components/friends/FriendRequests';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Useful for highlighting active tabs

  return (
    <div className="flex h-screen w-full bg-[#FDFCFE] font-sans text-gray-900 overflow-hidden relative selection:bg-purple-100 selection:text-[#5D3289]">

      {/* 1. Left Sidebar - Desktop only (Fixed) */}
      <aside className="hidden lg:flex w-64 flex-shrink-0 border-r border-[#F4F0F9] bg-white shadow-[4px_0_24px_-12px_rgba(93,50,137,0.05)] z-20">
        <SideBar />
      </aside>

      {/* 2. Main Discovery Feed - Scrollable */}
      <main className="flex-1 overflow-y-auto bg-transparent pb-20 lg:pb-0 custom-scrollbar">
        <FeedContainer onOpenMenu={() => setIsMobileMenuOpen(true)} />
      </main>

      {/* 3. Right Activity Bar - Desktop Only (Fixed) */}
      <aside className="hidden xl:flex w-80 flex-shrink-0 border-l border-[#F4F0F9] bg-white shadow-[-4px_0_24px_-12px_rgba(93,50,137,0.05)] z-20">
        <RightSideBar />
      </aside>

      {/* MOBILE OVERLAY MENU (Sidebar appears as a drawer) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#1A0B2E]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col border-r border-[#F4F0F9]">
            <SideBar />

            {/* Refined Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-purple-50 hover:text-[#5D3289] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM TAB BAR */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-[#F4F0F9] px-6 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">

        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-[#5D3289]/70'}`}
        >
          <span className="text-2xl drop-shadow-sm">🧭</span>
          {location.pathname === '/' && <span className="w-1 h-1 rounded-full bg-[#5D3289] absolute -bottom-2"></span>}
        </button>

        <button
          onClick={() => navigate('/messages')}
          className={`flex flex-col items-center gap-1 transition-all ${location.pathname === '/messages' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-[#5D3289]/70'}`}
        >
          <span className="text-2xl drop-shadow-sm">💬</span>
          {location.pathname === '/messages' && <span className="w-1 h-1 rounded-full bg-[#5D3289] absolute -bottom-2"></span>}
        </button>

        <button
          onClick={() => navigate('/likes')} // Assuming you have or will have a likes route
          className={`flex flex-col items-center gap-1 transition-all ${location.pathname === '/likes' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-[#5D3289]/70'}`}
        >
          <span className="text-2xl drop-shadow-sm">💜</span> {/* Changed red heart to purple heart to match theme */}
          {location.pathname === '/likes' && <span className="w-1 h-1 rounded-full bg-[#5D3289] absolute -bottom-2"></span>}
        </button>

        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center gap-1 transition-all ${location.pathname === '/profile' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-[#5D3289]/70'}`}
        >
          <span className="text-2xl drop-shadow-sm">👤</span>
          {location.pathname === '/profile' && <span className="w-1 h-1 rounded-full bg-[#5D3289] absolute -bottom-2"></span>}
        </button>

      </nav>

      {/* Scrollbar styling for the main feed container */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #E9E3F4; border-radius: 20px; }
        .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
      `}} />
    </div>
  );
};

export default HomePage;