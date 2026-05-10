import React, { useContext, useEffect } from 'react';
import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';

const RightSideBar = () => {
  const { users, allUsers, setSelectedUser, freindRequestCheck, requestData } = useContext(ChatContext);
  const navigate = useNavigate();

  useEffect(() => {
    allUsers();
    freindRequestCheck();
  }, []); // Consolidated your two useEffects since they both run on mount

  const gotoProfile = async (user) => {
    await setSelectedUser(user);
    navigate('/user-profile');
  };

  // Safely get the number of likes
  const likesCount = requestData?.user?.length || 0;

  return (
    <div className="flex h-full w-full flex-col gap-8 bg-white px-6 py-8 text-gray-900 overflow-y-auto border-l border-[#F4F0F9]">

      {/* Teaser: Likes You */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold tracking-tight">Likes You</h3>
          {/* Dynamic Badge */}
          <span className={`${likesCount > 0 ? 'bg-[#5D3289]' : 'bg-gray-300'} text-white text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors`}>
            {likesCount} New
          </span>
        </div>

        {/* Conditional Rendering: Check if there are no likes */}
        {likesCount === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center bg-gradient-to-b from-purple-50/50 to-white rounded-2xl border border-[#F4F0F9]">
            <span className="text-2xl mb-2 opacity-80">✨</span>
            <p className="text-sm font-bold text-gray-700">The universe is taking its time</p>
            <p className="text-xs text-gray-400 mt-1">Your next great connection is just around the corner. Keep exploring!</p>
          </div>
        ) : (
          /* Horizontal scroll for blurred profiles */
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {requestData?.user?.map((item, index) => (
              <div key={item.id || index} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div onClick={() => gotoProfile(item)} className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#5D3289]/20 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img src={item.avatar ? item.avatar : assets.logo} alt="Blurred user" className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-500" />
                    <div className="absolute inset-0 bg-[#5D3289]/10"></div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    <span className="flex w-4 h-4 bg-[#5D3289] rounded-full items-center justify-center text-[8px] text-white">💜</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-[#5D3289]">See who</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* New Matches */}
      <section className="flex-1">
        <h3 className="mb-4 text-lg font-bold tracking-tight">New Matches</h3>
        <div className="space-y-4">
          {users?.slice(0, 3)?.map((user) => (
            <div key={user.id} className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#F4F0F9] hover:border-[#5D3289]/30 hover:shadow-md cursor-pointer transition-all group">
              <div className="relative">
                <img onClick={() => gotoProfile(user)} src={user.avatar ? user.avatar : assets.logo} className="h-12 w-12 rounded-full object-cover" alt={user.fullName} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#5D3289] transition-colors">{user.fullName}</h4>
                <p className="text-xs text-gray-400 truncate">{user.match_percentage}% Match</p>
              </div>
              <button onClick={() => gotoProfile(user)} className="w-8 h-8 rounded-full bg-purple-50 text-[#5D3289] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <div className="rounded-[24px] bg-gradient-to-br from-[#1A0B2E] to-[#4B2471] p-6 text-center relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#5D3289] rounded-full opacity-30 blur-2xl"></div>
        <h4 className="text-white font-bold text-sm mb-2">Unisoul Premium</h4>
        <p className="text-purple-200 text-xs mb-4">See everyone who liked you and get 5 extra Super Likes.</p>
        <button className="w-full py-2.5 bg-white text-[#5D3289] font-bold text-xs rounded-full hover:bg-gray-50 transition-colors">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;