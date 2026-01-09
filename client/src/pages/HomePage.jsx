import React from 'react';
import SideBar from '../components/SideBar';
import FeedContainer from '../components/FeedContainer'; // Renamed from ChatContainer for this view
import RightSideBar from '../components/RightSideBar';

const HomePage = () => {
  return (
    <div className="flex h-screen w-full bg-[#F9F9F9] font-sans text-slate-800">
      {/* 1. Left Sidebar - Fixed width */}
      <div className="w-64 flex-shrink-0 border-r border-gray-100 bg-white">
        <SideBar />
      </div>

      {/* 2. Main Discovery Feed - Scrollable */}
      <main className="flex-1 overflow-y-auto bg-white">
        <FeedContainer />
      </main>

      {/* 3. Right Activity/Events Bar - Fixed width */}
      <div className="w-80 flex-shrink-0 border-l border-gray-100 bg-white px-6 py-8">
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;