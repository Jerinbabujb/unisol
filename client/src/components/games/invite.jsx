const Invite = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 text-center max-w-sm w-full">
        
        <p className="text-gray-700 text-lg font-medium">
          Someone invited you to play Emoji Charades 
        </p>

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Accept
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Reject
          </button>
        </div>

      </div>
    </div>
  );
};

export default Invite;