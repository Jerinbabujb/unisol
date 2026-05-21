import React, { useContext, useEffect, useMemo } from 'react';
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
      className="flex min-h-screen bg-[#FDFCFE] font-sans selection:bg-purple-100 relative overflow-x-hidden"
      style={{
        fontSize,
        '--accent-color': accentColor
      }}
    >
      {/* Sidebar */}
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center py-12 px-4 pb-32 lg:pb-12 lg:pl-[120px]">

        {/* Header */}
        <div className="w-full max-w-3xl relative mb-10 flex items-center justify-center">

          <button
            onClick={handleBack}
            className="absolute left-0 p-3 rounded-full bg-white border border-[#F4F0F9] text-gray-400 hover:bg-[#F8F5FB] transition-all"
            style={{ color: accentColor }}
          >
            ←
          </button>

          <div className="text-center">
            <h1 className="text-3xl font-black">Connection Requests</h1>
            <p className="text-gray-400 text-sm mt-1">
              People who want to match with you
            </p>
          </div>
        </div>

        {/* List */}
        <div className="w-full max-w-3xl flex flex-col gap-4">

          {requestData.user?.length > 0 ? (
            requestData.user.map((request, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white rounded-3xl border border-[#F4F0F9]"
              >

                {/* User */}
                <div
                  onClick={() => gotoProfile(request)}
                  className="flex items-center gap-4 flex-1 cursor-pointer"
                >
                  <img
                    src={request.avatar || assets.logo}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <div
                      className="font-bold text-lg"
                      style={{ color: 'inherit' }}
                    >
                      {request.fullName}
                    </div>

                    <div className="text-sm text-gray-400">
                      {request.message || 'Sent you a connection request'}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4 sm:mt-0">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setStatus('accepted');
                      handleSendRequest('accepted', request.id);
                    }}
                    className="px-6 py-2 rounded-xl text-white font-bold"
                    style={{ backgroundColor: accentColor }}
                  >
                    Accept
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setStatus('rejected');
                      handleSendRequest('rejected', request.id);
                    }}
                    className="px-6 py-2 rounded-xl border font-bold"
                    style={{
                      borderColor: accentColor,
                      color: accentColor
                    }}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24 text-gray-400">
              No pending requests
            </div>
          )}
        </div>
      </div>

      {/* Mobile nav (only accent fix example shown) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-4 flex justify-between">

        <button
          onClick={() => navigate('/')}
          style={{
            color: location.pathname === '/' ? accentColor : '#9CA3AF'
          }}
        >
          Home
        </button>

        <button
          onClick={() => navigate('/friend-request')}
          style={{
            color:
              location.pathname === '/friend-request'
                ? accentColor
                : '#9CA3AF'
          }}
        >
          Requests
        </button>

        <button onClick={handleLogout} className="text-gray-400">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default FriendRequests;