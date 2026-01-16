// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from '../context/AuthContext';
import { ChatProvider } from '../context/ChatContext.jsx';
import { CallProvider } from '../context/CallContext.jsx';
import { io } from 'socket.io-client';

// Helper to get ID from your specific AuthProvider storage key
const getUserId = () => {
    try {
        const authData = localStorage.getItem("user-storage"); // Adjust key if needed
        return authData ? JSON.parse(authData).state.authUser.id : null;
    } catch (e) {
        return null;
    }
};

const socket = io("http://localhost:5000", {
    query: {
        userId: getUserId() || "",
    },
    autoConnect: true,
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <ChatProvider>
                <CallProvider socket={socket}>
                    <App />
                </CallProvider>
            </ChatProvider>
        </AuthProvider>
    </StrictMode>,
)