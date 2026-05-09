import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import assets from '../assets';
import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';

const LoginPage = () => {
  const googleLoginRef = useRef(false);

  const [currentState, setCurrentState] = useState('Sign Up');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: 'woman',
    interest: '',
    bio: '',
    googleId: '',
    mobileNumber: '',
    primaryNeurotype: [],
    status: '',
    prefferGender: '',
    preferredMatch: [],
    mbtiType: '',
    attachmentStyle: '',
    beliefSystem: '',
    intentions: '',
    experienceLevel: '',
    topArtists: [],
    favoriteGenres: [],
    uiTheme: '',
    horoscope: '',
  });

  const neuroOptions = [
    'neurotypical',
    'autistic',
    'adhd',
    'dyslexic',
    'dyspraxic',
    'dyscalculic',
    'tourettes',
    'other',
  ];

  const preferredMatchOptions = [
    'All neurotypes (ND + NT)',
    'ND Only',
    'Specific Neurotypes Only',
  ];

  const { login } = useContext(AuthContext);

  // Brand Constants based on logo
  const BRAND_BG = "bg-[#5D3289]";
  const BRAND_GRADIENT = "from-[#4B2471] via-[#5D3289] to-[#7B52AB]";

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log('Redirect result caught:', result.user.email);
        }
      })
      .catch((error) => console.error('Redirect Error:', error));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && googleLoginRef.current) {
        setLoading(true);

        const googleData = {
          email: user.email,
          fullName: user.displayName,
          googleId: user.uid,
          profilePic: user.photoURL,
        };

        setFormData((prev) => ({
          ...prev,
          ...googleData,
        }));

        if (currentState === 'Sign Up') {
          setStep(2);
        } else {
          await login('login', {
            googleId: user.uid,
            email: user.email,
          });
        }

        googleLoginRef.current = false;
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [currentState, login]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === 'Sign Up') {
      if (step === 1) {
        if (formData.password !== formData.confirmPassword) {
          return alert('Passwords do not match!');
        }
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        setStep(4);
      } else {
        setLoading(true);
        await login('signup', formData);
        setLoading(false);
      }
    } else {
      setLoading(true);

      await login('login', {
        email: formData.email,
        password: formData.password,
      });

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

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: 'woman',
      bio: '',
      birthday: '',
      mobileNumber: '',
      primaryNeurotype: [],
      status: '',
      preferredMatch: [],
      mbtiType: '',
      attachmentStyle: '',
      beliefSystem: '',
      intentions: '',
      experienceLevel: '',
      prefferGender: '',
      topArtists: [],
      favoriteGenres: [],
      uiTheme: '',
      horoscope: '',
    });
  };

  return (
    <div className='min-h-screen bg-[#FDFCFE] flex flex-col items-center justify-center p-4 lg:p-6 font-sans selection:bg-purple-100 selection:text-[#5D3289]'>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[120px] ${BRAND_BG}`}></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.06] blur-[100px]"></div>
      </div>

      {/* Header */}
      <div className='w-full max-w-6xl flex justify-between items-center mb-6 lg:mb-8 px-2 sm:px-4 z-10'>
        <div
          className='flex items-center gap-3 cursor-pointer group'
          onClick={() => window.location.reload()}
        >
          <img
            src={assets.logo}
            className='w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105'
            alt='Unisoul Logo'
          />
          <h1 className='text-2xl font-bold text-gray-900 tracking-tight'>
            Unisoul
          </h1>
        </div>

        <div className='flex items-center gap-5 text-sm'>
          <span className='text-gray-400 font-medium hidden sm:block tracking-wide'>
            {currentState === 'Sign Up'
              ? 'Already a member?'
              : 'New to Unisoul?'}
          </span>

          <button
            onClick={toggleState}
            className='px-7 py-2.5 border border-gray-200 rounded-full font-bold text-gray-700 hover:border-[#7B52AB] hover:text-[#5D3289] transition-all bg-white shadow-sm active:scale-95'
          >
            {currentState === 'Sign Up' ? 'Log In' : 'Join Now'}
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className='w-full max-w-6xl bg-white rounded-[48px] shadow-[0_40px_80px_-15px_rgba(93,50,137,0.1)] flex overflow-hidden min-h-[720px] border border-gray-50 z-10'>

        {/* Left Side: Visual Experience */}

        <div className='hidden lg:flex lg:w-5/12 relative overflow-hidden'>
          <img
            src={step === 1 ? './assets/hero1.jpg' : step === 2 ? './assets/hero2.jpg' : step === 3 ? './assets/hero3.jpg' : './assets/hero1.jpg'}
            alt='Hero Connection'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-105'
          />

          <div className={`absolute inset-0 bg-gradient-to-b ${BRAND_GRADIENT} mix-blend-multiply opacity-60`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent"></div>

          <div className='absolute bottom-14 left-12 right-12 text-white'>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold mb-6 uppercase tracking-widest shadow-xl">
              <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse"></span>
              Join the circle
            </div>

            <h2 className='text-5xl font-bold leading-[1.1] mb-5 tracking-tight'>
              Where Souls <br /><span className="text-purple-300 italic font-serif font-light pr-1">Truly</span> Align.
            </h2>

            <p className='text-purple-100/80 font-medium max-w-xs leading-relaxed text-sm'>
              An inclusive space designed for neurodiverse and neurotypical hearts to find harmony and authentic connections.
            </p>

            {currentState === 'Sign Up' && (
              <div className='flex gap-2.5 mt-10'>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${step >= i
                      ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                      : 'w-4 bg-white/30'
                      }`}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className='w-full lg:w-7/12 bg-white flex flex-col items-center px-6 sm:px-12 lg:px-20 py-12 overflow-y-auto custom-scrollbar'>
          <form
            onSubmit={onSubmitHandler}
            className='flex flex-col gap-6 w-full max-w-[420px] my-auto'
          >
            {/* Heading Section */}
            <div className='mb-2'>
              {currentState === 'Sign Up' && step > 1 && (
                <button
                  type='button'
                  onClick={() => setStep(step - 1)}
                  className='mb-4 flex items-center gap-2 text-[11px] font-bold text-[#5D3289] uppercase tracking-widest hover:translate-x-[-4px] transition-transform w-fit'
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  Back
                </button>
              )}

              <h3 className='text-3xl font-bold text-gray-900 tracking-tight mb-2'>
                {currentState === 'Sign Up'
                  ? 'Create Account'
                  : 'Welcome Back'}
              </h3>

              <p className='text-gray-400 text-sm font-medium'>
                {currentState === 'Sign Up'
                  ? `Step ${step} of 4 — ${step === 1
                    ? 'Security & Access'
                    : step === 2
                      ? 'Personal Details'
                      : step === 3
                        ? 'Identity & Preferences'
                        : 'Dating Goals'
                  }`
                  : 'Enter your credentials to access your profile.'}
              </p>
            </div>

            {/* Social Login (Step 1 only) */}
            {(currentState === 'Login' || step === 1) && (
              <div className='space-y-5'>
                <button
                  type='button'
                  onClick={handleGoogleSignIn}
                  className='flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]'
                >
                  <img
                    src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
                    className='w-5 h-5'
                    alt='Google'
                  />
                  Continue with Google
                </button>

                <div className='relative flex items-center justify-center py-2'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-100'></div>
                  </div>
                  <span className='relative px-4 text-[10px] text-gray-400 bg-white uppercase font-bold tracking-[0.2em]'>
                    Or use email
                  </span>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className='space-y-5'>

              {/* Step 1: Credentials */}
              {(currentState === 'Login' || step === 1) && (
                <div className='space-y-5 animate-in fade-in duration-500'>
                  <InputField
                    label='Email Address'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='name@domain.com'
                  />

                  <InputField
                    label='Password'
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='••••••••'
                  />

                  {currentState === 'Sign Up' && (
                    <InputField
                      label='Confirm Password'
                      type='password'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder='••••••••'
                    />
                  )}
                </div>
              )}

              {/* Step 2: Personal Info */}
              {currentState === 'Sign Up' && step === 2 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-5'>
                  <InputField
                    label='Full Name'
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Jane Doe'
                  />

                  <InputField
                    label='Mobile Number'
                    type='tel'
                    name='mobileNumber'
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder='+1 (555) 000-0000'
                  />

                  <InputField
                    label='Date of Birth'
                    type='date'
                    name='birthday'
                    value={formData.birthday}
                    onChange={handleChange}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField
                      label='Gender'
                      name='gender'
                      value={formData.gender}
                      onChange={handleChange}
                      options={['Woman', 'Man', 'Non-binary', 'Other']}
                    />

                    <SelectField
                      label='Horoscope'
                      name='horoscope'
                      value={formData.horoscope}
                      onChange={handleChange}
                      options={[
                        'Aries', 'Taurus', 'Gemini', 'Cancer',
                        'Leo', 'Virgo', 'Libra', 'Scorpio',
                        'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
                      ]}
                    />
                  </div>

                  <TextAreaField
                    label='Interests & Hobbies'
                    name='interest'
                    value={formData.interest}
                    onChange={handleChange}
                    placeholder='Reading, hiking, board games, photography...'
                    rows={3}
                  />
                </div>
              )}

              {/* Step 3: Identity & Preferences */}
              {currentState === 'Sign Up' && step === 3 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-6'>
                  <TagSelector
                    label='Primary Neurotype'
                    options={neuroOptions}
                    selected={formData.primaryNeurotype}
                    onToggle={(option) => {
                      let updated = [...formData.primaryNeurotype];
                      if (updated.includes(option)) {
                        updated = updated.filter((item) => item !== option);
                      } else {
                        updated.push(option);
                      }
                      setFormData({ ...formData, primaryNeurotype: updated });
                    }}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField
                      label='Diagnosis Status'
                      name='status'
                      value={formData.status}
                      onChange={handleChange}
                      options={[
                        'Formally Diagnosed',
                        'Self-diagnosed',
                        'Not Diagnosed',
                        'Prefer not to say'
                      ]}
                    />
                    <SelectField
                      label='MBTI Type'
                      name='mbtiType'
                      value={formData.mbtiType}
                      onChange={handleChange}
                      options={[
                        'INTJ', 'INTP', 'ENTJ', 'ENTP',
                        'INFJ', 'INFP', 'ENFJ', 'ENFP',
                        'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
                        'ISTP', 'ISFP', 'ESTP', 'ESFP',
                        'Unsure'
                      ]}
                    />
                  </div>

                  <TagSelector
                    label='Preferred Match'
                    options={preferredMatchOptions}
                    selected={formData.preferredMatch}
                    onToggle={(option) => {
                      let updated = [...formData.preferredMatch];
                      if (updated.includes(option)) {
                        updated = updated.filter((item) => item !== option);
                      } else {
                        updated.push(option);
                      }
                      setFormData({ ...formData, preferredMatch: updated });
                    }}
                  />
                  <SelectField
                    label='Prefferred Gender'
                    name='prefferGender'
                    value={formData.prefferGender}
                    onChange={handleChange}
                    options={[
                      'Male',
                      'Female',
                      'Other',
                    ]}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField
                      label='Attachment Style'
                      name='attachmentStyle'
                      value={formData.attachmentStyle}
                      onChange={handleChange}
                      options={[
                        'Secure', 'Anxious', 'Avoidant', 'Disorganized', 'Unsure'
                      ]}
                    />
                    <SelectField
                      label='Belief System'
                      name='beliefSystem'
                      value={formData.beliefSystem}
                      onChange={handleChange}
                      options={[
                        'Atheist', 'Agnostic', 'Spiritual', 'Religious', 'Other'
                      ]}
                    />
                  </div>

                  <TextAreaField
                    label='Tell us your story'
                    name='bio'
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder='What makes you unique? What are you looking for?'
                    rows={4}
                  />
                </div>
              )}

              {/* Step 4: Intentions */}
              {currentState === 'Sign Up' && step === 4 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-6'>
                  <SelectField
                    label='What are you looking for?'
                    name='intentions'
                    value={formData.intentions}
                    onChange={handleChange}
                    options={[
                      'Long-term relationship',
                      'Short-term dating',
                      'Platonic connection',
                      'Friendship',
                      'Marriage',
                      'Still figuring it out'
                    ]}
                  />

                  <SelectField
                    label='Dating Experience'
                    name='experienceLevel'
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    options={[
                      'First-time Dater',
                      'Casual Dater',
                      'Committed Dater',
                      'Recently Separated',
                      'Divorced',
                      'Widowed',
                    ]}
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={loading}
              className={`mt-4 py-4 w-full ${BRAND_BG} text-white rounded-2xl font-bold text-base shadow-[0_16px_32px_-8px_rgba(93,50,137,0.4)] hover:bg-[#4B2471] hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 disabled:hover:translate-y-0`}
            >
              {loading
                ? 'Processing...'
                : currentState === 'Login'
                  ? 'Sign In to Unisoul'
                  : step === 4
                    ? 'Complete Profile'
                    : 'Continue to Next Step'}
            </button>

            <p className='text-[11px] text-gray-400 text-center px-4 leading-relaxed font-medium mt-2'>
              By continuing, you agree to our{' '}
              <span className='text-[#5D3289] font-bold cursor-pointer hover:underline'>
                Terms of Service
              </span>{' '}
              &{' '}
              <span className='text-[#5D3289] font-bold cursor-pointer hover:underline'>
                Privacy Policy
              </span>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Optional: Add custom scrollbar hiding styles to a global CSS file or inject here */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f3f4f6;
          border-radius: 20px;
        }
      `}} />
    </div>
  );
};

/* --- Refined Reusable Components --- */

const InputField = ({ label, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#5D3289] transition-colors'>
      {label}
    </label>
    <input
      {...props}
      className='w-full px-5 py-3.5 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 outline-none transition-all text-sm font-medium placeholder:text-gray-300'
      required
    />
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#5D3289] transition-colors'>
      {label}
    </label>
    <div className="relative">
      <select
        {...props}
        className='w-full px-5 py-3.5 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 outline-none transition-all text-sm font-medium appearance-none cursor-pointer'
        required
      >
        <option value="" disabled selected hidden>Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label, rows = 4, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:text-[#5D3289] transition-colors'>
      {label}
    </label>
    <textarea
      rows={rows}
      {...props}
      className='w-full px-5 py-3.5 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white focus:border-[#5D3289] focus:ring-4 focus:ring-[#5D3289]/10 outline-none resize-none transition-all text-sm font-medium placeholder:text-gray-300'
      required
    />
  </div>
);

const TagSelector = ({ label, options, selected, onToggle }) => (
  <div className='flex flex-col gap-2.5'>
    <label className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1'>
      {label}
    </label>
    <div className='flex flex-wrap gap-2'>
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            type='button'
            key={option}
            onClick={() => onToggle(option)}
            className={`px-4 py-2 rounded-full border text-xs font-bold transition-all duration-200
            ${isSelected
                ? 'bg-[#5D3289] text-white border-[#5D3289] shadow-md shadow-[#5D3289]/30 -translate-y-[1px]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#7B52AB] hover:text-[#5D3289] hover:bg-purple-50/30'
              }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);

export default LoginPage;