import React, { useContext } from 'react';
import assets from '../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const SideBar = () => {
  const { unseenMessages } = useContext(ChatContext);
  const { authUser } = useContext(AuthContext); // Assuming authUser contains current user data
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Discovery', icon: '🧭', path: '/', badge: null },
    { name: 'Messages', icon: '💬', path: '/messages', badge: Object.values(unseenMessages).reduce((a, b) => a + b, 0) || 3 },
    { name: 'Likes', icon: '❤️', path: '/likes', badge: 12 },
    { name: 'Profile', icon: '👤', path: '/profile', badge: null },
    { name: 'Settings', icon: '⚙️', path: '/settings', badge: null },
  ];

  return (
    <div className="flex h-full flex-col bg-white p-6 text-slate-600">
      {/* 1. Logo */}
      <div className="mb-10 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E91E63] text-white">
          <span className="text-xl font-bold">♥</span>
        </div>
        <h1 className="text-xl font-bold text-[#E91E63]">HeartBeat</h1>
      </div>

      {/* 2. User Profile Header */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <img 
          src={authUser?.profilePic || assets.avatar_icon} 
          alt="User" 
          className="h-12 w-12 rounded-full border-2 border-pink-100 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-800">{authUser?.fullName || "Elena Gomez"}</p>
          <p className="text-[10px] font-medium text-gray-400">Premium Member</p>
        </div>
      </div>

      {/* 3. Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || (item.name === 'Discovery' && location.pathname === '/');
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`group relative flex cursor-pointer items-center justify-between rounded-full py-3 px-5 transition-all ${
                isActive 
                  ? 'bg-[#FFF0F7] text-[#E91E63]' 
                  : 'hover:bg-gray-50 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-lg ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                  {item.icon}
                </span>
                <span className={`text-sm font-semibold`}>{item.name}</span>
              </div>
              
              {item.badge > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E91E63] text-[10px] font-bold text-white">
                  {item.badge}
                </span>
              )}
              
              {isActive && (
                <div className="absolute left-0 h-6 w-1 rounded-r-full bg-[#E91E63]" />
              )}
            </div>
          );
        })}
      </nav>

      {/* 4. Upgrade Promo Card (Bottom) */}
      <div className="mt-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF4E98] to-[#E91E63] p-5 text-white">
        <h4 className="text-sm font-bold">Get more matches!</h4>
        <p className="mt-1 text-[10px] leading-tight text-pink-100">
          See who liked you with Gold
        </p>
        <button className="mt-4 w-full rounded-full bg-white py-2 text-[10px] font-bold text-[#E91E63] shadow-lg">
          Upgrade to Gold
        </button>
      </div>
    </div>
  );
};

export default SideBar;