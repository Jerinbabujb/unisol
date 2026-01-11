const MessageList = () => {
  const chats = [
    { name: 'Emma', msg: 'Hey! How was your weekend?', time: '2m ago', active: true, img: 'https://i.pravatar.cc/150?u=emma' },
    { name: 'Liam', msg: 'That sounds like an amazing trip!', time: '1h ago', img: 'https://i.pravatar.cc/150?u=liam' },
    { name: 'Sophia', msg: 'Haha exactly! Same here.', time: '3h ago', img: 'https://i.pravatar.cc/150?u=sophia' },
    { name: 'Noah', msg: 'Are you free for coffee on Friday?', time: 'Yesterday', img: 'https://i.pravatar.cc/150?u=noah' },
    { name: 'Olivia', msg: 'See you then!', time: 'Tue', img: 'https://i.pravatar.cc/150?u=olivia' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-1">Messages</h2>
        <p className="text-gray-400 text-sm mb-4">5 unread conversations</p>
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
        {chats.map((chat, i) => (
          <div key={i} className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 ${chat.active ? 'bg-pink-50' : ''}`}>
            <img src={chat.img} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-bold text-sm">{chat.name}</span>
                <span className="text-[10px] text-gray-400">{chat.time}</span>
              </div>
              <p className={`text-xs truncate ${chat.active ? 'text-pink-500 font-medium' : 'text-gray-500'}`}>{chat.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;