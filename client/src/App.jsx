import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import {Toaster} from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const App = () => {
  const {authUser, isCheckingAuth}=useContext(AuthContext);
  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div  className="bg-[url('/assets/bgImage.svg')] bg-cover bg-no-repeat">
    <BrowserRouter>
    <Toaster/>
    <Routes>
      <Route path='/' element={authUser? <HomePage/>: <Navigate to="/login"/>}/>
      <Route path='/login' element={!authUser?<LoginPage/> :<Navigate to="/"/>}/>
      <Route path='/profile' element={authUser?<ProfilePage/>: <Navigate to="/login"/> }/>


    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
