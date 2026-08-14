import React, { useContext, useEffect, useState, useMemo } from 'react';
import SideBar from '../components/SideBar';
import FeedContainer from '../components/FeedContainer';
import RightSideBar from '../components/RightSideBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const fontSize = useMemo(() => {
    switch (authUser?.preferredFont) {
      case 'small': return '14px';
      case 'large': return '18px';
      case 'extra-large': return '20px';
      case 'normal':
      default: return '16px';
    }
  }, [authUser?.preferredFont]);

  const accentColor = authUser?.preferredColor || '#5D3289';

  useEffect(() => {
    console.log("colour", authUser?.preferredColor);
    console.log("font", authUser?.preferredFont);
  }, [authUser]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div
      className="flex h-screen w-full font-sans text-gray-900 overflow-hidden relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 transition-colors duration-1000"
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

      {/* Sidebar - Added glassmorphism wrapper effect if possible */}
      <div className="hidden lg:block z-50 relative bg-white/60 backdrop-blur-2xl border-r border-white/40 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
        <SideBar />
      </div>

      {/* Main Feed */}
      <main className="flex-1 overflow-y-auto relative custom-scrollbar flex flex-col lg:pl-[120px] z-10 bg-transparent">
        <FeedContainer onOpenMenu={() => setIsMobileMenuOpen(true)} />
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:flex w-[340px] flex-shrink-0 bg-white/70 backdrop-blur-2xl shadow-[-12px_0_40px_-12px_rgba(93,50,137,0.08)] z-20 relative border-l border-white/50">
        <RightSideBar />
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-[#1A0B2E]/40 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[280px] bg-white/90 backdrop-blur-3xl shadow-2xl animate-in slide-in-from-left duration-300 border-r border-white/50">
            <SideBar isMobile={true} onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav - Upgraded to Glassmorphism */}
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

        {/* Settings Button (Multiple Paths) */}
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

      {/* Styles for scrollbar and animations */}
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

export default HomePage;