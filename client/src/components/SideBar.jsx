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

  // ✅ COLOR fallback
  const primaryColor = authUser?.preferredColor || "#5D3289";

  // ✅ FONT SIZE mapping
  const fontSizeMap = {
    small: "14px",
    medium: "18px",
    large: "22px",
    huge: "26px"
  };

  const primarySize = fontSizeMap[authUser?.preferredFont] || "22px";

  const menuItems = [
    { name: 'Discovery', icon: '🧭', path: '/', badge: null },
    { name: 'Messages', icon: '💬', path: '/messages', badge: totalUnseen > 0 ? totalUnseen : null },
    { name: 'Chat-Rooms', icon: '🗣️', path: '/global-room-lists', badge: null },
    { name: 'Requests', icon: '💜', path: '/friend-request', badge: requestData?.friendRequest?.length },
    { name: 'Profile', icon: '👤', path: '/profile', badge: null },
    { name: 'Settings', icon: '⚙️', path: '/settings', badge: null },
  ];

  return (
    <div className="group fixed left-4 top-4 bottom-4 z-50 flex flex-col bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] rounded-[32px] overflow-hidden transition-all duration-500 w-[88px] hover:w-[280px]">

      {/* LOGO */}
      <div className="pt-8 pb-6 flex items-center px-6 whitespace-nowrap">
        <img
          src={assets.logo}
          alt="Unisoul Logo"
          className="w-10 h-10 min-w-[40px] rounded-xl p-1.5 object-contain shadow-md transition-transform duration-300 group-hover:rotate-12"
          style={{
            background: primaryColor
          }}
        />

        <h1
          className="font-black tracking-tight ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
          style={{
            fontSize: primarySize,
            color: primaryColor,
            letterSpacing: "0.08em"
          }}
        >
          UNISOUL
        </h1>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2 px-4 mt-4 flex-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className="flex items-center rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: isActive ? primaryColor : "transparent",
                color: isActive ? "white" : "#6B7280"
              }}
            >
              <div className="flex items-center justify-center w-[56px] h-[56px] min-w-[56px] relative z-10">
                <span
                  style={{
                    fontSize: primarySize,
                    transform: isActive ? "scale(1.1)" : "scale(1)"
                  }}
                >
                  {item.icon}
                </span>

                {item.badge > 0 && (
                  <span
                    className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full border-2 border-white"
                    style={{
                      backgroundColor: isActive ? "white" : "#ef4444"
                    }}
                  />
                )}
              </div>

              <span
                className="font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex-1"
                style={{
                  fontSize: "14px",
                  color: isActive ? "white" : "#4B5563"
                }}
              >
                {item.name}
              </span>

              {item.badge > 0 && (
                <span
                  className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] font-bold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.2)" : primaryColor,
                    color: "white"
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* USER SECTION */}
      <div className="mt-auto px-4 pb-6">
        {authUser && (
          <div
            onClick={() => logout()}
            className="flex items-center rounded-2xl p-2 cursor-pointer hover:bg-red-50 transition-all"
          >
            <img
              src={authUser?.avatar || assets.logo}
              className="h-10 w-10 min-w-[40px] rounded-full object-cover border-2 border-white shadow-sm"
              alt="User"
            />

            <div className="flex flex-col ml-3 opacity-0 group-hover:opacity-100 transition-all">
              <p
                style={{
                  fontSize: "13px",
                  color: "#111827"
                }}
              >
                {authUser?.fullName || "User"}
              </p>

              <p
                style={{
                  fontSize: "10px",
                  color: "#9CA3AF"
                }}
              >
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