import React from 'react';

const FeedContainer = ({ onOpenMenu }) => {
  const topPicks = [
    { id: 1, name: 'Sarah', age: 24, bio: 'Passionate traveller...', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', verified: true },
    { id: 2, name: 'Marcus', age: 29, bio: 'Coffee lover & developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', online: true },
    { id: 3, name: 'Chloe', age: 23, bio: 'Yoga and Art enthusiast', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', verified: true },
    { id: 4, name: 'David', age: 31, bio: 'Architect & Music lover', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  ];

  return (
    <div className="flex flex-col bg-white min-h-full">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-5 sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-3 flex-1">
          {/* Hamburger only visible on mobile */}
          <button onClick={onOpenMenu} className="lg:hidden p-2 bg-gray-100 rounded-xl text-xl">☰</button>
          
          <div className="relative w-full max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search matches..." 
              className="w-full rounded-2xl bg-gray-100 py-2.5 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-pink-200 transition-all"
            />
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          <button className="hidden sm:flex rounded-2xl bg-gray-100 p-2.5 text-gray-500">🔔</button>
          <button className="rounded-2xl bg-gray-100 p-2.5 text-gray-500 hover:bg-pink-50 hover:text-pink-500 transition-colors">⚙️</button>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 md:px-8 py-4">
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Top Picks</h2>
        <p className="text-sm text-gray-400 mt-1">Discover people who share your interests</p>
        
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['Nearby', 'Online Now', 'Verified', 'New'].map((filter, i) => (
            <button key={i} className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold transition-all ${i === 0 ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-8">
        {topPicks.map((user) => (
          <div key={user.id} className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98]">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={user.img} alt={user.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 text-white">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-lg font-bold">{user.name}, {user.age}</h3>
                {user.verified && <span className="bg-blue-500 p-0.5 rounded-full text-[8px]">✔</span>}
                {user.online && <span className="h-2 w-2 rounded-full bg-green-500 ring-4 ring-green-500/20"></span>}
              </div>
              <p className="text-xs text-gray-300 line-clamp-1">{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedContainer;