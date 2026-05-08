import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChatContext } from "../../../../context/ChatContext";

const PrivateRoomSideBar = () => {
  const { roomName } = useParams();
  const {
    privateRoomMembers,
    privateMembers,
    privateRoomInvite,
    privateRoom,
  } = useContext(ChatContext);

  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    privateRoomInvite();
    privateRoomMembers(roomName);
  }, [roomName]);

  const handleBack = () => {
    navigate(`/private-room/${roomName}`);
  };

  const inviteLink = privateRoom?.inviteToken
    ? `${window.location.origin}/join-private-room/${privateRoom.inviteToken}`
    : "";

  const handleCopy = () => {
    if (!inviteLink) return;
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#eef2ff] to-[#f8fafc]">

      {/* Header */}
      <div className="px-4 py-4 md:px-6 flex items-center gap-3 border-b bg-white shadow-sm sticky top-0 z-20">
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

        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800 text-sm md:text-base">
            {roomName}
          </h3>
          <span className="text-xs text-gray-400">
            {privateMembers.length} members
          </span>
        </div>
      </div>

      {/* Invite Link Card */}
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-md border flex flex-col gap-3">
          <span className="text-sm font-semibold text-gray-700">
            Invite Link
          </span>

          <div className="flex items-center gap-2 bg-gray-50 border rounded-xl px-3 py-2">
            <input
              type="text"
              value={inviteLink || "Generating link..."}
              readOnly
              className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
            />

            <button
              onClick={handleCopy}
              disabled={!inviteLink}
              className={`px-3 py-1.5 text-xs rounded-lg transition ${copied
                ? "bg-green-500 text-white"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
                }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* Members List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        {privateMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="relative">
              <img
                src={member.avatar || "https://via.placeholder.com/40"}
                alt=""
                className="w-11 h-11 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {member.fullName}
              </span>
              <span className="text-xs text-gray-400">
                Active now
              </span>
            </div>
          </div>
        ))}

        {privateMembers.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-10">
            No members found
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateRoomSideBar;