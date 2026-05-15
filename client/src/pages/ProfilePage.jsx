import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SideBar from '../components/SideBar';
import assets from '../assets';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProfilePage = () => {
  const { authUser, updateProfile, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Basic States
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authUser?.fullName || "");
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

  // 🔥 NEW: Top Artists State
  const [topArtists, setTopArtists] = useState(authUser?.topArtists || []);

  // UI States
  const [index, setIndex] = useState(-1);
  const [hobbyInput, setHobbyInput] = useState("");
  const [artistInput, setArtistInput] = useState(""); // Input for typing an artist

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

  // 🔥 Handlers for Top Artists
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

    // Package all data including Top Artists
    let profileData = {
      fullName: name,
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
      topArtists, // 🔥 Ensure this goes to the backend
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
  const mbtiOptions = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
  const attachmentOptions = ["Secure", "Anxious", "Avoidant", "Disorganized"];
  const beliefOptions = ["Agnostic", "Atheist", "Buddhist", "Christian", "Hindu", "Jewish", "Muslim", "Spiritual", "Other"];
  const loveLanguageOptions = ["Words of Affirmation", "Quality Time", "Receiving Gifts", "Acts of Service", "Physical Touch"];
  const horoscopeOptions = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

  return (
    <div className="flex min-h-screen bg-[#FDFCFE] font-sans text-gray-900 overflow-x-hidden relative">
      <div className="hidden lg:block z-50">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col items-center py-12 px-4 lg:pl-[120px] pb-32 lg:pb-12 transition-all duration-300">

        {/* Background Ambient Glow */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.05] blur-[120px] bg-[#5D3289]"></div>
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.04] blur-[100px]"></div>
        </div>

        {/* Header Container */}
        <div className="w-full max-w-5xl relative mb-10 flex items-center justify-center z-10">
          <button onClick={handleBack} className="absolute left-0 p-3 rounded-full bg-white border border-[#F4F0F9] text-gray-400 hover:text-[#5D3289] hover:bg-[#F8F5FB] transition-all shadow-sm active:scale-95">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="text-center">
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Edit Profile</h1>
            <p className="text-gray-400 text-sm font-medium">Fine-tune your identity algorithm</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-5xl flex flex-col md:flex-row gap-8 z-10">

          {/* LEFT COLUMN: PHOTOS */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-[#F4F0F9] flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4B2471] via-[#5D3289] to-[#7B52AB]"></div>
              <div className="relative mb-5 mt-4">
                <div className="w-40 h-40 rounded-[35px] bg-gradient-to-tr from-[#5D3289] to-[#9b6bcc] p-[3px] shadow-lg rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-full h-full rounded-[33px] border-4 border-white overflow-hidden bg-white -rotate-3 hover:rotate-0 transition-transform">
                    <img src={selectedImg ? URL.createObjectURL(selectedImg) : (authUser?.avatar || assets.logo)} className="w-full h-full object-cover" alt="Profile" />
                  </div>
                </div>
                <label htmlFor="avatar" className="absolute -bottom-2 -right-2 bg-[#5D3289] p-3 rounded-full cursor-pointer border-[4px] border-white hover:scale-110 transition-transform shadow-lg">
                  <input type="file" id="avatar" hidden onChange={(e) => setSelectedImg(e.target.files[0])} />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                </label>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Main Photo</h3>
              <p className="text-gray-400 text-xs mb-2">The face of your profile</p>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-[#F4F0F9]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Photo Gallery</h3>
                <span className="bg-purple-50 text-[#5D3289] px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">{imageGallery.length}/6 Slots</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {imageGallery.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-[20px] overflow-hidden group border border-[#F4F0F9]">
                    <img src={img.src || img} onClick={() => setIndex(i)} className="w-full h-full object-cover group-hover:scale-110 transition-transform cursor-pointer" alt="" />
                    <button onClick={() => removeImage(i)} type="button" className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white w-7 h-7 rounded-full text-xs hover:bg-red-500 transition-colors shadow-sm flex items-center justify-center">✕</button>
                  </div>
                ))}
                {imageGallery.length < 6 && (
                  <label className="aspect-square flex items-center justify-center border-2 border-dashed border-gray-200 rounded-[20px] cursor-pointer hover:bg-gray-50 hover:border-[#5D3289] transition-colors">
                    <span className="text-3xl text-gray-300 font-light">+</span>
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

          {/* RIGHT COLUMN: PERSONAL INFO */}
          <div className="flex-[1.4] bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-[#F4F0F9] flex flex-col">

            {/* Section 1: Core Info */}
            <h3 className="text-lg font-black text-[#5D3289] uppercase tracking-[0.2em] mb-6 border-b border-gray-50 pb-4">Core Identity</h3>
            <div className="space-y-5 mb-10">
              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">Display Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl outline-none border focus:border-[#5D3289] transition-all font-bold text-gray-800" />
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">Soul Narrative (Bio)</label>
                <textarea rows={4} value={bio} onChange={(e) => setBio(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl outline-none border focus:border-[#5D3289] resize-none transition-all text-gray-700" maxLength={500} placeholder="What makes you, you?" />
              </div>

              {/* Hobbies Input */}
              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">Interests & Hobbies</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {interests.map((hobby, idx) => (
                    <span key={idx} className="bg-purple-50 text-[#5D3289] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-purple-100">
                      {hobby} <button type="button" onClick={() => removeInterests(idx)} className="hover:text-red-500">✕</button>
                    </span>
                  ))}
                </div>
                <input type="text" value={hobbyInput} onChange={(e) => setHobbyInput(e.target.value)} onKeyDown={handleAddHobby} placeholder="Type a hobby and press Enter..." className="w-full bg-gray-50/70 p-4 rounded-xl border focus:border-[#5D3289] outline-none text-sm" />
              </div>

              {/* 🔥 NEW: Top Artists Input */}
              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">Top Artists & Musicians</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {topArtists.filter(artist => artist.trim() !== "").map((artist, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-gray-200">
                      {artist} <button type="button" onClick={() => removeArtist(idx)} className="hover:text-red-500">✕</button>
                    </span>
                  ))}
                </div>
                <input type="text" value={artistInput} onChange={(e) => setArtistInput(e.target.value)} onKeyDown={handleAddArtist} placeholder="Type an artist and press Enter..." className="w-full bg-gray-50/70 p-4 rounded-xl border focus:border-[#5D3289] outline-none text-sm" />
              </div>
            </div>

            {/* Section 2: Psychology & Traits */}
            <h3 className="text-lg font-black text-[#5D3289] uppercase tracking-[0.2em] mb-6 border-b border-gray-50 pb-4">Psychology & Vibe</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Current Mood</label>
                <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border outline-none cursor-pointer focus:border-[#5D3289] font-bold text-gray-700">
                  <option value="">Select Mood</option>
                  <option value="Open to Chat">Open to Chat 💬</option>
                  <option value="Social & Active">Social & Active ✨</option>
                  <option value="Low Energy">Low Energy 🔋</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">MBTI Type</label>
                <select value={mbtiType} onChange={(e) => setMbtiType(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border outline-none cursor-pointer focus:border-[#5D3289] font-bold text-gray-700">
                  <option value="">Discovering...</option>
                  {mbtiOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Attachment Style</label>
                <select value={attachmentStyle} onChange={(e) => setAttachmentStyle(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border outline-none cursor-pointer focus:border-[#5D3289] font-bold text-gray-700">
                  <option value="">Discovering...</option>
                  {attachmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Love Language</label>
                <select value={loveLanguage} onChange={(e) => setLoveLanguage(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border outline-none cursor-pointer focus:border-[#5D3289] font-bold text-gray-700">
                  <option value="">Discovering...</option>
                  {loveLanguageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Belief System</label>
                <select value={beliefSystem} onChange={(e) => setBeliefSystem(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border outline-none cursor-pointer focus:border-[#5D3289] font-bold text-gray-700">
                  <option value="">Discovering...</option>
                  {beliefOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">Horoscope</label>
                <select value={horoscope} onChange={(e) => setHoroscope(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border outline-none cursor-pointer focus:border-[#5D3289] font-bold text-gray-700">
                  <option value="">Discovering...</option>
                  {horoscopeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

            </div>

            {/* Section 3: Social Anchors */}
            <h3 className="text-lg font-black text-[#5D3289] uppercase tracking-[0.2em] mb-6 border-b border-gray-50 pb-4">Social Anchors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border focus:border-[#E1306C] outline-none transition-colors" placeholder="Instagram URL" />
              <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} className="w-full bg-gray-50/70 p-4 rounded-xl border focus:border-[#3b5998] outline-none transition-colors" placeholder="Facebook URL" />
            </div>

            <div className="mt-auto flex flex-col-reverse sm:flex-row justify-end items-center gap-4 border-t border-gray-50 pt-8">
              <button onClick={() => navigate('/')} type="button" className="text-gray-400 font-bold px-6 py-3.5 hover:text-gray-600 transition-colors">Discard</button>
              <button type="submit" className="w-full sm:w-auto bg-[#5D3289] text-white px-10 py-4 rounded-2xl font-black shadow-[0_8px_20px_-8px_rgba(93,50,137,0.5)] hover:bg-[#4B2471] transition-all hover:-translate-y-1 active:translate-y-0">
                Save & Update Algorithm
              </button>
            </div>

          </div>
        </form>

        {/* MOBILE BOTTOM NAV */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#F4F0F9] px-4 py-4 flex justify-between items-center z-40 shadow-[0_-8px_24px_-8px_rgba(93,50,137,0.08)] safe-area-pb">
          <button onClick={() => navigate('/')} className={`flex flex-col items-center transition-all ${location.pathname === '/' ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg></button>
          <button onClick={() => navigate('/friend-request')} className={`flex flex-col items-center ${location.pathname === '/friend-request' ? 'text-[#5D3289]' : 'text-gray-400'}`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
          <button onClick={() => navigate('/global-room-lists')} className={`flex flex-col items-center ${location.pathname === '/global-room-lists' ? 'text-[#5D3289]' : 'text-gray-400'}`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg></button>
          <button onClick={() => navigate('/messages')} className={`flex flex-col items-center transition-all ${location.pathname === '/messages' ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg></button>
          <button onClick={() => navigate('/profile')} className={`flex flex-col items-center transition-all ${location.pathname === '/profile' ? 'text-[#5D3289] scale-110' : 'text-gray-400'}`}><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></button>
        </nav>

        <style dangerouslySetInnerHTML={{ __html: `.safe-area-pb { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }` }} />
      </div>
    </div>
  );
};

export default ProfilePage;