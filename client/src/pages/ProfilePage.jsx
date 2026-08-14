import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SideBar from '../components/SideBar';
import assets from '../assets';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AstroChart } from '@astrologer/react-chart';
import AstrologyProfile from '../components/AstrologyProfile';

const ProfilePage = () => {
  const { authUser, updateProfile, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Basic States
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authUser?.fullName || "");
  const [pronouns, setPronouns] = useState(authUser?.pronouns || "");
  const [bio, setBio] = useState(authUser?.bio || "");
  const [mood, setMood] = useState(authUser?.mood || "");
  const [instagram, setInstagram] = useState(authUser?.instagram || '');
  const [facebook, setFacebook] = useState(authUser?.facebook || '');
  const [interests, setInterests] = useState(authUser?.interest || []);
  const [imageGallery, setImageGallery] = useState(authUser?.images || []);

  // Psychological & Identity States
  const [mbtiType, setMbtiType] = useState(authUser?.mbtiType || "");
  const [attachmentStyle, setAttachmentStyle] = useState(authUser?.attachmentStyle || "");
  const [beliefSystem, setBeliefSystem] = useState(authUser?.beliefSystem || "");
  const [loveLanguage, setLoveLanguage] = useState(authUser?.loveLanguages?.[0] || "");
  const [horoscope, setHoroscope] = useState(authUser?.horoscope || "");

  // Top Artists State
  const [topArtists, setTopArtists] = useState(authUser?.topArtists || []);

  // UI States
  const [index, setIndex] = useState(-1);
  const [hobbyInput, setHobbyInput] = useState("");
  const [artistInput, setArtistInput] = useState("");

  const handleBack = () => navigate("/");
  const handleLogout = () => { logout(); navigate('/login'); };

  // Handlers for Hobbies
  const handleAddHobby = (e) => {
    if (e.key === 'Enter' && hobbyInput.trim() !== '') {
      e.preventDefault();
      if (!interests.includes(hobbyInput.trim())) setInterests([...interests, hobbyInput.trim()]);
      setHobbyInput("");
    }
  };
  const removeInterests = (idx) => setInterests(prev => prev.filter((_, i) => i !== idx));

  // Handlers for Top Artists
  const handleAddArtist = (e) => {
    if (e.key === 'Enter' && artistInput.trim() !== '') {
      e.preventDefault();
      if (!topArtists.includes(artistInput.trim())) setTopArtists([...topArtists, artistInput.trim()]);
      setArtistInput("");
    }
  };
  const removeArtist = (idx) => setTopArtists(prev => prev.filter((_, i) => i !== idx));

  const handleSubmit = async (e) => {
    e.preventDefault();

    let profileData = {
      fullName: name,
      pronouns,
      bio,
      mood,
      instagram,
      facebook,
      interest: interests,
      images: imageGallery,
      mbtiType,
      attachmentStyle,
      beliefSystem,
      horoscope,
      topArtists,
      loveLanguages: loveLanguage ? [loveLanguage] : []
    };

    if (selectedImg) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImg);
      reader.onload = async () => {
        profileData.avatar = reader.result;
        await updateProfile(profileData);
        navigate("/");
      };
    } else {
      await updateProfile(profileData);
      navigate("/");
    }
  };

  const removeImage = (idx) => setImageGallery(prev => prev.filter((_, i) => i !== idx));

  // Options for Dropdowns
  const pronounOptions = ["she/her", "he/him", "prefer not to say"];
  const mbtiOptions = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
  const attachmentOptions = ["Secure", "Anxious", "Avoidant", "Disorganized"];
  const beliefOptions = ["Agnostic", "Atheist", "Spiritual", "Other"];
  const loveLanguageOptions = ["Words of Affirmation", "Quality Time", "Receiving Gifts", "Acts of Service", "Physical Touch"];
  const horoscopeOptions = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

 return (
    <div className="flex min-h-screen bg-[#FDFCFE] font-sans text-gray-900 overflow-x-hidden relative selection:bg-[#5D3289] selection:text-white">
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col items-center py-12 px-4 lg:pl-[120px] pb-32 lg:pb-12 transition-all duration-300">

        {/* Header Container */}
        <div className="w-full max-w-5xl relative mb-12 flex items-center justify-center z-10">
          <button onClick={handleBack} className="absolute left-0 p-3.5 rounded-2xl bg-white border border-[#F4F0F9] text-gray-500 hover:text-[#5D3289] hover:bg-purple-50/50 hover:border-purple-100 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] active:scale-95 group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">Edit Profile</h1>
            <p className="text-gray-400 text-sm md:text-base font-medium">Fine-tune your identity algorithm</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-5xl flex flex-col gap-8 z-10">
          
          {/* --- TOP ROW: TWO COLUMNS (Photos & Info) --- */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT COLUMN: PHOTOS */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F4F0F9] flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4B2471] via-[#5D3289] to-[#7B52AB] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative mb-6 mt-4">
                  <div className="w-44 h-44 rounded-[2rem] bg-gradient-to-tr from-[#5D3289] to-[#b78ae6] p-[3px] shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                    <div className="w-full h-full rounded-[1.8rem] border-[4px] border-white overflow-hidden bg-white -rotate-3 group-hover:rotate-0 transition-all duration-500">
                      <img src={selectedImg ? URL.createObjectURL(selectedImg) : (authUser?.avatar || assets.logo)} className="w-full h-full object-cover" alt="Profile" />
                    </div>
                  </div>
                  <label htmlFor="avatar" className="absolute -bottom-3 -right-3 bg-[#5D3289] p-3.5 rounded-2xl cursor-pointer border-[4px] border-white hover:scale-105 hover:bg-[#4B2471] transition-all shadow-xl">
                    <input type="file" id="avatar" hidden onChange={(e) => setSelectedImg(e.target.files[0])} />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                  </label>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Main Photo</h3>
                <p className="text-gray-400 text-sm mt-1">The face of your profile</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F4F0F9]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Gallery</h3>
                  <span className="bg-[#F8F5FB] text-[#5D3289] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-100/50">{imageGallery.length}/6 Slots</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {imageGallery.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-[1.25rem] overflow-hidden group shadow-sm border border-gray-100">
                      <img src={img.src || img} onClick={() => setIndex(i)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer" alt="" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
                      <button onClick={() => removeImage(i)} type="button" className="absolute top-2 right-2 bg-white/90 backdrop-blur-md text-red-500 w-8 h-8 rounded-full text-sm hover:bg-red-500 hover:text-white transition-all shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">✕</button>
                    </div>
                  ))}
                  {imageGallery.length < 6 && (
                    <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-[1.25rem] cursor-pointer hover:bg-purple-50/50 hover:border-[#5D3289]/40 hover:text-[#5D3289] transition-all group text-gray-400">
                      <svg className="w-8 h-8 mb-1 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      <span className="text-xs font-medium opacity-50 group-hover:opacity-100 transition-opacity">Add Photo</span>
                      <input type="file" hidden onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => setImageGallery(prev => [...prev, { src: reader.result }]);
                          reader.readAsDataURL(file);
                        }
                      }} />
                    </label>
                  )}
                </div>
                <Lightbox index={index} open={index >= 0} close={() => setIndex(-1)} slides={imageGallery.map(img => ({ src: typeof img === "string" ? img : img.src }))} />
              </div>
            </div>

            {/* RIGHT COLUMN: PERSONAL INFO & SOCIALS */}
            <div className="flex-[1.6] bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F4F0F9] flex flex-col">

              {/* Section 1: Core Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F8F5FB] flex items-center justify-center text-[#5D3289]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">Core Identity</h3>
              </div>

              <div className="space-y-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-[#5D3289] transition-colors">Pronouns</label>
                    <select value={pronouns} onChange={(e) => setPronouns(e.target.value)} className="appearance-none w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 outline-none cursor-pointer focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 transition-all font-medium text-gray-800 shadow-sm">
                      <option value="">Select Pronouns</option>
                      {pronounOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <svg className="absolute right-4 bottom-5 w-4 h-4 text-gray-400 pointer-events-none group-focus-within:text-[#5D3289] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <div className="group">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-[#5D3289] transition-colors">Display Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white px-5 py-4 rounded-2xl outline-none border border-gray-200 focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 transition-all font-medium text-gray-800 shadow-sm" placeholder="Your name" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-[#5D3289] transition-colors">Soul Narrative (Bio)</label>
                  <textarea rows={4} value={bio} onChange={(e) => setBio(e.target.value)} className="w-full bg-white px-5 py-4 rounded-2xl outline-none border border-gray-200 focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 resize-none transition-all font-medium text-gray-800 shadow-sm leading-relaxed" maxLength={500} placeholder="What makes you, you?" />
                </div>

                {/* Hobbies Input */}
                <div className="group">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-[#5D3289] transition-colors">Interests & Hobbies</label>
                  <div className="flex flex-wrap gap-2.5 mb-3">
                    {interests.map((hobby, idx) => (
                      <span key={idx} className="bg-[#F8F5FB] text-[#5D3289] px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 border border-[#EBE3F4] shadow-sm hover:shadow-md transition-shadow">
                        {hobby} <button type="button" onClick={() => removeInterests(idx)} className="hover:text-red-500 transition-colors bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">✕</button>
                      </span>
                    ))}
                  </div>
                  <input type="text" value={hobbyInput} onChange={(e) => setHobbyInput(e.target.value)} onKeyDown={handleAddHobby} placeholder="Type a hobby and press Enter..." className="w-full bg-white px-5 py-4 rounded-2xl outline-none border border-gray-200 focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 transition-all font-medium text-gray-800 shadow-sm" />
                </div>

                {/* Top Artists Input */}
                <div className="group">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-[#5D3289] transition-colors">Top Artists & Musicians</label>
                  <div className="flex flex-wrap gap-2.5 mb-3">
                    {topArtists.filter(artist => artist.trim() !== "").map((artist, idx) => (
                      <span key={idx} className="bg-gray-50 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        {artist} <button type="button" onClick={() => removeArtist(idx)} className="hover:text-red-500 transition-colors bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">✕</button>
                      </span>
                    ))}
                  </div>
                  <input type="text" value={artistInput} onChange={(e) => setArtistInput(e.target.value)} onKeyDown={handleAddArtist} placeholder="Type an artist and press Enter..." className="w-full bg-white px-5 py-4 rounded-2xl outline-none border border-gray-200 focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 transition-all font-medium text-gray-800 shadow-sm" />
                </div>
              </div>

              {/* Section 2: Psychology & Traits */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F8F5FB] flex items-center justify-center text-[#5D3289]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">Psychology & Vibe</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { label: "Current Mood", value: mood, setter: setMood, options: ["Open to Chat", "Social & Active", "Low Energy"] },
                  { label: "MBTI Type", value: mbtiType, setter: setMbtiType, options: mbtiOptions },
                  { label: "Attachment Style", value: attachmentStyle, setter: setAttachmentStyle, options: attachmentOptions },
                  { label: "Love Language", value: loveLanguage, setter: setLoveLanguage, options: loveLanguageOptions },
                  { label: "Belief System", value: beliefSystem, setter: setBeliefSystem, options: beliefOptions },
                  { label: "Horoscope", value: horoscope, setter: setHoroscope, options: horoscopeOptions }
                ].map((field, idx) => (
                  <div key={idx} className="group relative">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">{field.label}</label>
                    <select value={field.value} onChange={(e) => field.setter(e.target.value)} className="appearance-none w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 outline-none cursor-pointer focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 transition-all font-medium text-gray-800 shadow-sm">
                      <option value="">Discovering...</option>
                      {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <svg className="absolute right-4 bottom-5 w-4 h-4 text-gray-400 pointer-events-none group-focus-within:text-[#5D3289] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                ))}
              </div>

              {/* Section 3: Social Anchors */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F8F5FB] flex items-center justify-center text-[#5D3289]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-wide">Social Anchors</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#E1306C] focus:ring-4 focus:ring-[#E1306C]/10 outline-none transition-all font-medium text-gray-800 shadow-sm" placeholder="Instagram URL" />
                </div>
                <div className="group">
                  <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} className="w-full bg-white px-5 py-4 rounded-2xl border border-gray-200 focus:border-[#3b5998] focus:ring-4 focus:ring-[#3b5998]/10 outline-none transition-all font-medium text-gray-800 shadow-sm" placeholder="Facebook URL" />
                </div>
              </div>

            </div>
          </div>

          {/* --- MIDDLE ROW: FULL WIDTH ASTROLOGY PROFILE --- */}
          <div className="w-full">
            <AstrologyProfile userData={authUser} />
          </div>

          {/* --- BOTTOM ROW: FULL WIDTH ACTION BAR --- */}
          <div className="w-full bg-white/80 backdrop-blur-xl p-6 md:px-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F4F0F9] flex flex-col-reverse sm:flex-row justify-end items-center gap-4 sticky bottom-6 lg:static z-20">
            <button onClick={() => navigate('/')} type="button" className="text-gray-500 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 hover:text-gray-800 transition-all w-full sm:w-auto">
              Discard
            </button>
            <button type="submit" className="w-full sm:w-auto bg-[#5D3289] text-white px-10 py-4 rounded-2xl font-black shadow-[0_10px_25px_-5px_rgba(93,50,137,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(93,50,137,0.5)] hover:bg-[#4B2471] transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
              Save & Update Profile
            </button>
          </div>

        </form>

        {/* MOBILE BOTTOM NAV */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-2 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">
          {/* ... (Your exact same mobile nav icons remain here) ... */}
          <button onClick={() => navigate('/')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg>
          </button>
          <button onClick={() => navigate('/friend-request')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/friend-request' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </button>
          <button onClick={() => navigate('/global-room-lists')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/global-room-lists' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
          </button>
          <button onClick={() => navigate('/messages')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/messages' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
          </button>
          <button onClick={() => navigate('/profile')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/profile' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
          </button>
          <button onClick={() => navigate('/settings')} className={`flex flex-col items-center flex-1 transition-all ${location.pathname === '/settings' ? 'text-[#5D3289] scale-110' : 'text-gray-400 hover:text-gray-600'}`}>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </button>
          <button onClick={handleLogout} className="flex flex-col items-center flex-1 transition-all text-gray-400 hover:text-red-500">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </button>
        </nav>

        <style dangerouslySetInnerHTML={{ __html: `.safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }` }} />
      </div>
    </div>
  );
};

export default ProfilePage;