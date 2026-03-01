import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";

const MusicInviteModal = () => {
  const { musicInvite, acceptInvite, rejectInvite } = useContext(MusicContext);

  if (!musicInvite) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 text-center">

        <h2 className="text-xl font-bold mb-2">
          🎵 Music Invite
        </h2>

        <p className="mb-4">
          {musicInvite.name || "Someone"} wants to listen to:
        </p>

        <p className="font-semibold mb-6">
          {musicInvite.songName}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={rejectInvite}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reject
          </button>

          <button
            onClick={acceptInvite}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
};

export default MusicInviteModal;