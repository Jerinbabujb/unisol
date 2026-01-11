const ProfileSidebar = () => (
  <div className="flex flex-col items-center">
    <div className="relative mb-6">
      <img 
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" 
        className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl shadow-pink-100" 
      />
      <div className="absolute -bottom-2 -right-2 bg-pink-500 p-2 rounded-full border-4 border-white">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
    </div>

    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold">Emma, 24</h2>
      <p className="text-gray-400 text-sm">Graphic Designer • London</p>
    </div>

    <div className="w-full space-y-3 mb-8">
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
        <span className="text-pink-500">📍</span>
        <span className="text-sm font-medium">2 miles away</span>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
        <span className="text-pink-500">🌸</span>
        <span className="text-sm font-medium">Hiking, Yoga, Painting</span>
      </div>
    </div>

    <div className="w-full mt-auto flex flex-col gap-3">
      <button className="w-full bg-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition">
        View Full Profile
      </button>
      <button className="w-full border border-gray-200 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 transition">
        Block or Report
      </button>
    </div>
  </div>
);

export default ProfileSidebar;