import React, { useState, useContext, useEffect } from 'react';
import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SideBar from '../components/SideBar'; // 1. Import SideBar
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SelectedUserProfilePage = () => {
  const {
    selectedUser, sendRequest, requestCheck, checkReciver, checkSend,
    instagramPreference, facebookPreference, status, setStatus
  } = useContext(ChatContext);

  const { authUser, logout } = useContext(AuthContext);
  const [index, setIndex] = useState(-1);

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate("/");
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSendRequest = (newStatus) => {
    sendRequest(newStatus, selectedUser?.id);
  };

  useEffect(() => {
    if (!selectedUser?.id) return;

    const check = async () => {
      const result = await requestCheck();
      if (!result) {
        setStatus("pending");
      } else {
        setStatus(result.status);
      }
    };
    check();
  }, [selectedUser?.id]);

  return (
    selectedUser && (
      // 2. Added flex and min-h-screen to the wrapper
      <div className="flex min-h-screen bg-[#FDFCFE] font-sans selection:bg-purple-100 selection:text-[#5D3289] relative overflow-x-hidden">

        {/* 3. Desktop Sidebar */}
        <div className="hidden lg:block z-50">
          <SideBar />
        </div>

        {/* 4. Main Content Area - Added lg:pl-[120px] to offset for SideBar */}
        <div className="flex-1 flex flex-col items-center py-12 px-4 pb-32 lg:pb-12 lg:pl-[120px] transition-all duration-300">

          {/* Background Ambient Glow */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.04] blur-[120px] bg-[#5D3289]"></div>
            <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.03] blur-[100px]"></div>
          </div>

          {/* Header Container */}
          <div className="w-full max-w-5xl relative mb-12 flex items-center justify-center z-10">
            <button
              onClick={handleBack}
              className="absolute left-0 p-3 rounded-full bg-white border border-[#F4F0F9] text-gray-400 hover:text-[#5D3289] hover:bg-[#F8F5FB] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center">
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                {selectedUser.fullName}
              </h1>
              <p className="text-gray-400 text-sm font-medium mt-1">Viewing Profile</p>
            </div>
          </div>

          <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 z-10">

            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9] flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4B2471] via-[#5D3289] to-[#7B52AB]"></div>

                <div className="relative mb-6 mt-4">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#5D3289] to-[#9b6bcc] p-[3px] shadow-lg shadow-[#5D3289]/20">
                    <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white">
                      <img
                        src={selectedUser.avatar || assets.logo}
                        className="w-full h-full object-cover"
                        alt={selectedUser.fullName}
                      />
                    </div>
                  </div>
                  {selectedUser.online && (
                    <span className="absolute bottom-4 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></span>
                  )}
                </div>

                {/* Action Buttons Logic */}
                {status === "accepted" ? (
                  <button
                    type="button"
                    onClick={() => navigate('/messages')}
                    className="w-full mt-2 px-8 py-3.5 rounded-2xl bg-[#5D3289] text-white font-bold hover:bg-[#4B2471] transition-all shadow-[0_8px_20px_-8px_rgba(93,50,137,0.5)] active:scale-[0.98] flex justify-center items-center gap-2 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    Send Message
                  </button>
                ) : status === "pending" && checkReciver === authUser.id ? (
                  <div className="mt-2 w-full flex flex-col gap-3">
                    <div className="flex gap-3 w-full">
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('accepted');
                          handleSendRequest('accepted');
                        }}
                        className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white py-3.5 rounded-2xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setStatus('rejected');
                          handleSendRequest('rejected');
                        }}
                        className="flex-1 bg-white border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-500 py-3.5 rounded-2xl font-bold transition-all active:scale-[0.98] flex items-center justify-center cursor-pointer"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      handleSendRequest('pending');
                      setStatus("pending");
                    }}
                    disabled={checkSend === authUser.id}
                    className={`w-full mt-2 px-8 py-3.5 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 cursor-pointer
                      ${checkSend === authUser.id
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                        : "bg-[#5D3289] text-white shadow-[0_8px_20px_-8px_rgba(93,50,137,0.5)] hover:bg-[#4B2471] active:scale-[0.98]"
                      }`}
                  >
                    {checkSend === authUser.id ? "Request Sent" : "Connect"}
                  </button>
                )}
              </div>

              {/* Gallery Card */}
              <div className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9]">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-6">Photo Gallery</h3>
                {selectedUser?.images?.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3">
                    {selectedUser.images.map((img, i) => (
                      <div key={i} className="aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-pointer group border border-gray-100">
                        <img
                          src={img.src || img}
                          onClick={() => setIndex(i)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          alt={`Gallery ${i}`}
                        />
                      </div>
                    ))}
                    <Lightbox
                      index={index}
                      open={index >= 0}
                      close={() => setIndex(-1)}
                      slides={selectedUser.images.map((img) => ({ src: img.src || img }))}
                    />
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 text-center py-4 italic">No gallery photos.</p>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-[1.4] bg-white p-8 md:p-10 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9] flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight border-b border-gray-50 pb-4">Personal Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Display Name</label>
                  <div className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-800">{selectedUser.fullName}</div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">About</label>
                  <div className="w-full min-h-[120px] bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-800 whitespace-pre-wrap">
                    {selectedUser.bio || "No bio provided."}
                  </div>
                </div>

                <div className="flex gap-4">
                  {facebookPreference && selectedUser.facebook && (
                    <a href={selectedUser.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F8F5FB] text-[#3b5998] border border-[#EAE2F3] hover:bg-[#3b5998] hover:text-white transition-colors"><FaFacebook size={24} /></a>
                  )}
                  {instagramPreference && selectedUser.instagram && (
                    <a href={selectedUser.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F8F5FB] text-[#E1306C] border border-[#EAE2F3] hover:bg-[#E1306C] hover:text-white transition-colors"><FaInstagram size={24} /></a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE BOTTOM NAV */}
          <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-4 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">
            <button onClick={() => navigate('/')} className={`flex flex-col items-center transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg>
            </button>

            <button onClick={() => navigate('/friend-request')} className={`flex flex-col items-center ${location.pathname === '/friend-request' ? 'text-[#5D3289]' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>

            <button onClick={() => navigate('/global-room-lists')} className={`flex flex-col items-center ${location.pathname === '/global-room-lists' ? 'text-[#5D3289]' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            </button>

            <button onClick={() => navigate('/messages')} className={`flex flex-col items-center transition-all ${location.pathname === '/messages' ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
            </button>

            <button onClick={() => navigate('/profile')} className={`flex flex-col items-center transition-all ${location.pathname === '/profile' ? 'text-[#5D3289]' : 'text-gray-400'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            </button>

            <button onClick={handleLogout} className="flex flex-col items-center text-gray-400 hover:text-red-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </button>
          </nav>

          <style dangerouslySetInnerHTML={{
            __html: `.safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }`
          }} />
        </div>
      </div>
    )
  );
};

export default SelectedUserProfilePage;