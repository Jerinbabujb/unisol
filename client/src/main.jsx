// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from '../context/AuthContext';
import { ChatProvider } from '../context/ChatContext.jsx';
import { CallProvider } from '../context/CallContext.jsx';
import { io } from 'socket.io-client';
import { MusicProvider } from '../context/MusicContext.jsx';
import { GameProvider } from '../context/GameContext.jsx';
import { VideoProvider } from '../context/VideoContect.jsx';
import { useEffect } from 'react';
import { GroupVideoContext, GroupVideoProvider } from '../context/GroupVideoContext.jsx';
import { GroupMusicContext, GroupMusicProvider } from '../context/GroupMusicContext.jsx';

// Helper to get ID from your specific AuthProvider storage key
const getUserId = () => {
    try {
        const authData = localStorage.getItem("user-storage"); // Adjust key if needed
        return authData ? JSON.parse(authData).state.authUser.id : null;
    } catch (e) {
        return null;
    }
};
console.log("VideoProvider:", VideoProvider);
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const socket = io(BACKEND_URL, {
    autoConnect: true,        // auto connect immediately
    transports: ["websocket"] // optional, ensures WebSocket transport
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <ChatProvider>
                <CallProvider socket={socket}>
                    <GameProvider>
                                                <VideoProvider>

                      <MusicProvider>
                        <GroupVideoProvider>
<GroupMusicProvider>
                    <App />
                    </GroupMusicProvider>
                    </GroupVideoProvider>
                      </MusicProvider>
                                          </VideoProvider>

                    </GameProvider>
                </CallProvider>
            </ChatProvider>
        </AuthProvider>
    </StrictMode>,
)