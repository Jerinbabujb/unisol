import React, { useState, useContext, useEffect } from 'react';
import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SelectedUserProfilePage = () => {
  const {
    selectedUser, sendRequest, requestCheck, checkReciver, checkSend,
    instagramPreference, facebookPreference
  } = useContext(ChatContext);
  const { status, setStatus } = useContext(ChatContext);
  const { authUser } = useContext(AuthContext);
  const [index, setIndex] = useState(-1);

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!selectedUser?.id) navigate('/');
  // }, [selectedUser]);

  const handleBack = () => {
    navigate("/");
  }

  const handleSendRequest = (newStatus) => {
    console.log(newStatus);
    sendRequest(newStatus, selectedUser?.id);
  };

  useEffect(() => {
    if (!selectedUser?.id) return;

    setStatus("pending"); // reset immediately

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

  useEffect(() => {
    const check = async () => {
      if (selectedUser?.id) {
        const result = await requestCheck();
        if (!result) {
          setStatus("pending");
        } else {
          setStatus(result.status);
        }
      }
    }
    check();
  }, [selectedUser?.id]);

  return (
    selectedUser && (
      <div className="min-h-screen bg-[#FDFCFE] flex flex-col items-center py-12 px-4 font-sans selection:bg-purple-100 selection:text-[#5D3289]">

        {/* Background Ambient Glow */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.04] blur-[120px] bg-[#5D3289]"></div>
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.03] blur-[100px]"></div>
        </div>

        {/* Header Container */}
        <div className="w-full max-w-5xl relative mb-12 flex items-center justify-center z-10">
          {/* Back Button */}
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

        <form className="w-full max-w-5xl flex flex-col md:flex-row gap-8 z-10">

          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Main Photo & Action Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9] flex flex-col items-center text-center relative overflow-hidden">
              {/* Subtle card top gradient */}
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
                  onClick={() => { /* Navigate to chat logic here */ }}
                  className="w-full mt-2 px-8 py-3.5 rounded-2xl bg-[#5D3289] text-white font-bold hover:bg-[#4B2471] transition-all shadow-[0_8px_20px_-8px_rgba(93,50,137,0.5)] active:scale-[0.98] flex justify-center items-center gap-2 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  Send Message
                </button>
              ) : status === "pending" && checkReciver === authUser.id ? (
                <div className="mt-2 w-full flex flex-col gap-3">
                  <div className="flex gap-3 w-full">
                    {/* Accept Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('accepted');
                        handleSendRequest('accepted');
                      }}
                      className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white py-3.5 rounded-2xl font-bold shadow-[0_8px_20px_-8px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      Accept
                    </button>

                    {/* Reject Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('rejected');
                        handleSendRequest('rejected');
                      }}
                      className="flex-1 bg-white border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 py-3.5 rounded-2xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Decline
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-1">
                    Sent you a connection request
                  </p>
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

            {/* Photo Gallery Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                  Photo Gallery
                </h3>
                <span className="bg-[#F8F5FB] border border-[#EAE2F3] text-[#5D3289] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  {selectedUser?.images?.length || 0} Photos
                </span>
              </div>

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
                    slides={selectedUser.images.map((img) => ({
                      src: img.src || img
                    }))}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                  <span className="text-3xl mb-2">📸</span>
                  <p className="text-sm text-gray-400 font-medium">No additional photos added.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-[1.4] bg-white p-8 md:p-10 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9] flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight border-b border-gray-50 pb-4">
              Personal Information
            </h3>

            <div className="space-y-6">

              {/* Display Name */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5 ml-1">
                  Display Name
                </label>
                <div className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-800">
                  {selectedUser.fullName}
                </div>
              </div>

              {/* Bio */}
              <div>
                <div className="flex justify-between items-end mb-1.5 ml-1">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                    About {selectedUser.fullName.split(' ')[0]}
                  </label>
                </div>
                <div className="w-full min-h-[120px] bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-800 whitespace-pre-wrap">
                  {selectedUser.bio || <span className="text-gray-400 italic">This user hasn't written a bio yet.</span>}
                </div>
              </div>

              {/* Mood */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5 ml-1">
                  Current Mood
                </label>
                <div className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-sm font-medium text-gray-800 flex items-center gap-2">
                  {selectedUser.mood ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#5D3289]"></span>
                      {selectedUser.mood}
                    </>
                  ) : (
                    <span className="text-gray-400 italic">Mood is not set</span>
                  )}
                </div>
              </div>

              {/* Social Links */}
              {(facebookPreference || instagramPreference) && (
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2.5 ml-1">
                    Social Profiles
                  </label>
                  <div className="flex gap-4">
                    {facebookPreference && selectedUser.facebook && (
                      <a href={selectedUser.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F8F5FB] text-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-colors border border-[#EAE2F3]">
                        <FaFacebook size={24} />
                      </a>
                    )}
                    {instagramPreference && selectedUser.instagram && (
                      <a href={selectedUser.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F8F5FB] text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all border border-[#EAE2F3]">
                        <FaInstagram size={24} />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Interests */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2.5 ml-1">
                  Interests & Vibes
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {selectedUser.interest && selectedUser.interest.length > 0 ? (
                    selectedUser.interest.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-[#EAE2F3] text-[#5D3289] px-4 py-2 rounded-full text-xs font-bold shadow-sm"
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <span className="text-sm font-medium text-gray-400 italic bg-gray-50/50 px-4 py-2 rounded-xl border border-gray-100">
                      No interests added.
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default SelectedUserProfilePage;