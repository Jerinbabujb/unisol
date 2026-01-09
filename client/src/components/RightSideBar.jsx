import React, { useContext } from 'react';
import assets from '../assets';
import { AuthContext } from '../../context/AuthContext';

const RightSideBar = () => {
  const { logout } = useContext(AuthContext);

  // Mock data to match the UI design
  const activities = [
    { id: 1, name: 'Julia', action: 'liked your photo', time: '2 mins ago', icon: '❤️', color: 'bg-pink-500' },
    { id: 2, name: 'Michael', action: 'sent you a message', time: '15 mins ago', icon: '💬', color: 'bg-blue-500' },
    { id: 3, name: 'Sophia', action: 'New match with', time: '1 hour ago', icon: '🤝', color: 'bg-green-500' },
  ];

  const events = [
    { id: 1, title: 'Speed Dating Night', time: 'TOMORROW • 7:00 PM', location: 'The Coffee House, Downtown' },
    { id: 2, title: 'Singles Hiking Club', time: 'SATURDAY • 10:00 AM', location: 'Griffith Park Trailhead' },
  ];

  return (
    <div className="flex h-full flex-col gap-8 bg-white px-6 py-8 text-slate-800">
      
      {/* --- Recent Activity Section --- */}
      <section>
        <h3 className="mb-4 text-lg font-bold">Recent Activity</h3>
        <div className="flex flex-col gap-5">
          {activities.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative">
                <img src={assets.avatar_icon} alt="" className="h-10 w-10 rounded-full object-cover" />
                <span className={`absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white ${item.color}`}>
                  {item.id === 1 ? '♥' : item.id === 2 ? '✉' : '✔'}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">
                  <span className="font-bold">{item.name}</span> {item.action}
                </p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Safety Tip Card --- */}
      <div className="rounded-[2rem] bg-[#FFF0F7] p-6 text-center">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E91E63]">Safety Tip</h4>
        <p className="mt-2 text-xs leading-relaxed text-[#D81B60]">
          Always meet in public places and tell a friend where you are going. Stay safe!
        </p>
      </div>

      {/* --- Local Events Section --- */}
      <section>
        <h3 className="mb-4 text-lg font-bold">Local Events</h3>
        <div className="flex flex-col gap-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-[1.5rem] bg-[#F3F4F6] p-4 transition-hover hover:bg-gray-200 cursor-pointer">
              <span className="text-[10px] font-bold text-[#E91E63]">{event.time}</span>
              <h4 className="text-sm font-bold">{event.title}</h4>
              <p className="text-[11px] text-gray-500">{event.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Logout at the bottom --- */}
      <div className="mt-auto pt-4">
        <button 
          onClick={() => logout()} 
          className="w-full rounded-full border border-gray-200 py-2 text-xs font-medium text-gray-400 hover:bg-gray-50 transition-colors"
        >
          Logout Session
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;