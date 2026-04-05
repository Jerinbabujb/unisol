import { useContext, useEffect } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { useState } from "react";

const GroupsLists = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('public');
  const { globalRoomLists, globalRoom,globalRoomJoin,joinedRooms,joinRoom, globalRoomMembers } = useContext(ChatContext);
    const {authUser} = useContext(AuthContext);

  useEffect(() => {
    globalRoomLists();
  }, []);

  const isJoind=(roomName)=>{
    return joinedRooms?.some(room => room.roomName === roomName);
  }

  const handleBack = () => {
    navigate("/");
  };

  const joiningRoom=(room,id)=>{
    joinRoom(id);
    console.log("roomid",id);
    globalRoomJoin(room);
    navigate(`/global-room/${room}`);
  }

  return (
  <div className="min-h-screen bg-[#f6f7fb] flex">

    {/* Sidebar (Desktop Only) */}
    <div className="hidden md:flex flex-col w-64 bg-white border-r p-6">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={handleBack}
          className="flex items-center justify-center min-w-[32px] h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition shadow-sm"
        >
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h1 className="text-xl font-bold text-pink-600 truncate">
          {authUser.fullName}
        </h1>
      </div>

      {/* Create Room (Desktop) */}
      {activeTab === "private" && (
        <button className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl cursor-pointer">
          + Create Room
        </button>
      )}
    </div>

    {/* Main Content */}
    <div className="flex-1">

      {/* Top Header (Mobile + Desktop) */}
      <div className="bg-white border-b px-4 py-3 flex flex-col gap-3 sticky top-0 z-20 md:px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          
          {/* Back Button */}
          <button onClick={handleBack} className="p-2 md:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Username (Mobile) */}
          <h1 className="text-lg font-bold text-pink-600 md:hidden truncate">
            {authUser.fullName}
          </h1>

          <div className="w-6 md:hidden"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("public")}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "public"
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Public
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "private"
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Private
            </button>
          </div>
        </div>

        {/* Create Room (Mobile) */}
        {activeTab === "private" && (
          <button className="md:hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl text-sm font-semibold">
            + Create Room
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 md:p-6">

        {/* Search */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search for communities or chat groups..."
            className="w-full px-4 py-2 rounded-full border bg-white shadow-sm outline-none"
          />
        </div>

        {/* PUBLIC */}
        {activeTab === "public" ? (
          <>
            {/* Section Title */}
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Public Communities
              </h2>
              <p className="text-gray-500 text-sm">
                Join large interest-based groups and meet new people.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {globalRoom.map((room, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* Banner */}
                  <div className="h-28 md:h-32 w-full bg-gradient-to-r from-pink-500 to-purple-500 overflow-hidden">
                    {room.roomImage ? (
                      <img
                        src={room.roomImage}
                        alt={room.roomName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-lg font-bold">
                        {room.roomName}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">
                        {room.roomName}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-pink-100 text-pink-600 rounded-full">
                        ACTIVE
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      Join the conversation and connect with people in{" "}
                      {room.roomName}.
                    </p>

                    {/* Members + Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full border"></div>
                        <div className="w-6 h-6 bg-gray-400 rounded-full border"></div>
                        <div className="w-6 h-6 bg-gray-500 rounded-full border"></div>
                      </div>

                      {isJoind(room.roomName) ? (
                        <button
                          onClick={() => {
                            joinRoom(room.id);
                            setTimeout(() => {
                              navigate(`/global-room/${room.roomName}`);
                            }, 500);
                          }}
                          className="px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold"
                        >
                          Message
                        </button>
                      ) : (
                        <button
                          onClick={() => joiningRoom(room.roomName, room.id)}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold"
                        >
                          Join
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* PRIVATE */
          <div className="text-center py-20">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Private Groups
            </h2>
            <p className="text-gray-500">
              Your private conversations and invite-only groups appear here.
            </p>
          </div>
        )}

        {/* Empty */}
        {globalRoom.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No rooms available
          </div>
        )}
      </div>
    </div>

    {/* Floating Create Room Button (Optional Best UX) */}
    {activeTab === "private" && (
      <button className="fixed bottom-6 right-6 md:hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-lg">
        + Room
      </button>
    )}
  </div>
);
};

export default GroupsLists;