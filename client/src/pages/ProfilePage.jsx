import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import assets from '../assets';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open,setOpen]= useState(false);
  // States
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authUser?.fullName || "");
  const [bio, setBio] = useState(authUser?.bio || "");
  const [mood,setMood] = useState(authUser?.mood ||"");
  const [instagram, setInstagram]= useState(authUser?.instagram||'');
  const [facebook,setFacebook]= useState(authUser?.facebook||'');
  const [interests, setInterests] = useState(authUser?.interest||[]);
  const [index, setIndex] = useState(-1);
  const [interestsButton,setInterestsButton]= useState(false);
const [imageGallery, setImageGallery] = useState(
  authUser?.images || []
);
  const handleBack=()=>{
    navigate("/");
  }

  useEffect(()=>{
    console.log("the imageGallery is ", imageGallery);
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
//     if(imageGallery){
//       const convertedImages = await Promise.all(
//     imageGallery.map(img => {
//       if (!img.file) return img.src;

//       return new Promise(resolve => {
//         const reader = new FileReader();
//         reader.readAsDataURL(img.file);
//         reader.onload = () => resolve(reader.result);
//       });
//     })
//   );
// }
    let profileData = { fullName: name, bio, mood, instagram, facebook, interest:interests, images:imageGallery };

    if (selectedImg) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImg);
      reader.onload = async () => {
        profileData.avatar = reader.result;
        await updateProfile(profileData);
        navigate("/");
      };
    }
   else {
      await updateProfile(profileData);
      navigate("/");
    }
  };
  const removeImage = (index) => {
  setImageGallery(prev => prev.filter((_, i) => i !== index));
};
  // const images = [
  //   { src: assets.pic1 },
  //   { src: assets.pic2 },
  //   { src: assets.pic3 },
  // ];

  return (
    <div className="min-h-screen bg-[#FDF8F9] flex flex-col items-center py-12 px-4 font-sans">
      {/* Header */}
      
         {/* Header */}
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

  {/* Title */}
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-2">
      Edit Your Profile
    </h1>
    <p className="text-gray-500 text-lg">
      Make your first impression count
    </p>
  </div>

      <form onSubmit={handleSubmit} className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        
        {/* LEFT COLUMN: Photos */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Main Photo Card */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-40 h-40 rounded-full border-4 border-[#FFB800] p-1">
                <img 
                  src={selectedImg ? URL.createObjectURL(selectedImg) : (authUser?.avatar || assets.logo)} 
                  className="w-full h-full rounded-full object-cover"
                  alt="Profile"
                />
              </div>
              <label htmlFor="avatar" className="absolute bottom-2 right-2 bg-[#ED719E] p-2 rounded-full cursor-pointer shadow-md border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <input type="file" id="avatar" hidden onChange={(e) => setSelectedImg(e.target.files[0])} />
              </label>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Main Profile Photo</h3>
            <p className="text-gray-400 text-sm mb-6">This is the first photo people will see</p>
            <label htmlFor="avatar" className="w-full py-3 bg-[#F3F0F1] text-gray-700 rounded-2xl font-semibold cursor-pointer hover:bg-gray-200 transition-colors">
              Change Photo
            </label>
          </div>

          {/* Photo Gallery Card */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Photo Gallery</h3>
              <span className="bg-[#FFE5EE] text-[#ED719E] px-3 py-1 rounded-full text-xs font-bold">{imageGallery.length}/6 Slots</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
      {imageGallery.map((img, i) => (
    <div key={i} className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden cursor-pointer">
      <img 
        src={img.src || img} 
        onClick={() => setIndex(i)} 
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
      {/* Delete Button */}
      <button
        onClick={() => removeImage(i)}
        className="absolute top-2 right-2 bg-black/60 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm hover:bg-black/80 transition"
      >
        ×
      </button>
    </div>
  ))}
      

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={imageGallery}
      />
    
    {imageGallery.length<6 &&
<label className="w-25 aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 rounded-3xl cursor-pointer text-gray-400 hover:bg-gray-50">

      +                
                <input type="file" id="image" hidden onChange={(e) => {
 const file = e.target.files[0];

const reader = new FileReader();

reader.onload = () => {
  setImageGallery(prev => [
    ...prev,
    { src: reader.result }
  ]);
};

reader.readAsDataURL(file);
}} />
              </label>
}
</div>
          </div>
        </div>
        <div>
              
              </div>

        {/* RIGHT COLUMN: Personal Info */}
        <div className="flex-[1.2] bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">Display Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F9F7F8] p-4 rounded-2xl focus:outline-none border-none text-gray-700"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="text-[#9D7183] text-sm font-bold">About Me</label>
                <span className="text-gray-400 text-xs">{bio.length}/500</span>
              </div>
              <textarea 
                rows={6}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-[#F9F7F8] p-4 rounded-2xl focus:outline-none border-none text-gray-700 resize-none"
                placeholder={"Write something about yourself..."}
              />
            </div>
             <div>
              <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">Instagram</label>
              <input 
                type="text" 
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full bg-[#F9F7F8] p-4 rounded-2xl focus:outline-none border-none text-gray-700"
              />
            </div>
             <div>
              <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">Facebook</label>
              <input 
                type="text" 
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="w-full bg-[#F9F7F8] p-4 rounded-2xl focus:outline-none border-none text-gray-700"
              />
            </div>
             <div className="mb-6">
  <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">Set Mood</label>
  <div className="relative">
    <select
      value={mood}
      onChange={(e) => setMood(e.target.value)}
      className="w-full bg-[#F9F7F8] border-none rounded-2xl p-4 pr-10 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#ED719E] focus:ring-opacity-30 cursor-pointer"
    >
      <option value="Low Energy">Low Energy</option>
      <option value="Open to Chat">Open to Chat</option>
      <option value="Quiet Mode">Quiet Mode</option>
      <option value="Processing">Processing</option>
      <option value="Social & Active">Social & Active</option>
    </select>
    {/* Arrow Icon */}
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
</div>

            <div>
              <label className="block text-[#9D7183] text-sm font-bold mb-4 ml-1">Interests</label>
              <div className="flex flex-wrap gap-2">

                {interests.map(item => (
                  <div key={index} className="bg-[#FFE5EE] text-[#ED719E] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                    {item} <span className="cursor-pointer text-lg">×</span>
                  </div>
                ))}
                <button type="button" onClick={()=>setInterestsButton(true)} className={`${interestsButton? 'hidden':'block'} border-2 border-dashed border-gray-300 text-gray-400 px-4 py-2 rounded-full text-sm font-semibold`}>
                  + Add Interest
                </button>
                {interestsButton &&
                  <input label="Intrests" type="textarea" name="interest" value={interests} onChange={(e)=>setInterests(e.target.value.split(","))} placeholder="Walking, Gaming" className="w-full bg-[#F9F7F8] border-none rounded-2xl p-4 pr-10 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#ED719E] focus:ring-opacity-30 cursor-pointer"/>
}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10 flex justify-end items-center gap-6">
            <button onClick={()=>navigate('/')} type="button" className="text-gray-500 font-bold hover:text-gray-700">Discard Changes</button>
            <button type="submit" className="bg-[#ED719E] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-[#d65a88] transition-all">
              Save Profile
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default ProfilePage;