import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import FeedContainer from '../components/FeedContainer';
import RightSideBar from '../components/RightSideBar';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F9F9F9] font-sans text-slate-800 overflow-hidden relative">
      
      {/* 1. Left Sidebar - Desktop only (Fixed) */}
      <aside className="hidden lg:flex w-64 flex-shrink-0 border-r border-gray-100 bg-white">
        <SideBar />
      </aside>

      {/* 2. Main Discovery Feed - Scrollable */}
      <main className="flex-1 overflow-y-auto bg-white pb-20 lg:pb-0">
        <FeedContainer onOpenMenu={() => setIsMobileMenuOpen(true)} />
      </main>

      {/* 3. Right Activity Bar - Desktop Only (Fixed) */}
      <aside className="hidden xl:flex w-80 flex-shrink-0 border-l border-gray-100 bg-white">
        <RightSideBar />
      </aside>

      {/* MOBILE OVERLAY MENU (Sidebar appears as a drawer) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl animate-in slide-in-from-left duration-300">
             <SideBar />
             <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl"
             >✕</button>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM TAB BAR */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-40">
        <button className="text-pink-500 text-2xl">🧭</button>
        <button className="text-gray-400 text-2xl">💬</button>
        <button className="text-gray-400 text-2xl">❤️</button>
        <button className="text-gray-400 text-2xl">👤</button>
      </nav>
    </div>
  );
};

export default HomePage;