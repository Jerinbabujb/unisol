import React, { useState, useContext, useEffect } from 'react';
import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SideBar from '../components/SideBar';
// IMPORTED FaHandHoldingHeart for Belief System
import { FaFacebook, FaInstagram, FaHeart, FaBrain, FaCompass, FaStar, FaMusic, FaHandHoldingHeart } from "react-icons/fa";
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

  const handleBack = () => navigate("/");
  const handleLogout = () => { logout(); navigate('/login'); };

  const handleSendRequest = (newStatus) => sendRequest(newStatus, selectedUser?.id);

  useEffect(() => {
    if (!selectedUser?.id) return;
    const check = async () => {
      const result = await requestCheck();
      if (!result) setStatus("pending");
      else setStatus(result.status);
    };
    check();
  }, [selectedUser?.id]);

  const CompatibilityInsight = ({ percentage, reasons }) => (
    <div className="w-full bg-gradient-to-br from-[#5D3289] to-[#7B52AB] p-6 rounded-[32px] text-white mb-8 shadow-xl relative overflow-hidden group">
      <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
        <FaHeart size={100} />
      </div>
      <div className="flex items-center gap-6 relative z-10">
        <div className="relative w-20 h-20 flex items-center justify-center bg-white/20 rounded-full border-4 border-white/30">
          <span className="text-xl font-black">{percentage}%</span>
        </div>
        <div>
          <h3 className="text-lg font-bold">Vibe Compatibility</h3>
          <p className="text-purple-100 text-sm italic">{reasons || "High resonance in personality and values."}</p>
        </div>
      </div>
    </div>
  );

  const PersonalityBadge = ({ icon: Icon, label, value, colorClass }) => (
    <div className="flex items-center gap-3 p-4 rounded-3xl bg-white border border-[#F4F0F9] shadow-sm">
      <div className={`p-3 rounded-2xl ${colorClass} text-white`}>
        <Icon size={18} />
      </div>
      <div className="overflow-hidden">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-[13px] font-bold text-gray-800 truncate">{value || "Discovering..."}</p>
      </div>
    </div>
  );

  return (
    selectedUser && (
      <div className="flex min-h-screen bg-[#FDFCFE] font-sans selection:bg-purple-100 selection:text-[#5D3289] relative overflow-x-hidden">
        <div className="hidden lg:block z-50">
          <SideBar />
        </div>

        <div className="flex-1 flex flex-col items-center py-12 px-4 pb-32 lg:pb-12 lg:pl-[120px]">
          {/* Header */}
          <div className="w-full max-w-5xl relative mb-12 flex flex-col items-center z-10">
            <button onClick={handleBack} className="absolute left-0 p-3 rounded-full bg-white border border-[#F4F0F9] text-gray-400 hover:text-[#5D3289] shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">{selectedUser.fullName}</h1>

            {/* PRONOUNS / IDENTITY BADGE */}
            {/* <p className="text-[#5D3289] text-sm font-bold mt-2 tracking-widest uppercase bg-purple-50 px-4 py-1 rounded-full">
              {selectedUser.gender || "Human"}
            </p> */}
          </div>

          <div className="w-full max-w-5xl z-10">
            <CompatibilityInsight percentage={selectedUser.match_percentage} reasons={selectedUser.matchReason} />
          </div>

          <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 z-10">

            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-[#F4F0F9] flex flex-col items-center relative">
                <div className="w-48 h-44 rounded-[40px] bg-gradient-to-tr from-[#5D3289] to-[#9b6bcc] p-[3px] shadow-xl rotate-3 mb-6">
                  <div className="w-full h-full rounded-[38px] border-4 border-white overflow-hidden bg-white -rotate-3">
                    <img src={selectedUser.avatar || assets.logo} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>

                {status === "accepted" ? (
                  <button onClick={() => navigate('/messages')} className="w-full py-4 rounded-2xl bg-[#5D3289] text-white font-bold hover:bg-[#4B2471] transition-all">Send Message</button>
                ) : status === "pending" && checkReciver === authUser.id ? (
                  <div className="w-full flex gap-3">
                    <button onClick={() => { setStatus('accepted'); handleSendRequest('accepted'); }} className="flex-1 bg-[#10B981] text-white py-4 rounded-2xl font-bold">Accept</button>
                    <button onClick={() => { setStatus('rejected'); handleSendRequest('rejected'); }} className="flex-1 bg-white border border-gray-200 text-gray-500 py-4 rounded-2xl font-bold">Decline</button>
                  </div>
                ) : (
                  <button onClick={() => { handleSendRequest('pending'); setStatus("pending"); }} disabled={checkSend === authUser.id} className={`w-full py-4 rounded-2xl font-bold ${checkSend === authUser.id ? "bg-gray-100 text-gray-400" : "bg-[#5D3289] text-white"}`}>
                    {checkSend === authUser.id ? "Request Pending..." : "Start Connection"}
                  </button>
                )}
              </div>

              {/* UPDATED: Personality Grid with Belief System */}
              <div className="grid grid-cols-2 gap-3">
                <PersonalityBadge icon={FaBrain} label="MBTI" value={selectedUser.mbtiType} colorClass="bg-indigo-500" />
                <PersonalityBadge icon={FaCompass} label="Attachment" value={selectedUser.attachmentStyle} colorClass="bg-emerald-500" />
                <PersonalityBadge icon={FaStar} label="Horoscope" value={selectedUser.horoscope} colorClass="bg-amber-500" />
                <PersonalityBadge icon={FaHandHoldingHeart} label="Beliefs" value={selectedUser.beliefSystem} colorClass="bg-rose-500" />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-[1.4] bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-[#F4F0F9] space-y-8">

              {/* Bio */}
              <section>
                <label className="text-[11px] font-black text-[#5D3289] uppercase tracking-[0.2em] block mb-4">Soul Narrative</label>
                <p className="text-gray-700 leading-relaxed text-lg font-medium pl-4 border-l-4 border-[#5D3289]/20 italic">
                  "{selectedUser.bio || "No bio added yet."}"
                </p>
              </section>

              {/* Hobbies / Interests */}
              <section>
                <label className="text-[11px] font-black text-[#5D3289] uppercase tracking-[0.2em] block mb-4">Interests & Hobbies</label>
                <div className="flex flex-wrap gap-2.5">
                  {selectedUser.interest && selectedUser.interest.length > 0 ? (
                    selectedUser.interest.map((hobby, idx) => (
                      <div key={idx} className="bg-white border border-[#F4F0F9] text-gray-600 px-4 py-2 rounded-full text-xs font-bold shadow-sm">{hobby}</div>
                    ))
                  ) : <span className="text-gray-400 italic text-sm">No hobbies listed.</span>}
                </div>
              </section>

              {/* Music / Top Artists */}
              <section>
                <label className="text-[11px] font-black text-[#5D3289] uppercase tracking-[0.2em] block mb-4 flex items-center gap-2"><FaMusic /> Top Artists</label>
                <div className="grid grid-cols-2 gap-3">
                  {selectedUser.topArtists && selectedUser.topArtists.length > 0 ? (
                    selectedUser.topArtists.filter(artist => artist.trim() !== "").map((artist, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-[#5D3289] flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
                        <span className="text-sm font-bold text-gray-800 capitalize">{artist}</span>
                      </div>
                    ))
                  ) : <p className="text-gray-400 text-xs italic">Music profile not connected.</p>}
                </div>
              </section>

              {/* Socials */}
              {(selectedUser.facebook || selectedUser.instagram) && (
                <section className="pt-4 border-t border-gray-50">
                  <label className="text-[11px] font-black text-[#5D3289] uppercase tracking-[0.2em] block mb-4">Connect</label>
                  <div className="flex gap-4">
                    {facebookPreference && selectedUser.facebook && (
                      <a href={selectedUser.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F8F5FB] text-[#3b5998] border border-[#EAE2F3] hover:bg-[#3b5998] hover:text-white transition-colors"><FaFacebook size={24} /></a>
                    )}
                    {instagramPreference && selectedUser.instagram && (
                      <a href={selectedUser.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F8F5FB] text-[#E1306C] border border-[#EAE2F3] hover:bg-[#E1306C] hover:text-white transition-colors"><FaInstagram size={24} /></a>
                    )}
                  </div>
                </section>
              )}

            </div>
          </div>

          {/* GALLERY SECTION */}
          <div className="w-full max-w-5xl mt-8 z-10">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-[#F4F0F9]">
              <h3 className="text-lg font-black text-gray-900 mb-6">Photo Gallery</h3>
              {selectedUser.images && selectedUser.images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedUser.images.map((img, i) => (
                    <div key={i} className="aspect-[3/4] rounded-[24px] overflow-hidden group cursor-pointer border border-[#F4F0F9]">
                      <img src={img.src || img} onClick={() => setIndex(i)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic text-center py-10">This user hasn't uploaded any additional photos.</p>
              )}
              <Lightbox index={index} open={index >= 0} close={() => setIndex(-1)} slides={(selectedUser.images || []).map((img) => ({ src: img.src || img }))} />
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
          <button onClick={() => navigate('/settings')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/settings' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </button>

          <button onClick={handleLogout} className="flex flex-col items-center text-gray-400 hover:text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </nav>

        <style dangerouslySetInnerHTML={{
          __html: `.safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }`
        }} />
      </div>
    )
  );
};

export default SelectedUserProfilePage;