import React, { useState, useContext, useEffect } from 'react';

import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';

const SelectedUserProfilePage = () => {
  const {selectedUser} = useContext(ChatContext);
  const [interests, setInterests] = useState(['Travel', 'Art', 'Coffee']);
  const navigate= useNavigate();
  useEffect(()=>{
    if(!selectedUser)
      return navigate('/messages')
  },[])

  return  selectedUser &&(
    <div className="min-h-screen bg-[#FDF8F9] flex flex-col items-center py-12 px-4 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{selectedUser.fullName}</h1>
      </div>

      <form  className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        
        {/* LEFT COLUMN: Photos */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Main Photo Card */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-40 h-40 rounded-full border-4 border-[#FFB800] p-1">
                <img 
                  src={selectedUser.avatar || assets.logo} 
                  className="w-full h-full rounded-full object-cover"
                  alt="Profile"
                />
              </div>
             
            </div>
            
          </div>

          {/* Photo Gallery Card */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Photo Gallery</h3>
              <span className="bg-[#FFE5EE] text-[#ED719E] px-3 py-1 rounded-full text-xs font-bold">4/6 Slots</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
               {/* Placeholders for Gallery */}
               <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden"><img src={assets.pic1} className="w-full h-full object-cover"/></div>
               <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden"><img src={assets.pic2} className="w-full h-full object-cover"/></div>
               <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden"><img src={assets.pic3} className="w-full h-full object-cover"/></div>
              
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Personal Info */}
        <div className="flex-[1.2] bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">Display Name</label>
              <input 
                type="text" 
                readOnly
                value={selectedUser.fullName}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F9F7F8] p-4 rounded-2xl focus:outline-none border-none text-gray-700"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="text-[#9D7183] text-sm font-bold">About {selectedUser.fullName}</label>
                <span className="text-gray-400 text-xs">{selectedUser.bio.length}/500</span>
              </div>
              <textarea 
                rows={6}
                readOnly
                value={selectedUser.bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-[#F9F7F8] p-4 rounded-2xl focus:outline-none border-none text-gray-700 resize-none"
                placeholder="Write something about yourself..."
              />
            </div>

            <div>
              <label className="block text-[#9D7183] text-sm font-bold mb-4 ml-1">Interests</label>
              <div className="flex flex-wrap gap-2">
                {interests.map(item => (
                  <div key={item} className="bg-[#FFE5EE] text-[#ED719E] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                    {item} 
                  </div>
                ))}
              
              </div>
            </div>
          </div>

         
        </div>

      </form>
    </div>
  );
};

export default SelectedUserProfilePage;