import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';
import IncomingCallModal from './modal/incomingCallModal';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';

const App = () => {
  const { authUser, isCheckingAuth } = useContext(AuthContext);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[url('/assets/bgImage.svg')] bg-cover bg-no-repeat">
      <BrowserRouter>
        <Toaster />
        
        {/* GLOBAL MODAL: This allows the user to receive calls on ANY page */}
        {authUser && <IncomingCallModal/>} 

        <Routes>
          <Route path='/' element={authUser ? <HomePage/> : <Navigate to="/login" />} />
          <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path='/messages' element={authUser ? <ChatPage/> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;