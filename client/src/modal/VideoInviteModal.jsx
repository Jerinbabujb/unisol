import { useContext } from "react";
import { VideoContext } from "../../context/VideoContect";

const VideoInviteModal = () => {
  const { videoInvite, acceptInvite, rejectInvite } =
    useContext(VideoContext);

  if (!videoInvite) return null;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 text-center">

        <h2 className="text-xl font-bold mb-2">
          Video Invite
        </h2>

        <p className="mb-4">
          Someone wants to watch:
        </p>

        <p className="font-semibold mb-6">
          {videoInvite.videoUrl}
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

export default VideoInviteModal;