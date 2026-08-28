import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import assets from '../assets';
import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';

// Import our modular quiz components
import QuizModal from '../modal/QuizModal';
import { quizConfigs } from '../lib/quizConfigs';

const LoginPage = () => {
  const googleLoginRef = useRef(false);

  const [currentState, setCurrentState] = useState('Sign Up');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState(null);

  // Interactive mouse position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '',
    birthday: '', age: '', gender: '', pronouns: '', bio: '',
    googleId: '', mobileNumber: '', primaryNeurotype: [], status: '',
    sensorySensitivities: [], prefferGender: '', preferredMatch: [],
    mbtiType: '', attachmentStyle: '', loveLanguage: '',humanDesign: '', beliefSystem: '',
    intentions: '', experienceLevel: '', socialComfort: '',
    topArtists: ['', '', ''], topMovies: ['', '', ''], topHobbies: ['', '', ''],
    optInNatalChart: false, natalChart: { sun: '', moon: '', rising: '' },
    uiTheme: 'purple', horoscope: '',cityName:"", birthTime:""
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

  // Dynamic Theme Definitions - Added Light Background Gradients
  const themes = {
    purple: {
      bg: "bg-[#5D3289]",
      gradient: "from-[#4B2471] via-[#5D3289] to-[#7B52AB]",
      bgGradient: "from-purple-100 via-fuchsia-50 to-indigo-100",
      glow: "bg-purple-400",
      text: "text-[#5D3289]",
      borderHover: "hover:border-[#7B52AB]",
      textHover: "hover:text-[#5D3289]",
      ring: "focus:ring-[#5D3289]/10",
      focusBorder: "focus:border-[#5D3289]"
    },
    ocean: {
      bg: "bg-[#0369a1]",
      gradient: "from-[#075985] via-[#0369a1] to-[#0284c7]",
      bgGradient: "from-sky-100 via-blue-50 to-cyan-100",
      glow: "bg-blue-400",
      text: "text-[#0369a1]",
      borderHover: "hover:border-[#0284c7]",
      textHover: "hover:text-[#0369a1]",
      ring: "focus:ring-[#0369a1]/10",
      focusBorder: "focus:border-[#0369a1]"
    },
    forest: {
      bg: "bg-[#15803d]",
      gradient: "from-[#166534] via-[#15803d] to-[#16a34a]",
      bgGradient: "from-green-100 via-emerald-50 to-teal-100",
      glow: "bg-green-400",
      text: "text-[#15803d]",
      borderHover: "hover:border-[#16a34a]",
      textHover: "hover:text-[#15803d]",
      ring: "focus:ring-[#15803d]/10",
      focusBorder: "focus:border-[#15803d]"
    },
    rose: {
      bg: "bg-[#be123c]",
      gradient: "from-[#9f1239] via-[#be123c] to-[#e11d48]",
      bgGradient: "from-rose-100 via-red-50 to-pink-100",
      glow: "bg-rose-400",
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
        if (result?.user) console.log('Redirect result caught:', result.user.email);
      })
      .catch((error) => console.error('Redirect Error:', error));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && googleLoginRef.current) {
        setLoading(true);
        const googleData = { email: user.email, fullName: user.displayName, googleId: user.uid };
        setFormData((prev) => ({ ...prev, ...googleData }));
        if (currentState === 'Sign Up') setStep(2);
        else await login('login', { googleId: user.uid, email: user.email });
        
        googleLoginRef.current = false;
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [currentState, login]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleArrayChange = (category, index, value) => {
    const updatedArray = [...formData[category]];
    updatedArray[index] = value;
    setFormData({ ...formData, [category]: updatedArray });
  };
  const handleNestedChange = (category, field, value) => {
    setFormData({ ...formData, [category]: { ...formData[category], [field]: value } });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (currentState === 'Sign Up') {
      if (step === 1) {
        if (formData.password !== formData.confirmPassword) return alert('Passwords do not match!');
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
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 lg:p-6 font-sans selection:bg-gray-900 selection:text-white relative overflow-hidden transition-colors duration-1000 bg-gradient-to-br ${currentTheme.bgGradient}`}>

      {/* Colorful Animated & Interactive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Interactive Mouse Orb */}
        <div 
          className={`absolute rounded-full opacity-40 blur-[100px] transition-all duration-300 ease-out ${currentTheme.glow}`}
          style={{
            width: '40vw',
            height: '40vw',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Floating Ambient Orbs */}
        <div className={`absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-30 blur-[120px] ${currentTheme.bg} floating-orb-slow`}></div>
        <div className={`absolute bottom-[5%] -right-[5%] w-[45%] h-[45%] rounded-full opacity-30 blur-[120px] bg-white floating-orb-fast`}></div>
      </div>

      {/* Header */}
      <div className='w-full max-w-6xl flex justify-between items-center mb-6 lg:mb-8 px-2 sm:px-4 z-10'>
        <div className='flex items-center gap-3 cursor-pointer group' onClick={() => window.location.reload()}>
          <img src={assets.logo} className='w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md' alt='Unisoul Logo' />
          <h1 className='text-2xl font-bold text-gray-900 tracking-tight drop-shadow-sm'>
            Unisoul
          </h1>
        </div>

        <div className='flex items-center gap-5 text-sm'>
          <span className='text-gray-700 font-medium hidden sm:block tracking-wide drop-shadow-sm'>
            {currentState === 'Sign Up' ? 'Already a member?' : 'New to Unisoul?'}
          </span>
          <button
            onClick={toggleState}
            className={`px-7 py-2.5 border border-white/40 rounded-full font-bold text-gray-800 ${currentTheme.borderHover} ${currentTheme.textHover} transition-all bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-white active:scale-95 cursor-pointer`}
          >
            {currentState === 'Sign Up' ? 'Log In' : 'Join Now'}
          </button>
        </div>
      </div>

      {/* Main Glassmorphism Card */}
      <div className='w-full max-w-6xl bg-white/90 backdrop-blur-2xl rounded-[48px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex overflow-hidden min-h-[720px] border border-white/50 z-10 relative transition-all duration-700 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)]'>

        {/* Left Side: Visual Experience */}
        <div className='hidden lg:flex lg:w-5/12 relative overflow-hidden group'>
          <img
            src={`./assets/hero${step <= 3 ? step : 1}.jpg`}
            alt='Hero Connection'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110'
          />

          <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.gradient} mix-blend-multiply opacity-70 transition-colors duration-700`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent opacity-90"></div>

          <div className='absolute bottom-14 left-12 right-12 text-white'>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold mb-6 uppercase tracking-widest shadow-xl">
              <span className={`w-2 h-2 rounded-full bg-white animate-pulse`}></span>
              Join the circle
            </div>

            <h2 className='text-5xl font-bold leading-[1.1] mb-5 tracking-tight'>
              Where Souls <br /><span className="text-white/80 italic font-serif font-light pr-1">Truly</span> Align.
            </h2>

            <p className='text-white/80 font-medium max-w-xs leading-relaxed text-sm drop-shadow-sm'>
              An inclusive space designed for neurodiverse and neurotypical hearts to find harmony and authentic connections.
            </p>

            {currentState === 'Sign Up' && (
              <div className='flex gap-2.5 mt-10'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${step >= i
                      ? 'w-10 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                      : 'w-4 bg-white/30'
                      }`}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className='w-full lg:w-7/12 flex flex-col items-center px-6 sm:px-12 lg:px-20 py-12 overflow-y-auto custom-scrollbar bg-transparent'>
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-6 w-full max-w-[440px] my-auto'>
            {/* Heading Section */}
            <div className='mb-2'>
              {currentState === 'Sign Up' && step > 1 && (
                <button
                  type='button'
                  onClick={() => setStep(step - 1)}
                  className={`mb-4 flex items-center gap-2 text-[11px] font-bold ${currentTheme.text} uppercase tracking-widest hover:translate-x-[-4px] transition-transform w-fit cursor-pointer`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  Back
                </button>
              )}

              <h3 className='text-3xl font-extrabold text-gray-900 tracking-tight mb-2'>
                {currentState === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
              </h3>

              <p className='text-gray-500 text-sm font-medium'>
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
                  className={`flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-700 bg-white/50 hover:bg-white ${currentTheme.borderHover} hover:shadow-md transition-all active:scale-[0.98] cursor-pointer backdrop-blur-sm`}
                >
                  <img src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg' className='w-5 h-5' alt='Google' />
                  Continue with Google
                </button>

                <div className='relative flex items-center justify-center py-2'>
                  <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-gray-200'></div></div>
                  <span className='relative px-4 text-[10px] text-gray-500 bg-white/80 backdrop-blur-sm uppercase font-bold tracking-[0.2em] rounded-full'>Or use email</span>
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

              {/* Step 2: Personal Info */}
              {currentState === 'Sign Up' && step === 2 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-5'>
                                      <SelectField theme={currentTheme} label='Pronouns' name='pronouns' value={formData.pronouns} onChange={handleChange} options={['She/Her', 'He/Him', 'They/Them', 'Prefer not to say']} />

                  <InputField theme={currentTheme} label='Full Name' type='text' name='fullName' value={formData.fullName} onChange={handleChange} placeholder='Jane Doe' />
                  <InputField theme={currentTheme} label='Mobile Number' type='tel' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} placeholder='+1 (555) 000-0000' />

                  <div className="grid grid-cols-2 gap-4">
                    <InputField theme={currentTheme} label='Date of Birth' type='date' name='birthday' value={formData.birthday} onChange={handleChange} />
                    <InputField theme={currentTheme} label='Age' type='number' name='age' value={formData.age} onChange={handleChange} placeholder='e.g. 25' min="18" max="100" />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <SelectField theme={currentTheme} label='Gender' name='gender' value={formData.gender} onChange={handleChange} options={['Woman', 'Man', 'Non-binary', 'Other']} />
                  </div>
                  {/* Natal Chart Opt-In */}
                  <div className="bg-white/60 p-4 rounded-2xl border border-gray-200 shadow-sm backdrop-blur-md">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border ${formData.optInNatalChart ? `${currentTheme.bg} border-transparent` : 'bg-white border-gray-300'} flex items-center justify-center transition-colors shadow-inner`}>
                        {formData.optInNatalChart && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                      </div>
                      <input type="checkbox" checked={formData.optInNatalChart} onChange={(e) => setFormData({ ...formData, optInNatalChart: e.target.checked })} className="hidden" />
                      <span className={`text-sm font-bold ${formData.optInNatalChart ? currentTheme.text : 'text-gray-600'} transition-colors`}>Add Natal Chart Information (optional)</span>
                    </label>

                    {formData.optInNatalChart && (
                      <div className="mt-4 grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-2">
                       <InputField 
        theme={currentTheme} 
        label='Birth Time' 
        name='birthTime' 
        value={formData.birthTime} 
        onChange={handleChange} 
        placeholder="21:20"
      />
      <InputField 
        theme={currentTheme} 
        label='Birth Place' 
        name='cityName' 
        value={formData.cityName} 
        onChange={handleChange} 
        placeholder="London"
      />
                      </div>
                    )}
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

                    <div className="flex flex-col gap-1 w-full">
                      <SelectField theme={currentTheme} label='MBTI Type' name='mbtiType' value={formData.mbtiType} onChange={handleChange} options={['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP', 'Unsure']} />
                      <button type="button" onClick={() => setActiveQuiz('mbti')} className={`text-[11px] font-bold mt-1 text-left ${currentTheme.text} hover:underline transition-all w-fit cursor-pointer`}>
                        Not sure? Take a quick quiz
                      </button>
                    </div>
                  </div>
                                      <SelectField theme={currentTheme} label='Religious belief' name='beliefSystem' value={formData.beliefSystem} onChange={handleChange} options={['Religious', 'Spiritual', 'Not']} />

{/* Add this inside the Step 3 container, below the MBTI/Diagnosis grid */}
  <div className="grid grid-cols-1 gap-4 mt-2">
    <div className="flex flex-col gap-1 w-full">
      <SelectField 
        theme={currentTheme} 
        label='Human Design Energy Type' 
        name='humanDesign' 
        value={formData.humanDesign} 
        onChange={handleChange} 
        options={['Manifestor', 'Generator', 'Manifesting Generator', 'Projector', 'Reflector', 'Unsure']} 
      />
      <button 
        type="button" 
        onClick={() => setActiveQuiz('humanDesign')} 
        className={`text-[11px] font-bold mt-1 text-left ${currentTheme.text} hover:underline transition-all w-fit cursor-pointer`}
      >
        Discover your energy type
      </button>
    </div>
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

              {/* Step 4: Express Yourself */}
              {currentState === 'Sign Up' && step === 4 && (
                <div className='animate-in fade-in slide-in-from-right-8 duration-500 space-y-6'>
                  <ThreeItemInput theme={currentTheme} label="Top 3 Favorite Artists" items={formData.topArtists} onChange={(i, v) => handleArrayChange('topArtists', i, v)} placeholderPrefix="Artist" />
                  <ThreeItemInput theme={currentTheme} label="Top 3 Fun Hobbies" items={formData.topHobbies} onChange={(i, v) => handleArrayChange('topHobbies', i, v)} placeholderPrefix="Hobby" />
                  <ThreeItemInput theme={currentTheme} label="Top 3 Movies" items={formData.topMovies} onChange={(i, v) => handleArrayChange('topMovies', i, v)} placeholderPrefix="Movie" />

                  
                </div>
              )}

              {/* Step 5: Intentions & Psychology */}
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
                    <div className="flex flex-col gap-1 w-full">
                      <SelectField theme={currentTheme} label='Attachment Style' name='attachmentStyle' value={formData.attachmentStyle} onChange={handleChange} options={['Secure', 'Anxious', 'Avoidant', 'Disorganized', 'Unsure']} />
                      <button type="button" onClick={() => setActiveQuiz('attachmentStyle')} className={`text-[11px] font-bold mt-1 text-left ${currentTheme.text} hover:underline transition-all w-fit cursor-pointer`}>
                        Find your style
                      </button>
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                      <SelectField theme={currentTheme} label='Love Language' name='loveLanguage' value={formData.loveLanguage} onChange={handleChange} options={['Words of Affirmation', 'Quality Time', 'Receiving Gifts', 'Acts of Service', 'Physical Touch', 'Unsure']} />
                      <button type="button" onClick={() => setActiveQuiz('loveLanguage')} className={`text-[11px] font-bold mt-1 text-left ${currentTheme.text} hover:underline transition-all w-fit cursor-pointer`}>
                        Find your language
                      </button>
                    </div>
                  </div>

                  {/* UI Theme Customization */}
                  <div className="pt-4 border-t border-gray-200">
                    <label className='text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1 block mb-3'>
                      Customize Your App Color Theme
                    </label>
                    <div className="flex gap-4">
                      {Object.keys(themes).map(themeKey => (
                        <button
                          key={themeKey}
                          type="button"
                          onClick={() => setFormData({ ...formData, uiTheme: themeKey })}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md ${themes[themeKey].bg} ${formData.uiTheme === themeKey ? 'ring-4 ring-offset-2 ring-white scale-110' : 'opacity-80 hover:scale-110 cursor-pointer hover:shadow-lg'}`}
                        >
                          {formData.uiTheme === themeKey && <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>}
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
              className={`mt-4 py-4 w-full bg-gradient-to-r ${currentTheme.gradient} text-white rounded-2xl font-bold text-base shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer`}
            >
              {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In to Unisoul' : step === 5 ? 'Complete Profile' : 'Continue to Next Step'}
            </button>

            <p className='text-[11px] text-gray-500 text-center px-4 leading-relaxed font-medium mt-2'>
              By continuing, you agree to our <span className={`${currentTheme.text} font-bold cursor-pointer hover:underline`}>Terms of Service</span> & <span className={`${currentTheme.text} font-bold cursor-pointer hover:underline`}>Privacy Policy</span>.
            </p>
          </form>
        </div>

        <QuizModal
          isOpen={!!activeQuiz}
          onClose={() => setActiveQuiz(null)}
          theme={currentTheme}
          config={activeQuiz ? quizConfigs[activeQuiz] : null}
          onApply={(calculatedResult) => {
            setFormData({ ...formData, [activeQuiz]: calculatedResult });
            setActiveQuiz(null);
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(0.95); }
        }
        .floating-orb-slow { animation: float-slow 12s ease-in-out infinite; }
        .floating-orb-fast { animation: float-fast 8s ease-in-out infinite; }
      `}} />
    </div>
  );
};

/* --- Reusable Form Components --- */

const InputField = ({ label, theme, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className={`text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-5 py-3.5 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none transition-all shadow-sm hover:border-gray-300 text-sm font-medium placeholder:text-gray-400`}
      required={props.required !== false}
    />
  </div>
);

const SelectField = ({ label, options, theme, ...props }) => (
  <div className='flex flex-col gap-1.5 group w-full'>
    <label className={`text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <div className="relative">
      <select
        {...props}
        className={`w-full px-5 py-3.5 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none transition-all shadow-sm hover:border-gray-300 text-sm font-medium appearance-none cursor-pointer`}
        required
      >
        <option value="" disabled hidden>Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label, theme, rows = 4, ...props }) => (
  <div className='flex flex-col gap-1.5 group'>
    <label className={`text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <textarea
      rows={rows}
      {...props}
      className={`w-full px-5 py-3.5 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none resize-none transition-all shadow-sm hover:border-gray-300 text-sm font-medium placeholder:text-gray-400`}
      required
    />
  </div>
);

const TagSelector = ({ label, options, selected, onToggle, theme }) => (
  <div className='flex flex-col gap-2.5'>
    <label className='text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1'>
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
            className={`px-4 py-2 rounded-full border text-xs font-bold transition-all duration-200 cursor-pointer backdrop-blur-sm
            ${isSelected
                ? `${theme.bg} text-white border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.15)] -translate-y-[1px]`
                : `bg-white/60 text-gray-700 border-gray-200 ${theme.borderHover} ${theme.textHover} hover:bg-white`
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
    <label className={`text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1 group-focus-within:${theme.text} transition-colors`}>
      {label}
    </label>
    <div className='flex flex-col gap-2'>
      {[0, 1, 2].map((index) => (
        <div key={index} className="relative flex items-center">
          <div className={`absolute left-4 text-xs font-bold ${items[index] ? theme.text : 'text-gray-400'} transition-colors`}>{index + 1}.</div>
          <input
            type="text"
            value={items[index]}
            onChange={(e) => onChange(index, e.target.value)}
            placeholder={`${placeholderPrefix} name...`}
            className={`w-full pl-9 pr-5 py-3 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl focus:bg-white ${theme.focusBorder} focus:ring-4 ${theme.ring} outline-none transition-all shadow-sm hover:border-gray-300 text-sm font-medium placeholder:text-gray-400`}
            required={index === 0}
          />
        </div>
      ))}
    </div>
  </div>
);

export default LoginPage;