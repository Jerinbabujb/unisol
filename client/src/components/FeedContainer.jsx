import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { Navigate, useNavigate } from 'react-router-dom';
import assets from '../assets';
import { AuthContext } from '../../context/AuthContext';

const FeedContainer = ({ onOpenMenu }) => {
  const navigate = useNavigate();
  const { users, allUsers, setSelectedUser } = useContext(ChatContext);
  const { onlineUsers } = useContext(AuthContext);
  const [activeFilter, setActiveFilter] = useState('Nearby');

  useEffect(() => {
    allUsers();
  }, []);

  const gotoMessage = async (user) => {
    await setSelectedUser(user);
    navigate('/user-profile');
  }

  const filteredUsers = users.filter(user =>
    onlineUsers?.includes(user.id)
  );

  return (
    <div className="flex flex-col bg-[#FDFCFE] min-h-full selection:bg-purple-100 selection:text-[#5D3289]">

      {/* Header (Glassmorphism) */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 sticky top-0 bg-white/85 backdrop-blur-xl z-30 border-b border-[#F4F0F9]">
        <div className="flex items-center gap-4 flex-1">
          {/* Hamburger only visible on mobile */}
          <button
            onClick={onOpenMenu}
            className="lg:hidden p-2.5 bg-gray-50 hover:bg-purple-50 hover:text-[#5D3289] rounded-xl text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>

          {/* Refined Search Bar */}
          <div className="relative w-full max-w-md group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5D3289] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
            <input
              type="text"
              placeholder="Search matches..."
              className="w-full rounded-2xl bg-gray-50/80 border border-transparent py-3 pl-11 pr-4 text-sm font-medium text-gray-700 outline-none focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex gap-3 ml-4">
          <button className="hidden sm:flex items-center justify-center h-11 w-11 rounded-2xl bg-gray-50 border border-transparent text-gray-400 hover:bg-white hover:border-gray-200 hover:text-gray-600 transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </button>
          <button className="flex items-center justify-center h-11 w-11 rounded-2xl bg-gray-50 border border-transparent text-gray-400 hover:bg-purple-50 hover:border-purple-100 hover:text-[#5D3289] transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-4 md:px-8 py-6">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Top Picks</h2>
        <p className="text-sm font-medium text-gray-400 mt-1.5">Discover people who share your wavelength.</p>

        {/* Filter Pills */}
        <div className="mt-8 flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
          {['Nearby', 'Online Now', 'New'].map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 ${activeFilter === filter
                  ? 'bg-[#5D3289] text-white shadow-lg shadow-[#5D3289]/25 scale-105'
                  : 'bg-white border border-gray-100 text-gray-500 hover:bg-purple-50/50 hover:text-[#5D3289] hover:border-purple-100'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid: Nearby */}
      {activeFilter === "Nearby" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 pb-8">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => gotoMessage(user)}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white border border-[#F4F0F9] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(93,50,137,0.15)] hover:border-[#5D3289]/20 transition-all duration-500 hover:-translate-y-1.5 active:scale-[0.98]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                <img
                  src={user.avatar || assets.logo}
                  alt={user.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Purple-tinted gradient for a premium feel */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1A0B2E]/90 via-[#1A0B2E]/30 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-xl font-bold tracking-tight">{user.fullName}, {user.age}</h3>
                  {user.verified && (
                    <span className="flex items-center justify-center bg-blue-500 w-4 h-4 rounded-full text-[10px] shadow-sm">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                  )}
                  {user.online && (
                    <span className="relative flex h-2.5 w-2.5 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white/20"></span>
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-200 font-medium line-clamp-1 opacity-90">{user.bio}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Responsive Grid: Online Now */}
      {activeFilter === "Online Now" && (
        <div>
          {onlineUsers?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 pb-8">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => gotoMessage(user)}
                  className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white border border-[#F4F0F9] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(93,50,137,0.15)] hover:border-[#5D3289]/20 transition-all duration-500 hover:-translate-y-1.5 active:scale-[0.98]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                    <img
                      src={user.avatar || assets.logo}
                      alt={user.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1A0B2E]/90 via-[#1A0B2E]/30 to-transparent p-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-xl font-bold tracking-tight">{user.fullName}, {user.age}</h3>
                      {user.verified && (
                        <span className="flex items-center justify-center bg-blue-500 w-4 h-4 rounded-full text-[10px] shadow-sm">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                      )}
                      {user.online && (
                        <span className="relative flex h-2.5 w-2.5 ml-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white/20"></span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-200 font-medium line-clamp-1 opacity-90">{user.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col h-64 items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <p className="text-gray-400 font-medium tracking-wide">No users currently active</p>
            </div>
          )}
        </div>
      )}

      {/* Hide scrollbar class if not defined in your global CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default FeedContainer;