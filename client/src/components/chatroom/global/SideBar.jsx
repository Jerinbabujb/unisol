import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChatContext } from "../../../../context/ChatContext";
import { useEffect } from "react";
import { useState } from "react";

const GlobalSideBar=()=>{
    const {room}=useParams();
    const{globalRoomMembers,members}= useContext(ChatContext);
      const navigate=useNavigate();
    console.log("room name is ",room);
    useEffect(()=>{
        globalRoomMembers(room);
    },[room]);
const handleBack = () => {
  navigate(`/global-room/${room}`);
};
    return (
  <div className="h-full flex flex-col bg-[#f4f6fb]">

    {/* Header */}
   <div className="px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 border-b bg-white shadow-sm sticky top-0 z-20">

  {/* Back Button */}
  <button
    onClick={handleBack}
    className="p-2 rounded-full hover:bg-gray-100 transition active:scale-95"
  >
    <svg
      className="w-5 h-5 text-gray-700"
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

  {/* Title */}
  <div className="flex flex-col">
    <h3 className="font-semibold text-gray-800 text-sm md:text-base">
      {room}
    </h3>
    <span className="text-xs text-gray-400">
      {members.length} members
    </span>
  </div>
</div>
    {/* Members List */}
    <div className="flex-1 overflow-y-auto p-4 space-y-3">

      {members.map((member, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
        >
          {/* Avatar */}
          <div className="relative">
            <img
              src={member.avatar || "https://via.placeholder.com/40"}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Online indicator (optional) */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">
              {member.fullName}
            </span>
            <span className="text-xs text-gray-400">
              Active now
            </span>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {members.length === 0 && (
        <div className="text-center text-gray-400 text-sm mt-10">
          No members found
        </div>
      )}
    </div>
  </div>
);
}

export default GlobalSideBar;