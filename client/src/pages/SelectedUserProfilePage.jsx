import React, { useState, useContext, useEffect } from 'react';
import assets from '../assets';
import { ChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SelectedUserProfilePage = () => {
  const { selectedUser,sendRequest, requestCheck,checkReciver,checkSend,instagramPreference,
        facebookPreference  } = useContext(ChatContext);
  const{status,setStatus} = useContext(ChatContext);
  const{authUser}= useContext(AuthContext);
  const [interests] = useState(['Travel', 'Art', 'Coffee']);
  const navigate = useNavigate();

 useEffect(()=>{
  if(!selectedUser?.id)
    navigate('/');
 },[])

  const handleSendRequest = (newStatus) => {
    console.log(newStatus);
    sendRequest(newStatus);
  };
useEffect(() => {
  const check=async()=>{
    console.log("selecteduser",selectedUser)
  if (selectedUser?.id) {
    const result=await requestCheck();
    console.log("result",result);
      if(!result){
        setStatus("pending");
        }
        else{
          setStatus(result.status);
          
        }
       
    }
  }
  check();
}, [selectedUser?.id]); 
useEffect(() => {
  console.log("Updated status:", status);
}, [status]);
  return (
    selectedUser && (
      <div className="min-h-screen bg-[#FDF8F9] flex flex-col items-center py-12 px-4 font-sans">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {selectedUser.fullName}
          </h1>
        </div>

        <form className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN */}
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

              {/* Send Request Button */}
              {status==="accepted" ? (
              <button
                type="button"
                onClick={() => {
        
       
      }}
      
                className="mt-4 px-8 py-3 rounded-full bg-[#ED719E] text-white font-bold
                           hover:bg-[#d85f8a] transition-all duration-200 shadow-md"
              >
                Send Message
              </button>): status==="pending" && checkReciver===authUser.id ?(
<div className="mt-6 w-full flex flex-col gap-3 px-4">
  {/* If no request exists, show the original Send Request button */}
  {/* <button className="...">Send Request</button> */}

  {/* If there is a PENDING request from this user to YOU: */}
  <div className="flex gap-3 w-full">
    {/* Accept Button */}
    <button
      type="button"
       onClick={() => {
        setStatus('accepted');
        handleSendRequest('accepted');
        
      }}
      className="flex-1 bg-[#4CAF50] hover:bg-[#43a047] text-white py-3 rounded-2xl font-bold shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
    >
      <span>Accept</span>
    </button>

    {/* Reject Button */}
    <button
      type="button"
       onClick={() => {
         setStatus('rejected');
        handleSendRequest('rejected');
       
      }}
      className="flex-1 bg-white border-2 border-[#FF4D4D] text-[#FF4D4D] hover:bg-[#FFF5F5] py-3 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2"
    >
      <span>Decline</span>
    </button>
  </div>
  
  <p className="text-xs text-gray-400 mt-2">
    {selectedUser.fullName} sent you a connection request
  </p>
</div>
): (
  /* This handles the 'accepted' status or any other state */
  <button
                type="button"
                onClick={() => {
        handleSendRequest('pending');
        setStatus("pending");
      }}
      
                className={`mt-4 px-8 py-3 rounded-full bg-[#ED719E] text-white font-bold hover:bg-[#d85f8a] transition-all duration-200 shadow-md ${checkSend===authUser.id && "bg-gray-400 cursor-not-allowed opacity-70"}`}
              >
                Send Request
              </button>
)}
            </div>
      
            {/* Photo Gallery Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Photo Gallery
                </h3>
                <span className="bg-[#FFE5EE] text-[#ED719E] px-3 py-1 rounded-full text-xs font-bold">
                  4/6 Slots
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src={assets.pic1} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src={assets.pic2} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                  <img src={assets.pic3} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-[1.2] bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Personal Information
            </h3>

            <div className="space-y-6">
              {/* Display Name */}
              <div>
                <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">
                  Display Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={selectedUser.fullName}
                  className="w-full bg-[#F9F7F8] p-4 rounded-2xl border-none text-gray-700"
                />
              </div>

              {/* Bio */}
              <div>
                <div className="flex justify-between mb-2 ml-1">
                  <label className="text-[#9D7183] text-sm font-bold">
                    About {selectedUser.fullName}
                  </label>
                  <span className="text-gray-400 text-xs">
                    {selectedUser.bio?.length || 0}/500
                  </span>
                </div>
                <textarea
                  rows={6}
                  readOnly
                  value={selectedUser.bio || ''}
                  className="w-full bg-[#F9F7F8] p-4 rounded-2xl border-none text-gray-700 resize-none"
                />
              </div>

              <div>
                <label className="block text-[#9D7183] text-sm font-bold mb-2 ml-1">
                 Mood
                </label>
                <input
                  type="text"
                  readOnly
                  value={selectedUser.mood || "mood is not set"}
                  className="w-full bg-[#F9F7F8] p-4 rounded-2xl border-none text-gray-700"
                />
              </div>
              <div  style={{ display: "flex", gap: "10px" }}>
                {facebookPreference &&
                <a href={selectedUser.facebook} target="_blank"><FaFacebook size={30} color="#3b5998" /></a>
}
{instagramPreference &&
                <a href={selectedUser.instagram} target="_blank"><FaInstagram size={30} color="#E1306C" /></a>
}
              </div>



              {/* Interests */}
              <div>
                <label className="block text-[#9D7183] text-sm font-bold mb-4 ml-1">
                  Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <div
                      key={item}
                      className="bg-[#FFE5EE] text-[#ED719E] px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ))}
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
