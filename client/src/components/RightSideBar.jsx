import React, { useContext } from 'react';
import assets from '../assets';
import { AuthContext } from '../../context/AuthContext';

const RightSideBar = () => {
  return (
    <div className="flex h-full w-full flex-col gap-8 bg-white px-6 py-8 text-gray-900 overflow-y-auto custom-scrollbar">

      {/* Recent Activity Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold tracking-tight">Recent Activity</h3>
          <button className="text-[#5D3289] text-xs font-bold hover:text-[#4B2471] hover:underline transition-all">
            See All
          </button>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <img
                  src={assets.avatar_icon}
                  alt="User avatar"
                  className="h-10 w-10 rounded-full border border-gray-100 object-cover group-hover:border-[#5D3289]/30 transition-colors"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#5D3289] rounded-full p-1 border-2 border-white shadow-sm flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900 group-hover:text-[#5D3289] transition-colors">Julia</span> liked you
                </p>
                <span className="text-[10px] text-gray-400 font-medium">2m ago</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dating Tip Section (Premium Card Look) */}
      <div className="rounded-[2rem] bg-gradient-to-br from-[#F8F5FB] to-white p-6 border border-[#EAE2F3] shadow-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#5D3289] rounded-full opacity-[0.03] blur-xl"></div>

        <div className="relative z-10">
          <span className="text-[10px] font-bold uppercase text-[#5D3289] tracking-widest flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Dating Tip
          </span>
          <p className="mt-2 text-xs leading-relaxed text-[#4B2471] font-medium">
            "The best first dates are usually active. Try a walk-and-talk coffee date to ease the pressure!"
          </p>
        </div>
      </div>

      {/* Events Section */}
      <section>
        <h3 className="mb-4 text-lg font-bold tracking-tight">Events</h3>
        <div className="space-y-3">
          {[1, 2].map((e) => (
            <div
              key={e}
              className="rounded-2xl bg-gray-50/70 border border-transparent p-4 hover:border-[#5D3289]/20 hover:bg-[#F8F5FB] hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5D3289]"></span>
                <span className="text-[10px] font-bold text-[#5D3289] uppercase tracking-wider">Tomorrow • 7PM</span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#5D3289] transition-colors mt-0.5">Speed Dating Night</h4>
              <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1 font-medium">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Downtown Lounge
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Styles for Scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #E9E3F4; border-radius: 10px; }
      `}} />
    </div>
  );
};

export default RightSideBar;