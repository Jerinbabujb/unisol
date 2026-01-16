import React, { useContext } from 'react';
import assets from '../assets';
import { AuthContext } from '../../context/AuthContext';

const RightSideBar = () => {

  return (
    <div className="flex h-full w-full flex-col gap-8 bg-white px-6 py-8 text-slate-800 overflow-y-auto">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-black tracking-tight">Recent Activity</h3>
          <button className="text-pink-500 text-xs font-bold">See All</button>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <img src={assets.avatar_icon} alt="" className="h-10 w-10 rounded-full border border-gray-100" />
                <div className="absolute -bottom-1 -right-1 bg-pink-500 rounded-full p-1 border-2 border-white shadow-sm">
                  <div className="text-[8px] text-white">❤️</div>
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">
                  <span className="font-bold">Julia</span> liked you
                </p>
                <span className="text-[10px] text-gray-400">2m ago</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-[2rem] bg-pink-50 p-6 border border-pink-100">
        <span className="text-[10px] font-black uppercase text-pink-600 tracking-widest">Dating Tip</span>
        <p className="mt-2 text-xs leading-relaxed text-pink-700 font-medium">
          "The best first dates are usually active. Try a walk-and-talk coffee date!"
        </p>
      </div>

      <section>
        <h3 className="mb-4 text-lg font-black tracking-tight">Events</h3>
        <div className="space-y-3">
          {[1, 2].map((e) => (
            <div key={e} className="rounded-2xl bg-gray-50 p-4 hover:bg-pink-50 transition-colors cursor-pointer group">
              <span className="text-[10px] font-black text-pink-600 uppercase">Tomorrow • 7PM</span>
              <h4 className="text-sm font-bold group-hover:text-pink-600 transition-colors">Speed Dating Night</h4>
              <p className="text-[10px] text-gray-400 mt-1">Downtown Lounge</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default RightSideBar;