import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import assets from "../assets";

const Navbar = () => {
  const { authUser } = useContext(AuthContext);

  return authUser && (
    <nav className="h-16 border-b border-gray-100 bg-white px-4 md:px-8 flex items-center justify-between z-10">
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="logo" className="w-7 h-7" />
        <span className="font-bold text-lg md:text-xl tracking-tight">UNISOUL</span>
      </div>

      {/* Navigation Links - Hidden on Mobile */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        <a href="#" className="hover:text-pink-500">Discover</a>
        <a href="#" className="hover:text-pink-500">Matches</a>
        <a href="#" className="border-b-2 border-pink-500 pb-5 text-black">Messages</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-400">🔔</button>
        <div className="w-8 h-8 rounded-full bg-pink-100 border border-pink-200 overflow-hidden">
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