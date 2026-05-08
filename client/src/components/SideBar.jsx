import React, { useContext, useEffect } from 'react';
import assets from '../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const SideBar = ({ onFriendRequest }) => {
  const { unseenMessages, users, requestData, freindRequestCheck } = useContext(ChatContext);
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
    { name: 'Chat-Rooms', icon: '🗣️', path: '/global-room-lists', badge: null },
    { name: 'Requests', icon: '💜', path: '/friend-request', badge: requestData?.friendRequest?.length },
    { name: 'Games', icon: '🎮', path: '#', badge: null },
    { name: 'Profile', icon: '👤', path: '/profile', badge: null },
    { name: 'Settings', icon: '⚙️', path: '/settings', badge: null },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-white p-6 text-gray-600 overflow-y-auto custom-scrollbar">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <img src={assets.logo} alt='Unisoul Logo' className="w-9 h-9 rounded-xl bg-[#F8F5FB] p-1 object-contain" />
        <h1 className="text-xl font-black text-[#5D3289] tracking-tight">UNISOUL</h1>
      </div>

      {/* User Profile Snippet */}
      {authUser && (
        <div className="mb-8 flex items-center gap-3 bg-[#F8F5FB]/50 border border-[#F4F0F9] p-3 rounded-2xl transition-all hover:bg-[#F8F5FB]">
          <img
            src={authUser?.avatar}
            className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
            alt="User"
          />
          <div className="flex flex-col min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              {authUser?.fullName || "Elena Gomez"}
            </p>
            <p className="text-[10px] font-bold text-[#5D3289] tracking-wide uppercase mt-0.5">
              Premium Member
            </p>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-1.5">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex cursor-pointer items-center justify-between rounded-2xl py-3.5 px-4 transition-all duration-200 group ${isActive
                  ? 'bg-[#F8F5FB] text-[#5D3289] shadow-[0_2px_10px_-4px_rgba(93,50,137,0.2)]'
                  : 'hover:bg-gray-50/80 text-gray-500 hover:text-gray-800'
                }`}
            >
              <div className="flex items-center gap-3.5">
                <span className={`text-xl transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </span>
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-semibold'}`}>
                  {item.name}
                </span>
              </div>

              {/* Badge */}
              {item.badge > 0 && (
                <span className="bg-[#5D3289] text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow-sm">
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4 pt-8">

        {/* Boost Profile Card */}
        <div className="rounded-[20px] bg-gradient-to-br from-[#4B2471] via-[#5D3289] to-[#7B52AB] p-5 text-white shadow-lg shadow-[#5D3289]/20 relative overflow-hidden group cursor-pointer">
          {/* Decorative background circle */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">⚡</span>
              <h4 className="text-xs font-bold tracking-wide">Boost Profile</h4>
            </div>
            <p className="mt-1 text-[11px] text-purple-100 font-medium">Get 10x more visibility</p>
            <button className="mt-4 w-full rounded-xl bg-white/15 py-2.5 text-[11px] font-bold tracking-wide hover:bg-white/25 backdrop-blur-md transition-colors border border-white/10 shadow-inner">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => logout()}
          className="w-full flex justify-center items-center gap-2 rounded-2xl bg-gray-50 py-3.5 text-xs font-bold text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Logout Session
        </button>
      </div>

    </div>
  );
};

export default SideBar;