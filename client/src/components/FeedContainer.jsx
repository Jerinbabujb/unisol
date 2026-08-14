import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import assets from '../assets';
import { AuthContext } from '../../context/AuthContext';

const FeedContainer = ({ onOpenMenu }) => {
  const navigate = useNavigate();
  const { users, allUsers, setSelectedUser, sendRequest } = useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);
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

  const accentColor = authUser?.preferredColor || '#5D3289';

  return (
    // Changed bg to transparent so the HomePage's animated background shines through
    <div className="flex flex-col bg-transparent min-h-full selection:bg-white/30 items-center">

      {/* Header - Upgraded to Glassmorphism */}
      <header className="flex items-center justify-between w-full max-w-3xl px-4 md:px-0 py-5 sticky top-0 bg-white/40 backdrop-blur-2xl z-30 border-b border-white/50 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
          <button onClick={onOpenMenu} className="lg:hidden p-2.5 bg-white/60 backdrop-blur-md rounded-xl text-gray-700 hidden border border-white/40 hover:bg-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight drop-shadow-sm">{activeFilter}</h2>
            <p className="text-xs font-medium text-gray-500 mt-0.5 drop-shadow-sm">Find your perfect match</p>
          </div>
        </div>

        <div className="flex bg-white/50 backdrop-blur-md border border-white/60 p-1 rounded-full shadow-sm">
          {['Discovery', 'Online Now'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                backgroundColor: activeFilter === filter ? accentColor : 'transparent',
                color: activeFilter === filter ? '#fff' : '#4B5563'
              }}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${
                activeFilter === filter ? 'shadow-md scale-105' : 'hover:bg-white/50'
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
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div onClick={() => gotoMessage(user)} className="relative aspect-[3/4] overflow-hidden bg-gray-100/50 cursor-pointer">
                    <img
                      src={user.avatar || assets.logo}
                      alt={user.fullName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E]/95 via-[#1A0B2E]/20 to-transparent"></div>

                    {/* Match Percentage Badge */}
                    {user.match_percentage && (
                      <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-black tracking-wide shadow-lg flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        {user.match_percentage}% Match
                      </div>
                    )}

                    {/* Profile Info inside Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-3xl font-bold tracking-tight">{user.fullName}, {user.Age || '24'}</h3>
                        {user.online && <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-white/20 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>}
                      </div>

                      {/* Shared Interests Highlight */}
                      {sharedInterests.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-3 bg-white/20 border border-white/30 w-fit px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                          You both like {sharedInterests[0]} {sharedInterests.length > 1 && `& ${sharedInterests.length - 1} more`}
                        </div>
                      )}

                      {/* Vibe Tags */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {(user.interest || []).slice(0, 3).map((tag, i) => {
                          const isShared = sharedInterests.includes(tag);
                          return (
                            <span 
                              key={i} 
                              style={isShared ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
                              className={`px-3 py-1 rounded-full backdrop-blur-md border text-xs font-semibold ${
                                isShared ? 'text-white' : 'bg-white/20 border-white/20 text-white hover:bg-white/30'
                              } transition-colors`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Dating Action Buttons - Glassmorphism update */}
                  <div className="bg-white/40 backdrop-blur-md px-6 py-5 flex justify-center items-center gap-6 border-t border-white/50">
                    <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white/80 border border-white text-gray-500 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all hover:scale-110 shadow-[0_4px_10px_rgba(0,0,0,0.05)] cursor-pointer backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    
                    <button 
                      onClick={() => handleSendRequest(user.id)} 
                      style={{ 
                        backgroundColor: accentColor,
                        boxShadow: `0 8px 25px -5px ${accentColor}80` 
                      }}
                      className="flex items-center justify-center w-16 h-16 rounded-full text-white transition-all hover:scale-110 hover:-translate-y-1 cursor-pointer relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    </button>
                    
                    <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white/80 border border-white text-gray-500 hover:text-yellow-500 hover:bg-yellow-50 hover:border-yellow-100 transition-all hover:scale-110 shadow-[0_4px_10px_rgba(0,0,0,0.05)] cursor-pointer backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-[#5D3289] rounded-full animate-spin mb-4" style={{ borderTopColor: accentColor }}></div>
            <h3 className="text-xl font-bold text-gray-800 drop-shadow-sm">Looking for matches...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedContainer;