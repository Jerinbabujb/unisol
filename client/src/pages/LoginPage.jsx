import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import assets from '../assets';
import { getRedirectResult, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';

const LoginPage = () => {
  const googleLoginRef = useRef(false);
  const [currentState, setCurrentState] = useState('Sign Up');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '',
    birthday: '', gender: 'woman', interest: '', bio: '',
    googleId: ""
  });

  const { login } = useContext(AuthContext);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) console.log("Redirect result caught:", result.user.email);
      }).catch((error) => console.error("Redirect Error:", error));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && googleLoginRef.current) {
        setLoading(true);
        const googleData = {
          email: user.email,
          fullName: user.displayName,
          googleId: user.uid,
          profilePic: user.photoURL
        };

        setFormData((prev) => ({ ...prev, ...googleData }));

        if (currentState === 'Sign Up') {
          setStep(2);
        } else {
          await login('login', { googleId: user.uid, email: user.email });
        }
        googleLoginRef.current = false;
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [currentState, login]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currentState === 'Sign Up') {
      if (step === 1) {
        if (formData.password !== formData.confirmPassword) return alert("Passwords do not match!");
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else {
        setLoading(true);
        await login('signup', formData);
        setLoading(false);
      }
    } else {
      setLoading(true);
      await login('login', { email: formData.email, password: formData.password });
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    googleLoginRef.current = true;
    await signInWithRedirect(auth, googleProvider);
  };

  const toggleState = () => {
    setCurrentState(currentState === 'Sign Up' ? 'Login' : 'Sign Up');
    setStep(1);
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '', gender: 'woman', bio: '' , birthday:''});
  };

  return (
    <div className='min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-4 font-sans selection:bg-pink-100 selection:text-pink-600'>
      
      {/* Header */}
      <div className='w-full max-w-5xl flex justify-between items-center mb-8 px-4'>
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => window.location.reload()}>
          <img src={assets.logo} className='w-10 h-10 object-contain' alt='Unisoul Logo'/>
          <h1 className='text-2xl font-black text-gray-900 tracking-tight'>Unisoul</h1>
        </div>
        <div className='flex items-center gap-4 text-sm'>
          <span className='text-gray-500 hidden sm:block'>
            {currentState === 'Sign Up' ? 'Already a member?' : 'New here?'}
          </span>
          <button 
            onClick={toggleState} 
            className='px-6 py-2.5 border border-gray-200 rounded-full font-bold text-gray-800 hover:border-pink-500 hover:text-pink-600 transition-all bg-white shadow-sm active:scale-95'
          >
            {currentState === 'Sign Up' ? 'Log In' : 'Join Now'}
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className='w-full max-w-5xl bg-white rounded-[48px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] flex overflow-hidden min-h-[680px] border border-gray-100'>
        
        {/* Left Side: Hero Image Section */}
        <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden'>
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000" 
            alt="Hero" 
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
          
          <div className='absolute bottom-16 left-12 right-12 text-white'>
            <div className='bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl w-fit mb-8 shadow-2xl'>
               <div className='w-10 h-10 flex items-center justify-center bg-white rounded-xl text-pink-500 text-xl shadow-inner'>❤</div>
            </div>
            <h2 className='text-6xl font-black leading-[1.1] mb-6 tracking-tighter'>Discover Your Soulmate.</h2>
            <p className='text-xl text-gray-300 font-medium max-w-md'>Experience the next generation of dating. Join a community built on authenticity and real connections.</p>
            
            {/* Step Indicators */}
            {currentState === 'Sign Up' && (
              <div className='flex gap-3 mt-10'>
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'w-12 bg-pink-500' : 'w-4 bg-white/20'}`}></div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className='w-full lg:w-1/2 p-8 sm:p-16 flex flex-col justify-center bg-white'>
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-6 max-w-[380px] mx-auto w-full'>
            
            <div className='mb-2'>
              <div className='flex items-center gap-4 mb-4'>
                {currentState === 'Sign Up' && step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className='p-2 hover:bg-gray-100 rounded-full border border-gray-100 transition-colors'>
                    <img src={assets.arrow_icon} alt='Back' className='w-4 rotate-180 opacity-70' />
                  </button>
                )}
                <h3 className='text-4xl font-black text-gray-900 tracking-tight'>
                  {currentState === 'Sign Up' ? 'Get Started' : 'Welcome Back'}
                </h3>
              </div>
              <p className='text-gray-400 font-medium'>
                {currentState === 'Sign Up' ? `Step ${step} of 3: ${step === 1 ? 'Credentials' : step === 2 ? 'Details' : 'Bio'}` : 'Enter your details to access your account.'}
              </p>
            </div>

            {/* Social Login Section */}
            {(currentState === 'Login' || step === 1) && (
              <div className='space-y-3'>
                <button type="button" onClick={handleGoogleSignIn} className='flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98]'>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className='w-5 h-5' alt="Google"/>
                  Continue with Google
                </button>
                
                <div className='relative flex items-center justify-center py-2'>
                  <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-gray-100'></div></div>
                  <span className='relative px-4 text-[11px] text-gray-400 bg-white uppercase font-black tracking-[0.2em]'>Or email</span>
                </div>
              </div>
            )}

            {/* Form Fields Mapping */}
            <div className='space-y-4 transition-all duration-300'>
              {(currentState === 'Login' || step === 1) && (
                <>
                  <InputField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@domain.com" />
                  <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
                  {currentState === 'Sign Up' && <InputField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" />}
                </>
              )}

              {currentState === 'Sign Up' && step === 2 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-4'>
                  <InputField label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
                  <InputField label="Date of Birth" type="date" name="birthday" value={formData.birthday} onChange={handleChange} placeholder="" />
                  <InputField label="Intrests" type="textarea" name="interest" value={formData.interest} onChange={handleChange} placeholder="Walking, Gaming" />

                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-black text-gray-500 uppercase tracking-widest ml-1'>I am a...</label>
                    <select name="gender" onChange={handleChange} value={formData.gender} className='p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-pink-500 outline-none transition-all font-medium appearance-none'>
                      <option value="woman">Woman</option>
                      <option value="man">Man</option>
                      <option value="non-binary">Non-binary</option>
                    </select>
                  </div>
                </div>
              )}

              {currentState === 'Sign Up' && step === 3 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500'>
                  <label className='text-xs font-black text-gray-500 uppercase tracking-widest ml-1 block mb-2'>Tell us your story</label>
                  <textarea name="bio" onChange={handleChange} value={formData.bio} className='w-full p-4 bg-gray-50 border border-transparent rounded-2xl h-36 focus:bg-white focus:border-pink-500 outline-none resize-none transition-all font-medium' placeholder='Coffee lover, hiker, and aspiring chef...' required />
                </div>
              )}
            </div>

            <button 
              type='submit' 
              disabled={loading}
              className='mt-2 py-4.5 bg-pink-600 text-white rounded-[20px] font-black text-lg shadow-[0_16px_32px_-8px_rgba(219,39,119,0.3)] hover:bg-pink-700 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0'
            >
              {loading ? 'Processing...' : (currentState === 'Login' ? 'Login' : step === 3 ? 'Complete Setup' : 'Continue')}
            </button>

            <p className='text-[11px] text-gray-400 text-center px-4 leading-relaxed font-medium'>
              By continuing, you agree to our <span className='text-pink-600 font-bold cursor-pointer hover:underline'>Terms</span> & <span className='text-pink-600 font-bold cursor-pointer hover:underline'>Privacy Policy</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// Sub-component for cleaner code
const InputField = ({ label, ...props }) => (
  <div className='flex flex-col gap-2 group'>
    <label className='text-xs font-black text-gray-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-pink-600'>{label}</label>
    <input 
      {...props}
      className='p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-pink-500 outline-none transition-all font-medium placeholder:text-gray-300' 
      required 
    />
  </div>
);

export default LoginPage;