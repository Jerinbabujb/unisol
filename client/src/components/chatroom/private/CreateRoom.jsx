import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../../../context/ChatContext";
import { useContext } from "react";

const categories = ["Social", "Foodies", "Outdoors", "Fitness", "Creative", "Tech"];

const CreateRoom = () => {
    const [roomName, setRoomName] = useState("");
    const [description, setDescription] = useState("");
    const { createRoom } = useContext(ChatContext);
    const [selectedCategory, setSelectedCategory] = useState("Social");
    const [cover, setCover] = useState(null);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/global-room-lists");
    };
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file); // ✅ correct
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    const handleCreateRoom = async () => {
        let base64Image = "";

        if (cover?.file) {
            base64Image = await toBase64(cover.file); // ✅ FIXED
        }

        createRoom(roomName, base64Image, selectedCategory, description);
        navigate("/global-room-lists");
    };

    return (
        <div className="min-h-screen bg-[#f6f7fb] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>
                    <button onClick={handleBack} className="flex items-center gap-2 text-gray-500 mb-6">
                        <FiArrowLeft /> Back to Community
                    </button>

                    <h1 className="text-3xl font-bold mb-2">Create Your Community</h1>
                    <p className="text-gray-500 mb-8">
                        Design a space where people with similar passions can pulse together.
                    </p>

                    {/* ROOM NAME */}
                    <div className="mb-6">
                        <label className="text-sm font-semibold text-gray-600">ROOM NAME</label>
                        <input
                            type="text"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            placeholder="e.g. Midnight Jazz & Cocktails"
                            className="w-full mt-2 px-4 py-3 rounded-full bg-gray-100 outline-none"
                        />
                    </div>

                    {/* CATEGORY */}
                    <div className="mb-6">
                        <label className="text-sm font-semibold text-gray-600">CATEGORY</label>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm ${selectedCategory === cat
                                        ? "bg-pink-500 text-white"
                                        : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className="text-sm font-semibold text-gray-600">DESCRIPTION</label>
                        <textarea
                            placeholder="Tell the world what your room is about..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={5}
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-100 outline-none"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gray-500 mb-3">ROOM COVER</p>

                    {/* COVER IMAGE */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-52 flex items-center justify-center">
                        {cover?.preview ? (
                            <img
                                src={cover.preview}
                                alt="cover"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-400">Change Cover Image</span>
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setCover({
                                        file: file,
                                        preview: URL.createObjectURL(file),
                                    });
                                }
                            }}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>

                    {/* AVATARS (dummy UI) */}
                    <div className="flex gap-3 mt-4">
                        <div className="w-12 h-12 rounded-full bg-gray-300" />
                        <div className="w-12 h-12 rounded-full bg-gray-400" />
                        <div className="w-12 h-12 rounded-full bg-gray-500" />
                    </div>

                    {/* BUTTON */}
                    <button onClick={handleCreateRoom} className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold">
                        Create Room
                    </button>

                    <button className="w-full mt-3 text-gray-500">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CreateRoom;