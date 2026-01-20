import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { socket } from "../socket"; // ✅ single socket

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [authUser, setAuthUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  /* -------------------- AUTH CHECK -------------------- */
  const checkAuth = async () => {
    try {
      setIsCheckingAuth(true);
      const { data } = await axios.get("/api/auth/check");

      if (data.success) {
        console.log(data);
        setAuthUser(data.user);
      } else {
        setAuthUser(null);
      }
    } catch (err) {
      setAuthUser(null);
    } finally {
      setIsCheckingAuth(false);
    }
  };

  /* -------------------- SOCKET CONNECT / DISCONNECT -------------------- */
  useEffect(() => {
    if (authUser?.id && !socket.connected) {
      socket.auth = { userId: authUser.id };
      socket.connect();
      console.log("🟢 SOCKET CONNECTED:", authUser.id);

      socket.on("getOnlineUsers", setOnlineUsers);
    }

    if (!authUser && socket.connected) {
      socket.disconnect();
      setOnlineUsers([]);
    }

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [authUser]);

  /* -------------------- LOGIN -------------------- */
  const login = async (state, credentials) => {
    try {
      const { data } = await axios.post(`/api/auth/${state}`, credentials);

      if (data.success) {
        setAuthUser(data.userData);
        axios.defaults.headers.common["token"] = data.token;
        setToken(data.token);
        localStorage.setItem("token", data.token);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  /* -------------------- LOGOUT -------------------- */
  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["token"] = null;
    setToken(null);
    setAuthUser(null);
    socket.disconnect();
    toast.success("Logged out successfully");
  };

  /* -------------------- UPDATE PROFILE -------------------- */
  const updateProfile = async (body) => {
    try {
      const { data } = await axios.put("/api/auth/update-profile", body);
      if (data.success) {
        setAuthUser(data.user);
        toast.success("Profile updated");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (token) axios.defaults.headers.common["token"] = token;
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        axios,
        authUser,
        onlineUsers,
        isCheckingAuth,
        login,
        logout,
        updateProfile,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
