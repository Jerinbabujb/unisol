import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import MessageList from '../components/chat/MessageList';
import ProfileSidebar from '../components/chat/ProfileSidebar';
import { ChatContext } from "../../context/ChatContext";
import ChatWindow from '../components/chat/ChatWindow';

const ChatPage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900 overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar: Hidden on mobile when a chat is open */}
        <aside className={`${selectedUser ? 'hidden md:flex' : 'flex'} w-full md:w-80 flex-shrink-0 border-r border-gray-100 flex-col bg-white`}>
          <MessageList />
        </aside>

        {/* Center Chat: Hidden on mobile when NO chat is open */}
        <main className={`${!selectedUser ? 'hidden md:flex' : 'flex'} flex-1 bg-[#F5F7FA] flex-col overflow-hidden`}>
          <ChatWindow />
        </main>

        {/* Right Sidebar: Desktop Only (Large screens) */}
        <aside className="hidden lg:flex w-80 flex-shrink-0 border-l border-gray-100 p-6 overflow-y-auto bg-white">
          <ProfileSidebar />
        </aside>
      </div>
    </div>
  );
};

export default ChatPage;