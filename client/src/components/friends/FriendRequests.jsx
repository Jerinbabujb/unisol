import React, { useContext, useEffect } from 'react';
import { ChatContext } from '../../../context/ChatContext';
import assets from '../../assets';
import { useNavigate } from 'react-router-dom';

const FriendRequests = () => {
  const { sendRequest, requestCheck, freindRequestCheck, requestData } = useContext(ChatContext);
  const { status, setStatus } = useContext(ChatContext);
  const navigate= useNavigate();
 const handleBack=()=>{
    navigate("/");
  }
  useEffect(() => {
    freindRequestCheck();
    console.log("running");
  }, []);
  const handleSendRequest = async (newStatus,id) => {
     sendRequest(newStatus,id); // pass id if needed
      window.location.reload();
    };

  // useEffect(() => {
  //   setStatus("pending"); // reset immediately

  //   const check = async () => {
  //     const result = await freindRequestCheck();
  //     if (!result) {
  //       setStatus("pending");
  //     } else {
  //       setStatus(result.status);
  //     }
  //   };

  //   check();
  // }, [requestData?.friendRequest?.length]);

  

  return (
<div className="flex flex-col gap-4 w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-3 sm:p-6">
    <div className="w-full max-w-5xl relative mb-10 flex items-center justify-center">

  {/* Back Button */}
  <button
    onClick={handleBack}
    className="absolute left-0 p-2 text-gray-500 hover:text-gray-700 transition"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
</div>
  {requestData.user && requestData.user.length > 0 ? (
    requestData.user.map((request, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4"
      >
        {/* User Info Section */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <img
            src={request.avatar || assets.logo}
            alt={request.fullName}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100 dark:border-gray-700"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="font-bold text-gray-800 dark:text-gray-100 truncate text-base sm:text-lg">
              {request.fullName}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
              {request.message || 'Sent you a friend request'}
            </span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={() => {
              setStatus('accepted');
              handleSendRequest('accepted',request.id);
            }}
            className="flex-1 sm:flex-none bg-green-500 hover:bg-green-600 text-white py-2.5 px-6 rounded-xl font-bold transition-all active:scale-95 text-sm"
          >
            Accept
          </button>

          <button
            onClick={() => {
              setStatus('rejected');
              handleSendRequest('rejected',request.id);
            }}
            className="flex-1 sm:flex-none bg-white dark:bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 py-2.5 px-6 rounded-xl font-bold transition-all active:scale-95 text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    ))
  ) : (
    <div className="flex flex-col items-center justify-center py-20">
       <p className="text-gray-500 dark:text-gray-400 text-center">No friend requests at the moment.</p>
    </div>
  )}
</div>
  );
};

export default FriendRequests;