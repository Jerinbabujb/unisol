import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import SideBar from '../components/SideBar';
import assets from '../assets';

const Settings = () => {
    const { authUser } = useContext(AuthContext);

    const {
        blockedUsersList,
        getBlockedUsers,
        getUsersFromIds,
        userslists,
        unBlockingUsers
    } = useContext(ChatContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [activeFontSize, setActiveFontSize] = useState(
        localStorage.getItem("fontSize") || "Normal"
    );

    const [activeColor, setActiveColor] = useState(
        localStorage.getItem("themeColor") || "#7C3AED"
    );

    const [isBlockedOpen, setIsBlockedOpen] = useState(false);

    const fontSizeMap = {
        Small: "14px",
        Normal: "16px",
        Large: "18px",
        "X-Large": "20px",
        Huge: "22px",
    };

    const fontSizes = ["Small", "Normal", "Large", "X-Large", "Huge"];

    const dynamicPalette = [
        "#7C3AED",
        "#2563EB",
        "#10B981",
        "#F97316",
        "#EF4444",
        "#EC4899",
    ];

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--theme-color",
            activeColor
        );

        document.documentElement.style.fontSize =
            fontSizeMap[activeFontSize];

        localStorage.setItem("themeColor", activeColor);
        localStorage.setItem("fontSize", activeFontSize);
    }, [activeColor, activeFontSize]);

    useEffect(() => {
        getBlockedUsers();
    }, [blockedUsersList, unBlockingUsers]);

    useEffect(() => {
        if (blockedUsersList?.length > 0) {
            getUsersFromIds(blockedUsersList);
        }
    }, [blockedUsersList]);

    const handleUnblock = async (userId) => {
        console.log("unblock user", userId);
        unBlockingUsers(userId);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FC] flex overflow-hidden">

            {/* DESKTOP SIDEBAR */}
            <div className="hidden lg:block">
                <SideBar />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 px-4 sm:px-6 lg:px-10 py-6 lg:pl-[120px] pb-28">

                {/* HEADER CARD */}
                <div className="mb-8">
                    <div
                        className="rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl"
                        style={{
                            background: `linear-gradient(135deg, ${activeColor}, #111827)`
                        }}
                    >

                        <div className="relative z-10">

                            <div className="flex items-center justify-between flex-wrap gap-4">

                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-bold">
                                        Settings
                                    </h1>

                                    <p className="text-sm text-white/80 mt-2">
                                        Personalize your experience and manage your preferences.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 flex items-center gap-4">

                                <img
                                    src={
                                        authUser?.profilePic ||
                                        assets.avatar_icon
                                    }
                                    alt=""
                                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                                />

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {authUser?.fullName}
                                    </h3>

                                    <p className="text-sm text-white/70">
                                        Theme preview enabled
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* DECORATION */}
                        <div className="absolute -top-16 -right-10 w-56 h-56 bg-white/10 rounded-full blur-xl" />
                        <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/10 rounded-full blur-lg" />

                    </div>
                </div>

                {/* SETTINGS GRID */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* FONT SIZE CARD */}
                    <div className="bg-white rounded-[30px] p-6 border border-gray-100 shadow-sm">

                        <div className="flex items-center gap-4 mb-6">

                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-md"
                                style={{
                                    backgroundColor: activeColor
                                }}
                            >
                                Aa
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Font Size
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Adjust text readability
                                </p>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                            {fontSizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setActiveFontSize(size)}
                                    className={`rounded-2xl py-4 px-3 font-medium transition-all duration-300 border text-sm
                                    
                                    ${activeFontSize === size
                                            ? 'text-white scale-105 shadow-lg border-transparent'
                                            : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'
                                        }`}
                                    style={{
                                        backgroundColor:
                                            activeFontSize === size
                                                ? activeColor
                                                : ''
                                    }}
                                >
                                    {size}
                                </button>
                            ))}

                        </div>

                        {/* PREVIEW */}
                        <div className="mt-6 bg-gray-50 rounded-2xl p-5 border border-gray-100">

                            <p className="text-gray-800 font-medium mb-2">
                                Preview
                            </p>

                            <p className="text-gray-500">
                                This is how your text will appear inside the app.
                            </p>

                        </div>

                    </div>

                    {/* COLOR CARD */}
                    <div className="bg-white rounded-[30px] p-6 border border-gray-100 shadow-sm">

                        <div className="flex items-center gap-4 mb-6">

                            <div
                                className="w-14 h-14 rounded-2xl shadow-md"
                                style={{
                                    backgroundColor: activeColor
                                }}
                            />

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    App Theme
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Pick your favorite color theme
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-wrap gap-4">

                            {dynamicPalette.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setActiveColor(color)}
                                    className={`w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center
                                    
                                    ${activeColor === color
                                            ? 'scale-110 ring-4 ring-offset-4 ring-gray-200'
                                            : 'hover:scale-105'
                                        }`}
                                    style={{
                                        backgroundColor: color
                                    }}
                                >
                                    {activeColor === color && (
                                        <span className="text-white text-lg font-bold">
                                            ✓
                                        </span>
                                    )}
                                </button>
                            ))}

                        </div>

                        {/* LIVE PREVIEW */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">

                            <div
                                className="h-20"
                                style={{
                                    background: `linear-gradient(135deg, ${activeColor}, #111827)`
                                }}
                            />

                            <div className="bg-white p-5">

                                <p className="font-semibold text-gray-800">
                                    Live Theme Preview
                                </p>

                                <p className="text-sm text-gray-400 mt-1">
                                    Your app updates instantly with your selected theme.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BLOCKED USERS */}
                <div className="mt-6 bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm">

                    <button
                        onClick={() => setIsBlockedOpen(!isBlockedOpen)}
                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-2xl">
                                🚫
                            </div>

                            <div className="text-left">

                                <h2 className="text-xl font-semibold text-gray-800">
                                    Blocked Users
                                </h2>

                                <p className="text-sm text-gray-400">
                                    {userslists?.length || 0} blocked accounts
                                </p>

                            </div>

                        </div>

                        <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isBlockedOpen ? 'rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </button>

                    {isBlockedOpen && (

                        <div className="p-5 bg-gray-50 border-t border-gray-100">

                            {userslists?.length === 0 ? (

                                <div className="py-8 text-center text-gray-400">
                                    No blocked users found.
                                </div>

                            ) : (

                                <div className="space-y-4">

                                    {userslists.map((user) => (

                                        <div
                                            key={user.id}
                                            className="bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100"
                                        >

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={
                                                        user.profilePic ||
                                                        assets.avatar_icon
                                                    }
                                                    alt=""
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />

                                                <div>

                                                    <h4 className="font-semibold text-gray-800">
                                                        {user.fullName}
                                                    </h4>

                                                    <p className="text-sm text-gray-400">
                                                        Blocked account
                                                    </p>

                                                </div>

                                            </div>

                                            <button
                                                onClick={() => handleUnblock(user.id)}
                                                className="px-5 py-2.5 rounded-xl text-white font-medium transition-all hover:scale-105 shadow-md"
                                                style={{
                                                    backgroundColor: activeColor
                                                }}
                                            >
                                                Unblock
                                            </button>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                    )}

                </div>

            </div>

            {/* MOBILE NAVIGATION */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 px-6 py-4 flex justify-between items-center z-50 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">

                <button
                    onClick={() => navigate('/')}
                    className={`transition-all ${location.pathname === '/'
                        ? 'scale-110'
                        : 'opacity-60'
                        }`}
                    style={{
                        color:
                            location.pathname === '/'
                                ? activeColor
                                : '#6B7280'
                    }}
                >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 22l10-3 10 3L12 2z" />
                    </svg>
                </button>

                <button
                    onClick={() => navigate('/friend-request')}
                    className={`transition-all ${location.pathname === '/friend-request'
                        ? 'scale-110'
                        : 'opacity-60'
                        }`}
                    style={{
                        color:
                            location.pathname === '/friend-request'
                                ? activeColor
                                : '#6B7280'
                    }}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                <button
                    onClick={() => navigate('/global-room-lists')}
                    className={`transition-all ${location.pathname === '/global-room-lists'
                        ? 'scale-110'
                        : 'opacity-60'
                        }`}
                    style={{
                        color:
                            location.pathname === '/global-room-lists'
                                ? activeColor
                                : '#6B7280'
                    }}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                </button>

                <button
                    onClick={() => navigate('/messages')}
                    className={`transition-all ${location.pathname === '/messages'
                        ? 'scale-110'
                        : 'opacity-60'
                        }`}
                    style={{
                        color:
                            location.pathname === '/messages'
                                ? activeColor
                                : '#6B7280'
                    }}
                >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                </button>

                <button
                    onClick={() => navigate('/profile')}
                    className={`transition-all ${location.pathname === '/profile'
                        ? 'scale-110'
                        : 'opacity-60'
                        }`}
                    style={{
                        color:
                            location.pathname === '/profile'
                                ? activeColor
                                : '#6B7280'
                    }}
                >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </button>

            </nav>

        </div>
    );
};

export default Settings;