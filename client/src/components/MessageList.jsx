import { useContext, useEffect } from "react";
import { ChatContext } from "../../context/ChatContext";
import assets from "../assets";

const MessageList = () => {
  const { users, getUsers, selectedUser, setSelectedUser, unseenMessages, setUnseenMessages } = useContext(ChatContext);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-1">Messages</h2>
        <p className="text-gray-400 text-xs md:text-sm mb-4">Recent conversations</p>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search matches" 
            className="w-full bg-gray-100 rounded-full py-2 px-10 text-sm outline-none focus:ring-1 ring-pink-200"
          />
          <span className="absolute left-4 top-2 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex-1 overflow-y-auto">
  {users?.map((user) => (
   <div
  key={user.id}
  className={`relative flex items-center gap-4 p-4 cursor-pointer transition-colors ${
    selectedUser?.id === user.id ? 'bg-pink-50' : 'hover:bg-gray-50'
  }`}
  onClick={() => {
    setSelectedUser(user);
    setUnseenMessages(prev => ({ ...prev, [user.id]: 0 }));
  }}
>
  <img
    src={user.avatar || assets.logo}
    className="w-12 h-12 rounded-full object-cover border border-gray-100"
    alt={user.fullName}
  />
  <div className="flex-1 min-w-0">
    <div className="flex justify-between items-baseline">
      <span className="font-bold text-sm truncate">{user.fullName}</span>
      
      {unseenMessages[user.id] > 0 && (
        <p className='absolute top-2 right-2 text-xs font-bold h-5 w-5 flex justify-center items-center rounded-full bg-violet-500 text-white'>
          {unseenMessages[user.id]}
        </p>
      )}

      <span className="text-[10px] text-gray-400">10:45 AM</span>
    </div>
    <p className="text-xs truncate text-gray-500">
      {user.bio || "Start a conversation"}
    </p>
  </div>
</div>

  ))}
</div>

      </div>
    </div>
  );
};

export default MessageList;