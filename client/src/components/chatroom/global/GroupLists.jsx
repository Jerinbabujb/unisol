import { useContext, useEffect } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import { useNavigate } from "react-router-dom";

const GroupsLists = () => {
  const navigate = useNavigate();

  const { globalRoomLists, globalRoom,globalRoomJoin } = useContext(ChatContext);

  useEffect(() => {
    globalRoomLists();
  }, []); // ✅ FIXED (removed globalRoom dependency)

  const handleBack = () => {
    navigate("/");
  };

  const joinRoom=(room)=>{
    globalRoomJoin(room);
    navigate(`/global-room/${room}`);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      
      {/* Header */}
      <div className="w-full max-w-5xl relative mb-6 flex items-center justify-center">
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-0 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
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

        <h1 className="text-2xl font-bold text-gray-800">
          🌍 Global Rooms
        </h1>
      </div>

      {/* Rooms List */}
      <div className="w-full max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {globalRoom.length > 0 ? (
          globalRoom.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              {/* Room Avatar */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {room.roomName?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {room.roomName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Public Group
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 line-clamp-2">
                Join the conversation and connect with people in{" "}
                {room.roomName}.
              </p>

              {/* Join Button */}
              <button
                className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition cursor-pointer"
                onClick={()=>joinRoom(room.roomName)}
              >
                Join Room
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No rooms available
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupsLists;