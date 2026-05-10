import React, { useContext, useEffect } from 'react';
import { ChatContext } from '../../../context/ChatContext';
import assets from '../../assets';
import { useNavigate } from 'react-router-dom';

const FriendRequests = () => {
  const { sendRequest, requestCheck, freindRequestCheck, requestData, setSelectedUser } = useContext(ChatContext);
  const { status, setStatus } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  const gotoProfile = async (id) => {
    await setSelectedUser(id);
    navigate(`/user-profile`);
  }

  useEffect(() => {
    freindRequestCheck();
  }, []);

  const handleSendRequest = async (newStatus, id) => {
    sendRequest(newStatus, id);
    // You might eventually want to update state locally instead of reloading, 
    // but keeping your existing logic here!
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE] flex flex-col items-center py-12 px-4 font-sans selection:bg-purple-100 selection:text-[#5D3289]">

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.04] blur-[120px] bg-[#5D3289]"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.03] blur-[100px]"></div>
      </div>

      {/* Header Container */}
      <div className="w-full max-w-3xl relative mb-10 flex items-center justify-center z-10">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-0 p-3 rounded-full bg-white border border-[#F4F0F9] text-gray-400 hover:text-[#5D3289] hover:bg-[#F8F5FB] transition-all shadow-sm active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Connection Requests
          </h1>
          <p className="text-gray-400 text-sm font-medium mt-1">
            People who want to match with you
          </p>
        </div>
      </div>

      {/* Request List Container */}
      <div className="w-full max-w-3xl flex flex-col gap-4 z-10">
        {requestData.user && requestData.user.length > 0 ? (
          requestData.user.map((request, index) => (
            <div onClick={() => gotoProfile(request)}
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 bg-white rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(93,50,137,0.12)] border border-[#F4F0F9] transition-all duration-300 gap-5 group"
            >
              {/* User Info Section */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative">
                  <img
                    src={request.avatar || assets.logo}
                    alt={request.fullName}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#5D3289] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-gray-900 truncate text-lg group-hover:text-[#5D3289] transition-colors">
                    {request.fullName}
                  </span>
                  <span className="text-sm text-gray-400 font-medium truncate">
                    {request.message || 'Sent you a connection request'}
                  </span>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="flex flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setStatus('accepted');
                    handleSendRequest('accepted', request.id);
                  }}
                  className="flex-1 sm:flex-none bg-[#10B981] hover:bg-[#059669] text-white py-2.5 px-6 rounded-xl font-bold shadow-[0_8px_20px_-8px_rgba(16,185,129,0.4)] transition-all active:scale-95 text-sm flex items-center justify-center gap-2"
                >
                  Accept
                </button>

                <button
                  onClick={() => {
                    setStatus('rejected');
                    handleSendRequest('rejected', request.id);
                  }}
                  className="flex-1 sm:flex-none bg-white border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 py-2.5 px-6 rounded-xl font-bold transition-all active:scale-95 text-sm flex items-center justify-center gap-2"
                >
                  Decline
                </button>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-[40px] border border-[#F4F0F9] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.04)]">
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">You're all caught up!</h3>
            <p className="text-gray-400 font-medium">No pending connection requests right now.<br />Keep swiping in Discovery to find new matches.</p>
            <button
              onClick={() => navigate('/')}
              className="mt-8 px-8 py-3 bg-gray-50 hover:bg-purple-50 text-gray-600 hover:text-[#5D3289] rounded-2xl font-bold transition-colors border border-gray-100 hover:border-purple-100"
            >
              Go to Discovery
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendRequests;