import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import assets from '../assets';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';

const LoginPage = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '',
    birthday: '', gender: '', interest: '', bio: '',
    googleId:""
  });


  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentState === 'Sign Up') {
      if (step === 1 && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      if (step < 3) {
        setStep(prev => prev + 1);
      } else {
        login('signup', formData);
      }
    } else {
      login('login', { email: formData.email, password: formData.password });
    }
  };

  const handleGoogleSignIn= async() =>{
    try{
      const result= await signInWithPopup(auth, googleProvider);
      const user=result.user;
      setFormData((prev)=>({
        ...prev,
        email:user.email,
        fullName:user.displayName,
        googleId:user.uid,
      }));
      setStep(2);
      console.log("logged in successfully", user.email);
    }
    catch (error) {
      // Handle the case where user closes the popup
      if (error.code === "auth/popup-closed-by-user") {
        console.log("User closed the popup before finishing.");
      } else {
        console.error("Login Error:", error.message);
      }
    }
  }

  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className='min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-4 font-sans'>
      
      {/* --- HEADER --- */}
      <div className='w-full max-w-5xl flex justify-between items-center mb-6 px-4'>
        <div className='flex items-center gap-2'>
           <img src={assets.logo} className='w-13' alt='logo'/>
           <h1 className='text-xl font-bold text-gray-800'>Unisoul</h1>
        </div>
        <div className='text-sm text-gray-600'>
          {currentState === 'Sign Up' ? (
            <>Already a member? <button onClick={() => {setCurrentState('Login'); setStep(1)}} className='ml-2 px-6 py-2 border border-gray-300 rounded-full font-semibold text-gray-800 hover:bg-gray-50 transition-all'>Log In</button></>
          ) : (
            <>New here? <button onClick={() => setCurrentState('Sign Up')} className='ml-2 px-6 py-2 border border-gray-300 rounded-full font-semibold text-gray-800 hover:bg-gray-50 transition-all'>Sign Up</button></>
          )}
        </div>
      </div>

      {/* --- MAIN CARD --- */}
      <div className='w-full max-w-5xl bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 flex overflow-hidden min-h-[650px]'>
        
        {/* Left Side: Hero */}
        <div className='hidden md:flex md:w-1/2 relative'>
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000" 
            alt="Couple" 
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
          <div className='absolute bottom-16 left-12 right-12 text-white'>
            <div className='bg-white/20 backdrop-blur-md p-2 rounded-full w-fit mb-6'>
                <div className='w-8 h-8 flex items-center justify-center bg-white rounded-full text-pink-500 shadow-sm'>❤</div>
            </div>
            <h2 className='text-5xl font-bold leading-tight mb-4'>Start Your Love Story Today</h2>
            <p className='text-lg text-gray-200'>Join millions of people who have found their perfect match on HeartBeat.</p>
            
            {/* Step Indicators */}
            <div className='flex gap-2 mt-8'>
              <div className={`h-1.5 rounded-full transition-all duration-300 float-start ${step >= 1 ? 'w-10 bg-pink-500' : 'w-3 bg-white/30'}`}></div>
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-10 bg-pink-500' : 'w-3 bg-white/30'}`}></div>
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? 'w-10 bg-pink-500' : 'w-3 bg-white/30'}`}></div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className='w-full md:w-1/2 p-12 flex flex-col justify-center'>
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 max-w-sm mx-auto w-full'>
            <div className='mb-4 relative'>
              {currentState === 'Sign Up' && step > 1 && (
                <button type="button" onClick={prevStep} className='top-1 p-1 hover:bg-gray-100 rounded-full transition-all'>
                    <img src={assets.arrow_icon} alt='Back' className='w-4 opacity-60' />
                </button>
              )}
              <h3 className='text-3xl font-extrabold text-gray-900'>
                {currentState === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
              </h3>
              <p className='text-gray-400 text-sm mt-2'>It's free and takes less than a minute.</p>
            </div>

            {/* STEP 1: LOGIN/SIGNUP CORE */}
            {(currentState === 'Login' || step === 1) && (
              <>
                <div className='flex flex-col gap-3'>
                    <button type="button" onClick={handleGoogleSignIn} className='flex items-center justify-center gap-3 w-full py-2.5 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all'>
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className='w-5' alt=""/> Continue with Google
                    </button>
                    <button type="button" className='flex items-center justify-center gap-3 w-full py-2.5 bg-[#1877F2] text-white rounded-xl font-semibold hover:bg-blue-700 transition-all'>
                        <span className='text-lg'>f</span> Continue with Facebook
                    </button>
                </div>
                
                <div className='relative flex items-center justify-center my-2'>
                  <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-gray-100'></div></div>
                  <span className='relative px-4 text-[10px] text-gray-400 bg-white uppercase font-bold tracking-widest'>Or {currentState === 'Sign Up' ? 'Sign up' : 'Login'} with email</span>
                </div>

                <div className='space-y-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-[11px] font-bold text-gray-600 uppercase tracking-wider ml-1'>Email Address</label>
                        <input type='email' name="email" onChange={handleChange} value={formData.email} placeholder='name@example.com' className='p-3.5 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all' required />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label className='text-[11px] font-bold text-gray-600 uppercase tracking-wider ml-1'>Password</label>
                        <input type='password' name="password" onChange={handleChange} value={formData.password} placeholder='••••••••' className='p-3.5 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all' required />
                    </div>

                    {currentState === 'Sign Up' && (
                        <div className='flex flex-col gap-1.5'>
                            <label className='text-[11px] font-bold text-gray-600 uppercase tracking-wider ml-1'>Confirm Password</label>
                            <input type='password' name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} placeholder='••••••••' className='p-3.5 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all' required />
                        </div>
                    )}
                </div>
              </>
            )}

            {/* STEP 2: PROFILE INFO */}
            {currentState === 'Sign Up' && step === 2 && (
              <div className='space-y-4 animate-in slide-in-from-right-4 duration-300'>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[11px] font-bold text-gray-600 uppercase tracking-wider ml-1'>Full Name</label>
                  <input type='text' name="fullName" onChange={handleChange} value={formData.fullName} className='p-3.5 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:border-pink-500 outline-none' placeholder='John Doe' required />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[11px] font-bold text-gray-600 uppercase tracking-wider ml-1'>I am a...</label>
                  <select name="gender" onChange={handleChange} className='p-3.5 bg-[#F9FAFB] border border-gray-100 rounded-xl focus:border-pink-500 outline-none'>
                    <option value="woman">Woman</option>
                    <option value="man">Man</option>
                    <option value="non-binary">Non-binary</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: BIO */}
            {currentState === 'Sign Up' && step === 3 && (
              <div className='space-y-4 animate-in slide-in-from-right-4 duration-300'>
                <div className='flex flex-col gap-1.5'>
                    <label className='text-[11px] font-bold text-gray-600 uppercase tracking-wider ml-1'>Tell us about yourself</label>
                    <textarea name="bio" onChange={handleChange} value={formData.bio} className='p-3.5 bg-[#F9FAFB] border border-gray-100 rounded-xl h-32 focus:border-pink-500 outline-none resize-none' placeholder='I love hiking and coffee...' required />
                </div>
              </div>
            )}

            <button type='submit' className='mt-2 py-4 bg-[#FF1493] text-white rounded-2xl font-bold shadow-xl shadow-pink-200 hover:bg-[#e61284] hover:-translate-y-0.5 transition-all active:scale-[0.98]'>
              {currentState === 'Login' ? 'Login Now' : (step === 3 ? 'Sign Up Free' : 'Continue')}
            </button>

            <p className='text-[11px] text-gray-400 text-center mt-4 px-4 leading-relaxed'>
              By clicking {currentState === 'Sign Up' ? 'Sign Up' : 'Login'}, you agree to our <span className='text-pink-500 font-semibold cursor-pointer hover:underline'>Terms</span> and <span className='text-pink-500 font-semibold cursor-pointer hover:underline'>Privacy Policy</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;