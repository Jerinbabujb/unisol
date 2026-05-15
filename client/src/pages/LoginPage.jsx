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

  // Expanded Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    age: '',
    gender: '',
    pronouns: '',
    bio: '',
    googleId: '',
    mobileNumber: '',
    primaryNeurotype: [],
    status: '',
    sensorySensitivities: [],
    prefferGender: '',
    preferredMatch: [],
    mbtiType: '',
    attachmentStyle: '',
    beliefSystem: '',
    intentions: '',
    experienceLevel: '',
    socialComfort: '',
    topArtists: ['', '', ''],
    topMovies: ['', '', ''],
    topHobbies: ['', '', ''],
    optInNatalChart: false,
    natalChart: { sun: '', moon: '', rising: '' },
    uiTheme: 'purple',
    horoscope: '',
  });

  const neuroOptions = [
    'neurotypical', 'autistic', 'adhd', 'dyslexic', 'dyspraxic',
    'dyscalculic', 'tourettes', 'ocd', 'audhd', 'auditory processing disorder'
  ];

  const preferredMatchOptions = [
    'All neurotypes (ND + NT)', 'ND Only', 'Specific Neurotypes Only',
  ];

  const sensoryOptions = [
    'Light (Over-reactive)', 'Light (Under-reactive)',
    'Sound (Over-reactive)', 'Sound (Under-reactive)',
    'Touch (Over-reactive)', 'Touch (Under-reactive)',
    'Smell (Over-reactive)', 'Smell (Under-reactive)',
    'Taste (Over-reactive)', 'Taste (Under-reactive)'
  ];

  // Dynamic Theme Definitions
  const themes = {
    purple: {
      bg: "bg-[#5D3289]",
      gradient: "from-[#4B2471] via-[#5D3289] to-[#7B52AB]",
      text: "text-[#5D3289]",
      borderHover: "hover:border-[#7B52AB]",
      textHover: "hover:text-[#5D3289]",
      ring: "focus:ring-[#5D3289]/10",
      focusBorder: "focus:border-[#5D3289]"
    },
    ocean: {
      bg: "bg-[#0369a1]",
      gradient: "from-[#075985] via-[#0369a1] to-[#0284c7]",
      text: "text-[#0369a1]",
      borderHover: "hover:border-[#0284c7]",
      textHover: "hover:text-[#0369a1]",
      ring: "focus:ring-[#0369a1]/10",
      focusBorder: "focus:border-[#0369a1]"
    },
    forest: {
      bg: "bg-[#15803d]",
      gradient: "from-[#166534] via-[#15803d] to-[#16a34a]",
      text: "text-[#15803d]",
      borderHover: "hover:border-[#16a34a]",
      textHover: "hover:text-[#15803d]",
      ring: "focus:ring-[#15803d]/10",
      focusBorder: "focus:border-[#15803d]"
    },
    rose: {
      bg: "bg-[#be123c]",
      gradient: "from-[#9f1239] via-[#be123c] to-[#e11d48]",
      text: "text-[#be123c]",
      borderHover: "hover:border-[#e11d48]",
      textHover: "hover:text-[#be123c]",
      ring: "focus:ring-[#be123c]/10",
      focusBorder: "focus:border-[#be123c]"
    }
  };

  const currentTheme = themes[formData.uiTheme] || themes.purple;

  const { login } = useContext(AuthContext);

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

  const handleArrayChange = (category, index, value) => {
    const updatedArray = [...formData[category]];
    updatedArray[index] = value;
    setFormData({ ...formData, [category]: updatedArray });
  };

  const handleNestedChange = (category, field, value) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [field]: value
      }
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
      } else if (step < 5) {
        setStep(step + 1);
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
  };

  return (
    <div className={`min-h-screen bg-[#FDFCFE] flex flex-col items-center justify-center p-4 lg:p-6 font-sans selection:bg-gray-200 selection:${currentTheme.text}`}>

      {/* Background Ambient Glow (Dynamic based on theme) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.08] blur-[120px] ${currentTheme.bg}`}></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-400 rounded-full opacity-[0.06] blur-[100px]"></div>
      </div>

      {/* Header */}
      <div className='w-full max-w-6xl flex justify-between items-center mb-6 lg:mb-8 px-2 sm:px-4 z-10'>
        <div className='flex items-center gap-3 cursor-pointer group' onClick={() => window.location.reload()}>
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
            {currentState === 'Sign Up' ? 'Already a member?' : 'New to Unisoul?'}
          </span>
          <button
            onClick={toggleState}
            className={`px-7 py-2.5 border border-gray-200 rounded-full font-bold text-gray-700 ${currentTheme.borderHover} ${currentTheme.textHover} transition-all bg-white shadow-sm active:scale-95 cursor-pointer`}
          >
            {currentState === 'Sign Up' ? 'Log In' : 'Join Now'}
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className='w-full max-w-6xl bg-white rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] flex overflow-hidden min-h-[720px] border border-gray-50 z-10'>

        {/* Left Side: Visual Experience */}
        <div className='hidden lg:flex lg:w-5/12 relative overflow-hidden'>
          <img
            src={`./assets/hero${step <= 3 ? step : 1}.jpg`} // Failsafes to hero1.jpg
            alt='Hero Connection'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-105'
          />

          <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.gradient} mix-blend-multiply opacity-60 transition-colors duration-700`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent"></div>

          <div className='absolute bottom-14 left-12 right-12 text-white'>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold mb-6 uppercase tracking-widest shadow-xl">
              <span className={`w-2 h-2 rounded-full bg-white animate-pulse`}></span>
              Join the circle
            </div>

            <h2 className='text-5xl font-bold leading-[1.1] mb-5 tracking-tight'>
              Where Souls <br /><span className="text-white/80 italic font-serif font-light pr-1">Truly</span> Align.
            </h2>

            <p className='text-white/80 font-medium max-w-xs leading-relaxed text-sm'>
              An inclusive space designed for neurodiverse and neurotypical hearts to find harmony and authentic connections.
            </p>

            {currentState === 'Sign Up' && (
              <div className='flex gap-2.5 mt-10'>
                {[1, 2, 3, 4, 5].map((i) => (
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
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-6 w-full max-w-[440px] my-auto'>
            {/* Heading Section */}
            <div className='mb-2'>
              {currentState === 'Sign Up' && step > 1 && (
                <button
                  type='button'
                  onClick={() => setStep(step - 1)}
                  className={`mb-4 flex items-center gap-2 text-[11px] font-bold ${currentTheme.text} uppercase tracking-widest hover:translate-x-[-4px] transition-transform w-fit`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  Back
                </button>
              )}

              <h3 className='text-3xl font-bold text-gray-900 tracking-tight mb-2'>
                {currentState === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
              </h3>

              <p className='text-gray-400 text-sm font-medium'>
                {currentState === 'Sign Up'
                  ? `Step ${step} of 5 — ${step === 1 ? 'Security & Access' : step === 2 ? 'Personal Details' : step === 3 ? 'Identity & Senses' : step === 4 ? 'Favorites & Astro' : 'Dating Goals'}`
                  : 'Enter your credentials to access your profile.'}
              </p>
            </div>

            {/* Social Login (Step 1 only) */}
            {(currentState === 'Login' || step === 1) && (
              <div className='space-y-5'>
                <button
                  type='button'
                  onClick={handleGoogleSignIn}
                  className='flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98] cursor-pointer'
                >
                  <img src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg' className='w-5 h-5' alt='Google' />
                  Continue with Google
                </button>

                <div className='relative flex items-center justify-center py-2'>
                  <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-gray-100'></div></div>
                  <span className='relative px-4 text-[10px] text-gray-400 bg-white uppercase font-bold tracking-[0.2em]'>Or use email</span>
                </div>
              </div>
            )}

            {/* Form Fields container */}
            <div className='space-y-5'>

              {/* Step 1: Credentials */}
              {(currentState === 'Login' || step === 1) && (
                <div className='space-y-5 animate-in fade-in duration-500'>
                  <InputField theme={currentTheme} label='Email Address' type='email' name='email' value={formData.email} onChange={handleChange} placeholder='name@domain.com' />
                  <InputField theme={currentTheme} label='Password' type='password' name='password' value={formData.password} onChange={handleChange} placeholder='••••••••' />
                  {currentState === 'Sign Up' && (
                    <InputField theme={currentTheme} label='Confirm Password' type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='••••••••' />
                  )}
                </div>
              )}

              {/* Step 2: Personal Info (Expanded with Age & Pronouns) */}
              {currentState === 'Sign Up' && step === 2 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-5'>
                  <InputField theme={currentTheme} label='Full Name' type='text' name='fullName' value={formData.fullName} onChange={handleChange} placeholder='Jane Doe' />
                  <InputField theme={currentTheme} label='Mobile Number' type='tel' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} placeholder='+1 (555) 000-0000' />

                  <div className="grid grid-cols-2 gap-4">
                    <InputField theme={currentTheme} label='Date of Birth' type='date' name='birthday' value={formData.birthday} onChange={handleChange} />
                    <InputField theme={currentTheme} label='What is your Age?' type='number' name='age' value={formData.age} onChange={handleChange} placeholder='e.g. 25' min="18" max="100" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField theme={currentTheme} label='Gender' name='gender' value={formData.gender} onChange={handleChange} options={['Woman', 'Man', 'Non-binary', 'Other']} />
                    <SelectField theme={currentTheme} label='Pronouns' name='pronouns' value={formData.pronouns} onChange={handleChange} options={['She/Her', 'He/Him', 'Prefer not to say']} />
                  </div>
                </div>
              )}

              {/* Step 3: Identity & Sensitivities */}
              {currentState === 'Sign Up' && step === 3 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-6'>
                  <TagSelector
                    theme={currentTheme} label='Primary Neurotype' options={neuroOptions} selected={formData.primaryNeurotype}
                    onToggle={(option) => {
                      let updated = [...formData.primaryNeurotype];
                      if (updated.includes(option)) updated = updated.filter(item => item !== option);
                      else updated.push(option);
                      setFormData({ ...formData, primaryNeurotype: updated });
                    }}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField theme={currentTheme} label='Diagnosis Status' name='status' value={formData.status} onChange={handleChange} options={['Formally Diagnosed', 'Self-diagnosed', 'Not Diagnosed', 'Prefer not to say']} />
                    <SelectField theme={currentTheme} label='MBTI Type' name='mbtiType' value={formData.mbtiType} onChange={handleChange} options={['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP', 'Unsure']} />
                  </div>

                  <TagSelector
                    theme={currentTheme} label='Sensory Sensitivities' options={sensoryOptions} selected={formData.sensorySensitivities}
                    onToggle={(option) => {
                      let updated = [...formData.sensorySensitivities];
                      if (updated.includes(option)) updated = updated.filter(item => item !== option);
                      else updated.push(option);
                      setFormData({ ...formData, sensorySensitivities: updated });
                    }}
                  />

                  <TextAreaField theme={currentTheme} label='Tell us your story (Bio)' name='bio' value={formData.bio} onChange={handleChange} placeholder='What makes you unique?' rows={3} />
                </div>
              )}

              {/* Step 4: Express Yourself (Hobbies, Movies, Artists, Natal Chart) */}
              {currentState === 'Sign Up' && step === 4 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-6'>

                  <ThreeItemInput theme={currentTheme} label="Top 3 Favorite Artists" items={formData.topArtists} onChange={(i, v) => handleArrayChange('topArtists', i, v)} placeholderPrefix="Artist" />
                  <ThreeItemInput theme={currentTheme} label="Top 3 Fun Hobbies" items={formData.topHobbies} onChange={(i, v) => handleArrayChange('topHobbies', i, v)} placeholderPrefix="Hobby" />
                  <ThreeItemInput theme={currentTheme} label="Top 3 Movies" items={formData.topMovies} onChange={(i, v) => handleArrayChange('topMovies', i, v)} placeholderPrefix="Movie" />

                  {/* Natal Chart Opt-In */}
                  <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border ${formData.optInNatalChart ? `${currentTheme.bg} border-transparent` : 'bg-white border-gray-300'} flex items-center justify-center transition-colors`}>
                        {formData.optInNatalChart && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                      </div>
                      <input type="checkbox" checked={formData.optInNatalChart} onChange={(e) => setFormData({ ...formData, optInNatalChart: e.target.checked })} className="hidden" />
                      <span className={`text-sm font-bold ${formData.optInNatalChart ? currentTheme.text : 'text-gray-600'} transition-colors`}>Add Natal Chart Information</span>
                    </label>

                    {formData.optInNatalChart && (
                      <div className="mt-4 grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-2">
                        <InputField theme={currentTheme} label='Sun Sign' type='text' value={formData.natalChart.sun} onChange={(e) => handleNestedChange('natalChart', 'sun', e.target.value)} placeholder='e.g. Leo' />
                        <InputField theme={currentTheme} label='Moon Sign' type='text' value={formData.natalChart.moon} onChange={(e) => handleNestedChange('natalChart', 'moon', e.target.value)} placeholder='e.g. Pisces' />
                        <InputField theme={currentTheme} label='Rising Sign' type='text' value={formData.natalChart.rising} onChange={(e) => handleNestedChange('natalChart', 'rising', e.target.value)} placeholder='e.g. Taurus' />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 5: Intentions & Theme Setup */}
              {currentState === 'Sign Up' && step === 5 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-6'>
                  <SelectField
                    theme={currentTheme} label='What are you looking for?' name='intentions' value={formData.intentions} onChange={handleChange}
                    options={['Long-term relationship', 'Short-term dating', 'Ethical non-monogamy', 'Platonic connection', 'Friendship', 'Marriage', 'Still figuring it out']}
                  />

                  <SelectField theme={currentTheme} label='How comfortable are you socializing?' name='socialComfort' value={formData.socialComfort} onChange={handleChange}
                    options={['Very comfortable – I love meeting new people', 'Comfortable – especially in small settings', 'Takes me a little while to open up', 'Prefer one-on-one interactions', 'Very shy or introverted']}
                  />

                  <TagSelector
                    theme={currentTheme} label='Preferred Match' options={preferredMatchOptions} selected={formData.preferredMatch}
                    onToggle={(option) => {
                      let updated = [...formData.preferredMatch];
                      if (updated.includes(option)) updated = updated.filter(item => item !== option);
                      else updated.push(option);
                      setFormData({ ...formData, preferredMatch: updated });
                    }}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField theme={currentTheme} label='Attachment Style' name='attachmentStyle' value={formData.attachmentStyle} onChange={handleChange} options={['Secure', 'Anxious', 'Avoidant', 'Disorganized', 'Unsure']} />
                    <SelectField theme={currentTheme} label='Belief System' name='beliefSystem' value={formData.beliefSystem} onChange={handleChange} options={['Atheist', 'Agnostic', 'Spiritual', 'Religious', 'Other']} />
                  </div>

                  {/* UI Theme Customization */}
                  <div className="pt-2 border-t border-gray-100">
                    <label className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 block mb-3'>
                      Customize Your App Color Theme
                    </label>
                    <div className="flex gap-4">
                      {Object.keys(themes).map(themeKey => (
                        <button
                          key={themeKey}
                          type="button"
                          onClick={() => setFormData({ ...formData, uiTheme: themeKey })}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${themes[themeKey].bg} ${formData.uiTheme === themeKey ? 'ring-4 ring-offset-2 ring-gray-300 scale-110' : 'opacity-80 hover:scale-105'}`}
                        >
                          {formData.uiTheme === themeKey && <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={loading}
              className={`mt-4 py-4 w-full ${currentTheme.bg} text-white rounded-2xl font-bold text-base shadow-lg hover:brightness-90 hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer`}
            >
              {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In to Unisoul' : step === 5 ? 'Complete Profile' : 'Continue to Next Step'}
            </button>

            <p className='text-[11px] text-gray-400 text-center px-4 leading-relaxed font-medium mt-2'>
              By continuing, you agree to our <span className={`${currentTheme.text} font-bold cursor-pointer hover:underline`}>Terms of Service</span> & <span className={`${currentTheme.text} font-bold cursor-pointer hover:underline`}>Privacy Policy</span>.
            </p>
          </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e5e7eb; border-radius: 20px; }
      `}} />
    </div>
  );
};

/* --- Refined Reusable Components (Theme Aware) --- */

const InputField = ({ label, theme, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className={`text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-5 py-3.5 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none transition-all text-sm font-medium placeholder:text-gray-300`}
      required={props.required !== false}
    />
  </div>
);

const SelectField = ({ label, options, theme, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className={`text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <div className="relative">
      <select
        {...props}
        className={`w-full px-5 py-3.5 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none transition-all text-sm font-medium appearance-none cursor-pointer`}
        required
      >
        <option value="" disabled hidden>Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label, theme, rows = 4, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className={`text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <textarea
      rows={rows}
      {...props}
      className={`w-full px-5 py-3.5 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none resize-none transition-all text-sm font-medium placeholder:text-gray-300`}
      required
    />
  </div>
);

const TagSelector = ({ label, options, selected, onToggle, theme }) => (
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
                ? `${theme.bg} text-white border-transparent shadow-md -translate-y-[1px]`
                : `bg-white text-gray-600 border-gray-200 ${theme.borderHover} ${theme.textHover}`
              }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);

const ThreeItemInput = ({ label, items, onChange, placeholderPrefix, theme }) => (
  <div className='flex flex-col gap-2 group'>
    <label className={`text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <div className='flex flex-col gap-2'>
      {[0, 1, 2].map((index) => (
        <div key={index} className="relative flex items-center">
          <div className="absolute left-4 text-xs font-bold text-gray-300">{index + 1}.</div>
          <input
            type="text"
            value={items[index]}
            onChange={(e) => onChange(index, e.target.value)}
            placeholder={`${placeholderPrefix} name...`}
            className={`w-full pl-9 pr-5 py-3 bg-gray-50/70 border border-gray-100 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none transition-all text-sm font-medium placeholder:text-gray-300`}
            required={index === 0} // Only first item is strictly required
          />
        </div>
      ))}
    </div>
  </div>
);

export default LoginPage;