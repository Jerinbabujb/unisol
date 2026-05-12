import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import assets from "../assets";

const Navbar = () => {
  const { authUser } = useContext(AuthContext);

  return authUser && (
    <nav className="h-[72px] border-b border-[#F4F0F9] bg-white/85 backdrop-blur-xl px-4 md:px-8 flex items-center justify-between z-40 sticky top-0 transition-all">

      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#F8F5FB] p-1.5 transition-transform hover:scale-105">
          <img src={assets.logo} alt="Unisoul logo" className="w-full h-full object-contain" />
        </a>
        <a href="/">
          <span className="font-black text-xl tracking-tight text-[#5D3289] hover:opacity-80 transition-opacity">
            UNISOUL
          </span>
        </a>
      </div>

      {/* Navigation Links - Hidden on Mobile */}
      <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-400 h-full">
        <a href="/" className="flex items-center h-full hover:text-[#5D3289] transition-colors">
          Discover
        </a>
        <a href="/global-room-lists" className="flex items-center h-full hover:text-[#5D3289] transition-colors">
          Chat Room
        </a>
        {/* Active State Example */}
        <a href="#" className="flex items-center h-full border-b-2 border-[#5D3289] text-[#5D3289]">
          Messages
        </a>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-4">

        {/* Notification Bell */}
        <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-purple-50 hover:text-[#5D3289] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          {/* Notification Dot */}
          <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#F8F5FB] border-2 border-white shadow-[0_2px_8px_-2px_rgba(93,50,137,0.15)] overflow-hidden cursor-pointer hover:border-[#5D3289]/20 transition-colors">
          <img
            src={authUser.avatar || assets.logo}
            alt={authUser.fullName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;