import React from 'react';
import assets from '../assets';

const RightSideBar = () => {
  return (
    <div className="flex h-full w-full flex-col gap-8 bg-white px-6 py-8 text-gray-900 overflow-y-auto border-l border-[#F4F0F9]">

      {/* Teaser: Likes You */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold tracking-tight">Likes You</h3>
          <span className="bg-[#5D3289] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">5 New</span>
        </div>

        {/* Horizontal scroll for blurred profiles */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#5D3289]/20 p-0.5">
                {/* Blur effect to mimic dating apps premium teaser */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img src={assets.avatar_icon} alt="Blurred user" className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#5D3289]/10"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                  <span className="flex w-4 h-4 bg-[#5D3289] rounded-full items-center justify-center text-[8px] text-white">💜</span>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-400 group-hover:text-[#5D3289]">See who</span>
            </div>
          ))}
        </div>
      </section>

      {/* New Matches */}
      <section className="flex-1">
        <h3 className="mb-4 text-lg font-bold tracking-tight">New Matches</h3>
        <div className="space-y-4">
          {['Sarah', 'Michael', 'Jessica'].map((name, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#F4F0F9] hover:border-[#5D3289]/30 hover:shadow-md cursor-pointer transition-all group">
              <div className="relative">
                <img src={assets.avatar_icon} className="h-12 w-12 rounded-full object-cover" alt={name} />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#5D3289] transition-colors">{name}</h4>
                <p className="text-xs text-gray-400 truncate">Matched 2 hours ago</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-purple-50 text-[#5D3289] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <div className="rounded-[24px] bg-gradient-to-br from-[#1A0B2E] to-[#4B2471] p-6 text-center relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#5D3289] rounded-full opacity-30 blur-2xl"></div>
        <h4 className="text-white font-bold text-sm mb-2">Unisoul Premium</h4>
        <p className="text-purple-200 text-xs mb-4">See everyone who liked you and get 5 extra Super Likes.</p>
        <button className="w-full py-2.5 bg-white text-[#5D3289] font-bold text-xs rounded-full hover:bg-gray-50 transition-colors">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;