import React, { useContext } from 'react';
import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';

const FeedContainer = () => {
  const { users } = useContext(ChatContext);

  // Mock data for the cards to match the design's "bio/tags"
  const topPicks = [
    { id: 1, name: 'Sarah', age: 24, bio: 'Passionate...', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', verified: true },
    { id: 2, name: 'Marcus', age: 29, bio: 'Always...', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', online: true },
    { id: 3, name: 'Chloe', age: 23, bio: 'Yoga, hiking...', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', verified: true },
    { id: 4, name: 'David', age: 31, bio: 'Architect by...', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { id: 5, name: 'Isabella', age: 26, bio: 'Looking for...', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400', verified: true },
    { id: 6, name: 'Liam', age: 27, bio: 'Bibliophile...', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400' },
  ];

  return (
    <div className="flex h-full flex-col bg-white">
      {/* 1. Top Search Header */}
      <header className="flex items-center justify-between px-8 py-5">
        <div className="relative w-full max-w-lg">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input 
            type="text" 
            placeholder="Search for interests or names..." 
            className="w-full rounded-full bg-gray-100 py-2.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>
        <div className="flex gap-4 ml-4">
          <button className="rounded-full bg-gray-100 p-2.5 text-gray-500">🔔</button>
          <button className="rounded-full bg-gray-100 p-2.5 text-gray-500">☰</button>
        </div>
      </header>

      {/* 2. Title Section */}
      <div className="px-8 py-4">
        <h2 className="text-3xl font-extrabold text-slate-800">Top Picks for You</h2>
        <p className="text-sm text-gray-400">Hand-picked profiles based on your music and travel interests</p>
        
        {/* Filters */}
        <div className="mt-6 flex gap-3">
          <button className="flex items-center gap-2 rounded-full bg-[#E91E63] px-5 py-2 text-sm font-semibold text-white">
            Nearby <span className="text-[10px]">▼</span>
          </button>
          <button className="rounded-full border border-gray-100 px-5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50">
            Online Now
          </button>
          <button className="rounded-full border border-gray-100 px-5 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50">
            Verified
          </button>
        </div>
      </div>

      {/* 3. Discovery Grid */}
      <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
        {topPicks.map((user) => (
          <div key={user.id} className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] shadow-sm transition-transform hover:-translate-y-1">
            {/* Image with Arch Shape */}
            <div className="aspect-[3/4] overflow-hidden">
              <img src={user.img} alt={user.name} className="h-full w-full object-cover" />
            </div>
            
            {/* Overlay Info */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent p-5 text-white">
              <div className="flex items-center gap-1">
                <h3 className="text-lg font-bold">{user.name}, {user.age}</h3>
                {user.verified && <span className="text-blue-400 text-xs">✔️</span>}
                {user.online && <span className="h-2 w-2 rounded-full bg-green-500"></span>}
              </div>
              <p className="text-xs opacity-80">{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedContainer;