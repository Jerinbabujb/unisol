import React from 'react';
import Navbar from '../components/Navbar';
import MessageList from '../components/MessageList';
import ChatWindow from '../components/ChatWindow';
import ProfileSidebar from '../components/ProfileSidebar';

const ChatPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900">
      {/* Top Navigation */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Message List */}
        <aside className="w-80 flex-shrink-0 border-r border-gray-100 flex flex-col">
          <MessageList />
        </aside>

        {/* Center: Chat Window */}
        <main className="flex-1 bg-[#F5F7FA] flex flex-col">
          <ChatWindow />
        </main>

        {/* Right Sidebar: Profile Info */}
        <aside className="w-80 flex-shrink-0 border-l border-gray-100 p-6 overflow-y-auto">
          <ProfileSidebar />
        </aside>
      </div>
    </div>
  );
};

export default ChatPage;