import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import assets from '../assets';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // States
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authUser?.fullName || "");
  const [bio, setBio] = useState(authUser?.bio || "");
  const [mood, setMood] = useState(authUser?.mood || "");
  const [instagram, setInstagram] = useState(authUser?.instagram || '');
  const [facebook, setFacebook] = useState(authUser?.facebook || '');
  const [interests, setInterests] = useState(authUser?.interest || []);
  const [index, setIndex] = useState(-1);
  const [interestsButton, setInterestsButton] = useState(false);
  const [imageGallery, setImageGallery] = useState(
    authUser?.images || []
  );

  const handleBack = () => {
    navigate("/");
  }

  useEffect(() => {
    console.log("the imageGallery is ", imageGallery);
  }, [imageGallery]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let profileData = { fullName: name, bio, mood, instagram, facebook, interest: interests, images: imageGallery };

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

  const removeImage = (index) => {
    setImageGallery(prev => prev.filter((_, i) => i !== index));
  };

  const removeInteresets = (index) => {
    setInterests(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-[#FDFCFE] flex flex-col items-center py-12 px-4 font-sans selection:bg-purple-100 selection:text-[#5D3289]">

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.05] blur-[120px] bg-[#5D3289]"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.04] blur-[100px]"></div>
      </div>

      {/* Header Container */}
      <div className="w-full max-w-5xl relative mb-10 flex items-center justify-center z-10">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-0 p-3 rounded-full bg-white border border-[#F4F0F9] text-gray-400 hover:text-[#5D3289] hover:bg-[#F8F5FB] transition-all shadow-sm active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
            Edit Profile
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            Make your first impression count
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-5xl flex flex-col md:flex-row gap-8 z-10">

        {/* LEFT COLUMN: Photos */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Main Photo Card */}
          <div className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9] flex flex-col items-center text-center relative overflow-hidden">
            {/* Subtle card top gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4B2471] via-[#5D3289] to-[#7B52AB]"></div>

            <div className="relative mb-5 mt-4">
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#5D3289] to-[#9b6bcc] p-[3px] shadow-lg shadow-[#5D3289]/20">
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white">
                  <img
                    src={selectedImg ? URL.createObjectURL(selectedImg) : (authUser?.avatar || assets.logo)}
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>
              </div>
              <label htmlFor="avatar" className="absolute bottom-1 right-2 bg-[#5D3289] p-2.5 rounded-full cursor-pointer shadow-md border-[3px] border-white hover:scale-110 transition-transform hover:bg-[#4B2471]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <input type="file" id="avatar" hidden onChange={(e) => setSelectedImg(e.target.files[0])} />
              </label>
            </div>

            <h3 className="text-xl font-bold text-gray-900 tracking-tight">Main Photo</h3>
            <p className="text-gray-400 text-xs font-medium mb-6 mt-1">This is the first photo people will see</p>
            <label htmlFor="avatar" className="w-full py-3.5 bg-gray-50 text-gray-600 border border-gray-100 rounded-2xl font-bold text-sm cursor-pointer hover:bg-purple-50 hover:text-[#5D3289] hover:border-purple-100 transition-all">
              Change Photo
            </label>
          </div>

          {/* Photo Gallery Card */}
          <div className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Photo Gallery</h3>
              <span className="bg-[#F8F5FB] border border-[#EAE2F3] text-[#5D3289] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                {imageGallery.length}/6 Slots
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {imageGallery.map((img, i) => (
                <div key={i} className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-pointer group border border-gray-100">
                  <img
                    src={img.src || img}
                    onClick={() => setIndex(i)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={`Gallery ${i}`}
                  />
                  {/* Delete Button */}
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-1.5 right-1.5 bg-black/50 backdrop-blur-md text-white w-6 h-6 flex items-center justify-center rounded-full text-xs opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all duration-200 cursor-pointer"
                    type="button"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              ))}

              <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={imageGallery.map(img => ({
                  src: typeof img === "string" ? img : img.src
                }))}
              />

              {imageGallery.length < 6 && (
                <label className="w-full aspect-square flex flex-col items-center justify-center border-2 border-dashed border-[#EAE2F3] rounded-2xl cursor-pointer text-[#5D3289]/50 hover:bg-[#F8F5FB] hover:border-[#5D3289]/40 transition-colors group">
                  <span className="text-2xl font-light group-hover:scale-110 transition-transform">+</span>
                  <input type="file" id="image" hidden onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setImageGallery(prev => [...prev, { src: reader.result }]);
                      };
                      reader.readAsDataURL(file);
                    }
                  }} />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Personal Info */}
        <div className="flex-[1.4] bg-white p-8 md:p-10 rounded-[40px] shadow-[0_8px_30px_-12px_rgba(93,50,137,0.08)] border border-[#F4F0F9] flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight border-b border-gray-50 pb-4">Personal Information</h3>

          <div className="space-y-6">

            {/* Display Name */}
            <div className="group">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">
                Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50/70 p-4 rounded-xl outline-none border border-gray-100 focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 text-sm font-medium text-gray-800 transition-all"
              />
            </div>

            {/* About Me */}
            <div className="group">
              <div className="flex justify-between items-end mb-1.5 ml-1">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] group-focus-within:text-[#5D3289] transition-colors">
                  About Me
                </label>
                <span className="text-gray-400 text-[10px] font-bold tracking-wide">{bio.length}/500</span>
              </div>
              <textarea
                rows={5}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-gray-50/70 p-4 rounded-xl outline-none border border-gray-100 focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 text-sm font-medium text-gray-800 resize-none transition-all placeholder:text-gray-300"
                placeholder="Write something unique about yourself..."
                maxLength={500}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Instagram */}
              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">
                  Instagram
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">@</span>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="w-full bg-gray-50/70 py-4 pl-10 pr-4 rounded-xl outline-none border border-gray-100 focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 text-sm font-medium text-gray-800 transition-all placeholder:text-gray-300"
                    placeholder="username"
                  />
                </div>
              </div>

              {/* Facebook */}
              <div className="group">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">
                  Facebook
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                  </span>
                  <input
                    type="text"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    className="w-full bg-gray-50/70 py-4 pl-10 pr-4 rounded-xl outline-none border border-gray-100 focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 text-sm font-medium text-gray-800 transition-all placeholder:text-gray-300"
                    placeholder="Profile link"
                  />
                </div>
              </div>
            </div>

            {/* Set Mood */}
            <div className="group">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5 ml-1 group-focus-within:text-[#5D3289] transition-colors">
                Set Mood
              </label>
              <div className="relative">
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full bg-gray-50/70 border border-gray-100 rounded-xl p-4 pr-10 text-sm font-medium text-gray-800 appearance-none outline-none focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 cursor-pointer transition-all"
                >
                  <option value="Low Energy">Low Energy 🔋</option>
                  <option value="Open to Chat">Open to Chat 💬</option>
                  <option value="Quiet Mode">Quiet Mode 🤫</option>
                  <option value="Processing">Processing 🌀</option>
                  <option value="Social & Active">Social & Active ✨</option>
                </select>
                {/* Arrow Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2.5 ml-1">
                Interests & Vibes
              </label>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item, index) => (
                  item.trim() && (
                    <div key={index} className="bg-white border border-[#EAE2F3] text-[#5D3289] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-sm group hover:border-[#5D3289] transition-colors">
                      {item}
                      <button type="button" onClick={() => removeInteresets(index)} className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors ml-1 cursor-pointer">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                  )
                ))}

                {!interestsButton ? (
                  <button
                    type="button"
                    onClick={() => setInterestsButton(true)}
                    className="border-2 border-dashed border-gray-200 text-gray-400 hover:text-[#5D3289] hover:border-[#5D3289]/40 hover:bg-[#F8F5FB] px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
                  >
                    + Add Interest
                  </button>
                ) : (
                  <div className="w-full mt-2 relative">
                    <input
                      type="text"
                      value={interests.join(",")}
                      onChange={(e) => setInterests(e.target.value.split(","))}
                      placeholder="e.g. Walking, Gaming (Comma separated)"
                      className="w-full bg-gray-50/70 border border-[#5D3289] rounded-xl p-4 pr-12 text-sm font-medium text-gray-800 outline-none focus:bg-white focus:ring-4 focus:ring-[#5D3289]/10 transition-all shadow-sm"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setInterestsButton(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#5D3289] text-white p-1.5 rounded-lg hover:bg-[#4B2471] transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-10 flex flex-col-reverse sm:flex-row justify-end items-center gap-4">
            <button
              onClick={() => navigate('/')}
              type="button"
              className="w-full sm:w-auto text-gray-400 font-bold hover:text-gray-800 px-6 py-3.5 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Discard Changes
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#5D3289] text-white px-10 py-3.5 rounded-2xl font-bold shadow-[0_8px_20px_-8px_rgba(93,50,137,0.5)] hover:bg-[#4B2471] hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
            >
              Save Profile
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default ProfilePage;