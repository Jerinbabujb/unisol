import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ChatContext } from '../../../context/ChatContext';
import assets from '../../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import SideBar from '../SideBar';

const FriendRequests = () => {
  const { sendRequest, freindRequestCheck, requestData, setSelectedUser, setStatus } =
    useContext(ChatContext);

  const { logout, authUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Interactive mouse position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ✅ direct hex color from DB
  const accentColor = authUser?.preferredColor || '#5D3289';

  // ✅ font scaling system
  const fontSize = useMemo(() => {
    switch (authUser?.preferredFont) {
      case 'small':
        return '14px';
      case 'large':
        return '18px';
      case 'extra-large':
        return '20px';
      default:
        return '16px';
    }
  }, [authUser?.preferredFont]);

  useEffect(() => {
    freindRequestCheck();
  }, []);

  const handleBack = () => navigate('/');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const gotoProfile = async (id) => {
    await setSelectedUser(id);
    navigate(`/user-profile`);
  };

  const handleSendRequest = async (newStatus, id) => {
    sendRequest(newStatus, id);
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <div
      className="flex h-screen font-sans text-gray-900 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 transition-colors duration-1000"
      style={{
        fontSize,
        '--accent-color': accentColor
      }}
    >
      {/* Colorful Animated & Interactive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Interactive Mouse Orb */}
        <div 
          className="absolute rounded-full transition-all duration-300 ease-out mix-blend-multiply"
          style={{
            width: '35vw',
            height: '35vw',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: accentColor,
            opacity: 0.08,
            filter: 'blur(100px)'
          }}
        />
        
        {/* Floating Ambient Orbs */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full floating-orb-slow mix-blend-multiply"
          style={{ backgroundColor: accentColor, opacity: 0.06, filter: 'blur(120px)' }}
        ></div>
        <div 
          className="absolute bottom-[5%] -right-[5%] w-[45%] h-[45%] bg-blue-300 rounded-full opacity-[0.07] blur-[120px] floating-orb-fast mix-blend-multiply"
        ></div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:block z-50 relative bg-white/60 backdrop-blur-2xl border-r border-white/40 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center py-12 px-4 pb-32 lg:pb-12 lg:pl-[120px] z-10 relative overflow-y-auto custom-scrollbar">

        {/* Header */}
        <div className="w-full max-w-3xl relative mb-10 flex items-center justify-center">
          <button
            onClick={handleBack}
            className="absolute left-0 p-3 rounded-full bg-white/60 backdrop-blur-md border border-white/60 text-gray-400 hover:bg-white hover:shadow-md transition-all z-20"
            style={{ color: accentColor }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </button>

          <div className="text-center z-10">
            <h1 className="text-3xl font-black drop-shadow-sm">Connection Requests</h1>
            <p className="text-gray-500 text-sm mt-1 drop-shadow-sm">
              People who want to match with you
            </p>
          </div>
        </div>

        {/* List */}
        <div className="w-full max-w-3xl flex flex-col gap-5">
          {requestData.user?.length > 0 ? (
            requestData.user.map((request, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-center justify-between p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
              >

                {/* User Info */}
                <div
                  onClick={() => gotoProfile(request)}
                  className="flex items-center gap-5 flex-1 cursor-pointer w-full sm:w-auto"
                >
                  <div className="relative">
                    <img
                      src={request.avatar || assets.logo}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                      alt={request.fullName}
                    />
                    {/* Optional online indicator mock */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-400 border-2 border-white shadow-sm"></div>
                  </div>

                  <div className="flex-1">
                    <div
                      className="font-bold text-lg tracking-tight"
                      style={{ color: 'inherit' }}
                    >
                      {request.fullName}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {request.message || 'Sent you a connection request'}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-5 sm:mt-0 w-full sm:w-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setStatus('rejected');
                      handleSendRequest('rejected', request.id);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border-2 font-bold bg-white/50 hover:bg-white transition-colors backdrop-blur-sm"
                    style={{
                      borderColor: accentColor,
                      color: accentColor
                    }}
                  >
                    Decline
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setStatus('accepted');
                      handleSendRequest('accepted', request.id);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-white font-bold shadow-[0_4px_15px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all"
                    style={{ backgroundColor: accentColor }}
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/60 shadow-sm mb-4">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 drop-shadow-sm">No pending requests</h3>
              <p className="text-sm text-gray-500 mt-2">When someone wants to connect, you'll see them here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Nav - Glassmorphism */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/60 px-2 py-4 flex justify-between items-center z-40 shadow-[0_-8px_30px_-8px_rgba(0,0,0,0.1)] safe-area-pb">
        {[
          { path: '/', icon: "M12 2L2 22l10-3 10 3L12 2z", stroke: false },
          { path: '/friend-request', icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", stroke: true },
          { path: '/global-room-lists', icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", stroke: true },
          { path: '/messages', icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z", stroke: false },
          { path: '/profile', icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z", stroke: false }
        ].map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center flex-1 transition-all duration-300 ${
              location.pathname === item.path ? 'scale-110 drop-shadow-md' : 'text-gray-400 hover:text-gray-600 hover:scale-105'
            }`}
            style={{ color: location.pathname === item.path ? accentColor : undefined }}
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7" 
              fill={item.stroke ? "none" : "currentColor"} 
              stroke={item.stroke ? "currentColor" : "none"} 
              strokeWidth={item.stroke ? "2" : undefined}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
          </button>
        ))}

        {/* Settings Button */}
        <button
          onClick={() => navigate('/settings')}
          className={`flex flex-col items-center flex-1 transition-all duration-300 ${
            location.pathname === '/settings' ? 'scale-110 drop-shadow-md' : 'text-gray-400 hover:text-gray-600 hover:scale-105'
          }`}
          style={{ color: location.pathname === '/settings' ? accentColor : undefined }}
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center flex-1 transition-all duration-300 text-gray-400 hover:text-red-500 hover:scale-105"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </nav>

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-scrollbar::-webkit-scrollbar { width: 0px; } 
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(0.95); }
          }
          .floating-orb-slow { animation: float-slow 15s ease-in-out infinite; }
          .floating-orb-fast { animation: float-fast 10s ease-in-out infinite; }
        `
      }} />
    </div>
  );
};

export default FriendRequests;