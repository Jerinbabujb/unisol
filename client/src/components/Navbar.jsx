const Navbar = () => (
  <nav className="h-16 border-b border-gray-100 bg-white px-8 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold italic">M</div>
      <span className="font-bold text-xl tracking-tight">Match</span>
    </div>
    <div className="flex gap-8 text-sm font-medium text-gray-500">
      <a href="#" className="hover:text-pink-500">Discover</a>
      <a href="#" className="hover:text-pink-500">Matches</a>
      <a href="#" className="border-b-2 border-pink-500 pb-5 text-black">Messages</a>
      <a href="#" className="hover:text-pink-500">Likes</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-gray-400">🔔</button>
      <div className="w-8 h-8 rounded-full bg-pink-100 border border-pink-200 overflow-hidden">
        <img src="https://i.pravatar.cc/150?u=me" alt="User" />
      </div>
    </div>
  </nav>
);

export default Navbar;