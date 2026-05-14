import React, { useContext, useEffect } from 'react';
import assets from '../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const SideBar = () => {
  const { unseenMessages, requestData, freindRequestCheck } = useContext(ChatContext);
  const { authUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const totalUnseen = Object.values(unseenMessages || {}).reduce((a, b) => a + b, 0);

  useEffect(() => {
    freindRequestCheck();
  }, []);

  const menuItems = [
    { name: 'Discovery', icon: '🧭', path: '/', badge: null },
    { name: 'Messages', icon: '💬', path: '/messages', badge: totalUnseen > 0 ? totalUnseen : null },
    { name: 'Chat-Rooms', icon: '🗣️', path: '/global-room-lists', badge: null },
    { name: 'Requests', icon: '💜', path: '/friend-request', badge: requestData?.friendRequest?.length },
    // { name: 'Games', icon: '🎮', path: '#', badge: null },
    { name: 'Profile', icon: '👤', path: '/profile', badge: null },
    { name: 'Settings', icon: '⚙️', path: '/settings', badge: null },
  ];

  return (
    <div className="group fixed left-4 top-4 bottom-4 z-50 flex flex-col bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_-8px_rgba(93,50,137,0.15)] rounded-[32px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] w-[88px] hover:w-[280px]">

      {/* Logo Area */}
      <div className="pt-8 pb-6 flex items-center px-6 whitespace-nowrap">
        <img src={assets.logo} alt='Unisoul Logo' className="w-10 h-10 min-w-[40px] rounded-xl bg-gradient-to-tr from-[#5D3289] to-[#9b6bcc] p-1.5 object-contain shadow-md transition-transform duration-300 group-hover:rotate-12" />
        <h1 className="text-2xl font-black text-[#5D3289] tracking-tight ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
          UNISOUL
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2 px-4 mt-4 flex-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden ${isActive
                ? 'bg-[#5D3289] text-white shadow-md'
                : 'hover:bg-purple-50 text-gray-500 hover:text-[#5D3289]'
                }`}
            >
              <div className="flex items-center justify-center w-[56px] h-[56px] min-w-[56px] relative z-10">
                <span className={`text-2xl transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </span>
                {/* Minimal dot badge for collapsed state */}
                {item.badge > 0 && (
                  <span className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full border-2 border-white transition-opacity duration-300 ${isActive ? 'bg-white' : 'bg-red-500'} group-hover:opacity-0`}></span>
                )}
              </div>

              <span className={`text-sm whitespace-nowrap font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 relative z-10 flex-1`}>
                {item.name}
              </span>

              {/* Full badge for expanded state */}
              {item.badge > 0 && (
                <span className={`mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 text-[10px] font-bold px-2 py-1 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#5D3289] text-white'}`}>
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mt-auto px-4 pb-6 flex flex-col gap-4 whitespace-nowrap">

        {/* Boost Profile (Hidden when collapsed, fades in) */}
        <div className="opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <div className="rounded-[20px] bg-gradient-to-br from-[#1A0B2E] to-[#5D3289] p-4 text-white shadow-lg relative cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all mx-2 mb-2">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">⚡</span>
              <h4 className="text-xs font-bold">Boost Profile</h4>
            </div>
            <p className="text-[10px] text-purple-200">10x more visibility</p>
          </div>
        </div>

        {/* User Profile Snippet (Click to logout or go to profile) */}
        {authUser && (
          <div
            onClick={() => logout()}
            className="flex items-center rounded-2xl p-2 cursor-pointer transition-all duration-300 hover:bg-red-50 group/user border border-transparent hover:border-red-100"
            title="Click to logout"
          >
            <img
              src={authUser?.avatar || assets.logo}
              className="h-10 w-10 min-w-[40px] rounded-full object-cover border-2 border-white shadow-sm"
              alt="User"
            />
            <div className="flex flex-col ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex-1">
              <p className="text-sm font-bold text-gray-900 truncate group-hover/user:text-red-600 transition-colors">
                {authUser?.fullName || "Elena Gomez"}
              </p>
              <p className="text-[10px] font-bold text-gray-400 group-hover/user:text-red-400 flex items-center gap-1 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Logout
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default SideBar;