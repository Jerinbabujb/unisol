import React, { use, useContext, useEffect } from 'react';
import assets from '../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const SideBar = ({onFriendRequest}) => {
  const { unseenMessages, users,requestData,freindRequestCheck } = useContext(ChatContext);
  const { authUser, logout, checkAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
 

  // Calculate total unseen messages
  const totalUnseen = Object.values(unseenMessages || {}).reduce((a, b) => a + b, 0);

useEffect(() => {
  freindRequestCheck();
}, []); 


  const menuItems = [
    { name: 'Discovery', icon: '🧭', path: '/', badge: null },
    { name: 'Messages', icon: '💬', path: '/messages', badge: totalUnseen > 0 ? totalUnseen : null },
    { name: 'Chat-Rooms', icon: '🗣️', path: '/global-room-lists',badge:null},
    { name: 'Requests', icon: '❤️', path: '/friend-request', badge: requestData?.friendRequest?.length },
    { name: 'Games', icon: '🎮', path: '#', badge: null },
    { name: 'Profile', icon: '👤', path: '/profile', badge: null },
    { name: 'Settings', icon: '⚙️', path: '/settings', badge: null },
  ];
  

  return (
    <div className="flex h-full w-full flex-col bg-white p-6 text-slate-600 overflow-y-auto">
    
      {/* Logo */}
      <div className="mb-10 flex items-center gap-2">
        <img src={assets.logo} alt='logo' className="w-8 h-8 rounded-lg bg-pink-500 p-1.5"/>
        <h1 className="text-xl font-bold text-pink-600 tracking-tighter">UNISOUL</h1>
      </div>

      {authUser &&
      <div className="mb-10 flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
        <img src={authUser?.avatar} className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm" alt="User" />
        <div className="flex flex-col min-w-0">
          <p className="text-sm font-bold text-slate-800 truncate">{authUser?.fullName || "Elena Gomez"}</p>
          <p className="text-[10px] font-medium text-gray-400">Premium Member</p>
        </div>
      </div>
}

      {/* Menu */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex cursor-pointer items-center justify-between rounded-2xl py-3 px-4 transition-all ${
                isActive ? 'bg-pink-50 text-pink-600 shadow-sm' : 'hover:bg-gray-50 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-bold">{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-pink-500 text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Boost Profile */}
      <div className="mt-auto pt-6">
        <div className="rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 p-4 text-white">
          <h4 className="text-xs font-bold">Boost Profile</h4>
          <p className="mt-1 text-[10px] opacity-80">Get 10x more visibility</p>
          <button className="mt-3 w-full rounded-xl bg-white/20 py-2 text-[10px] font-bold hover:bg-white/30 backdrop-blur-md">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto">
        <button 
          onClick={() => logout()} 
          className="w-full rounded-2xl bg-gray-50 py-3 text-xs font-bold text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-95"
        >
          Logout Session
        </button>
      </div>
    </div>
  );
};

export default SideBar;
