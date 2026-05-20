import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";
import assets from "../../assets";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Switch from "react-switch";


const ProfileSidebar = ({ setOpenProfile }) => {
  const { selectedUser, privacyCreate, instagramPreference,
    facebookPreference,
    facebookToggle,
    instagramToggle,
    setFacebookToggle,
    setInstagramToggle, blockingUser } = useContext(ChatContext);
  const { authUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const [PictureStatus, setPictureStatus] = useState(true);


  const navigate = useNavigate();

  const profilegotopage = () => {
    navigate("/user-profile");
    setOpenProfile(false);
  };
  const handleBlock = async () => {
    console.log("selectedUser.id", selectedUser.id);
    await blockingUser(selectedUser.id);
  }
  useEffect(() => {
    console.log(facebookPreference, instagramPreference);
  }, [])

  if (!selectedUser) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 bg-white 
        flex flex-col 
        lg:relative lg:w-80 lg:border-l lg:border-gray-100 lg:p-6
        overflow-y-auto
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setOpenProfile(false)}
        className="
          absolute top-0 right-0 
          bg-white border border-gray-200 
          rounded-full p-2 
          shadow-md 
          hover:bg-gray-100 
          transition cursor-pointer
        "
      >
        <FiX size={20} />
      </button>
      <div className="flex border-b mb-6 mt-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 py-3 font-semibold transition ${activeTab === "profile"
            ? "border-b-2 border-pink-500 text-pink-500"
            : "text-gray-400"
            }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("privacy")}
          className={`flex-1 py-3 font-semibold transition ${activeTab === "privacy"
            ? "border-b-2 border-pink-500 text-pink-500"
            : "text-gray-400"
            }`}
        >
          Let Them See
        </button>
      </div>
      {/* Content Wrapper */}
      {activeTab === "profile" && (
        <div className="flex flex-col items-center top-10 pt-12 lg:pt-0 h-full lg:p-0 p-[20px]">

          {/* Profile Image */}
          {PictureStatus &&
            <div className="relative mb-6 w-full">
              <img
                src={selectedUser.avatar || assets.logo}
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-xl shadow-pink-100"
                alt=""
              />
              <div className="absolute -bottom-2 -right-2 bg-pink-500 p-2 rounded-full border-4 border-white">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          }

          {/* Name & Bio */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedUser.fullName}
            </h2>
            <p className="text-gray-400 text-sm">
              {selectedUser.bio}
            </p>
          </div>

          {/* Info Boxes */}
          <div className="w-full space-y-3 mb-8">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span className="text-pink-500">📍</span>
              <span className="text-sm font-medium">
                2 miles away
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span className="text-pink-500">🌸</span>
              <span className="text-sm font-medium">
                Hiking, Yoga, Painting
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {facebookPreference &&
              <a href={selectedUser.facebook} target="_blank"><FaFacebook size={30} color="#3b5998" /></a>
            }
            {instagramPreference &&
              <a href={selectedUser.instagram} target="_blank"><FaInstagram size={30} color="#E1306C" /></a>
            }
          </div>
          {/* Buttons */}
          <div className="w-full mt-auto flex flex-col gap-3 pb-6 pt-6">
            <button
              onClick={profilegotopage}
              className="w-full bg-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition"
            >
              View Full Profile
            </button>
            <button onClick={handleBlock} className="w-full border border-gray-200 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 transition">
              Block or Report
            </button>
          </div>
        </div>
      )}
      {activeTab === "privacy" && (
        <div className="space-y-4 lg:p-0 p-[20px]">
          {/* Online Status */}

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border">
            <span className="text-sm font-medium">Instagram</span>
            <Switch
              checked={instagramToggle}
              onChange={(value) => {
                setInstagramToggle(value);
                privacyCreate("instagramPreference", value);
              }}
            />
          </div>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border">
            <span className="text-sm font-medium">Facebook</span>
            <Switch
              checked={facebookToggle}
              onChange={(value) => {
                console.log("New Facebook value:", value);
                setFacebookToggle(value);
                privacyCreate("facebookPreference", value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;