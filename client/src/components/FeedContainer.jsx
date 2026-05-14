import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import assets from '../assets';
import { AuthContext } from '../../context/AuthContext';

const FeedContainer = ({ onOpenMenu }) => {
  const navigate = useNavigate();
  const { users, allUsers, setSelectedUser, sendRequest } = useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext); // Added authUser here
  const [activeFilter, setActiveFilter] = useState('Discovery');

  useEffect(() => {
    allUsers();
  }, []);
  const handleSendRequest = async (id) => {
    sendRequest('pending', id);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const gotoMessage = async (user) => {
    await setSelectedUser(user);
    navigate('/user-profile');
  }

  const filteredUsers = users.filter(user => onlineUsers?.includes(user.id));
  const displayUsers = activeFilter === 'Online Now' ? filteredUsers : users;

  // Helper function to find shared interests
  const getSharedInterests = (targetUserInterests) => {
    if (!authUser?.interest || !targetUserInterests) return [];
    return targetUserInterests.filter(interest => authUser.interest.includes(interest));
  };

  return (
    <div className="flex flex-col bg-[#FDFCFE] min-h-full selection:bg-purple-100 selection:text-[#5D3289] items-center">

      {/* Header (Same as before) */}
      <header className="flex items-center justify-between w-full max-w-3xl px-4 md:px-0 py-5 sticky top-0 bg-[#FDFCFE]/90 backdrop-blur-xl z-30 border-b border-[#F4F0F9]">
        <div className="flex items-center gap-4">
          <button onClick={onOpenMenu} className="lg:hidden p-2.5 bg-gray-50 rounded-xl text-gray-600 hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">{activeFilter}</h2>
            <p className="text-xs font-medium text-gray-400 mt-0.5">Find your perfect match</p>
          </div>
        </div>

        <div className="flex bg-gray-100/80 p-1 rounded-full">
          {['Discovery', 'Online Now'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-white text-[#5D3289] shadow-sm' : 'text-gray-500 hover:text-gray-800 cursor-pointer'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {/* Main Dating Feed */}
      <div className="w-full max-w-3xl px-4 md:px-0 py-8 pb-24">
        {displayUsers?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {displayUsers.map((user) => {
              const sharedInterests = getSharedInterests(user.interest);

              return (
                <div
                  key={user.id}
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-[#F4F0F9] shadow-[0_8px_24px_-12px_rgba(93,50,137,0.1)] hover:shadow-[0_20px_40px_-12px_rgba(93,50,137,0.2)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div onClick={() => gotoMessage(user)} className="relative aspect-[3/4] overflow-hidden bg-gray-50 cursor-pointer">
                    <img
                      src={user.avatar || assets.logo}
                      alt={user.fullName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/95 via-[#1A0B2E]/20 to-transparent"></div>

                    {/* 🔥 NEW: Match Percentage Badge (Top Left) */}
                    {user.match_percentage && (
                      <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-black tracking-wide shadow-lg flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        {user.match_percentage}% Match
                      </div>
                    )}

                    {/* Profile Info inside Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-3xl font-bold tracking-tight">{user.fullName}, {user.age || '24'}</h3>
                        {user.online && <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-white/20 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>}
                      </div>

                      {/* 🔥 NEW: Shared Interests Highlight */}
                      {sharedInterests.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-purple-200 mb-3 bg-[#5D3289]/80 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-[#5D3289]">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                          You both like {sharedInterests[0]} {sharedInterests.length > 1 && `& ${sharedInterests.length - 1} more`}
                        </div>
                      )}

                      {/* Vibe Tags */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(user.interest || []).slice(0, 3).map((tag, i) => {
                          const isShared = sharedInterests.includes(tag);
                          return (
                            <span key={i} className={`px-3 py-1 rounded-full backdrop-blur-md border text-xs font-semibold ${isShared ? 'bg-[#5D3289] border-[#5D3289] text-white' : 'bg-white/20 border-white/10 text-white'
                              }`}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Dating Action Buttons (Unchanged) */}
                  <div className="bg-white px-6 py-5 flex justify-center items-center gap-6">
                    <button className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all hover:scale-110 shadow-sm cursor-pointer">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <button onClick={() => handleSendRequest(user.id)} className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#4B2471] to-[#7B52AB] text-white transition-all hover:scale-110 shadow-[0_8px_20px_-8px_rgba(93,50,137,0.6)] cursor-pointer">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    </button>
                    <button className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 border border-gray-100 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 hover:border-yellow-100 transition-all hover:scale-110 shadow-sm cursor-pointer">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <h3 className="text-xl font-bold text-gray-800">Looking for matches...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedContainer;