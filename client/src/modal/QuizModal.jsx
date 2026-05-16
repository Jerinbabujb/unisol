// src/components/QuizModal.jsx
import React, { useState, useEffect } from 'react';

const QuizModal = ({ isOpen, onClose, onApply, theme, config }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({});
    const [calculatedResult, setCalculatedResult] = useState('');

    // Reset quiz when opened or when config changes
    useEffect(() => {
        if (isOpen && config) {
            setCurrentQuestion(0);
            setCalculatedResult('');

            // Initialize scores to 0 based on all possible axes in the config
            const initialScores = {};
            config.questions.forEach(q => {
                q.options.forEach(opt => {
                    initialScores[opt.axis] = 0;
                });
            });
            setScores(initialScores);
        }
    }, [isOpen, config]);

    if (!isOpen || !config) return null;

    const handleAnswer = (axis) => {
        const updatedScores = { ...scores, [axis]: scores[axis] + 1 };
        setScores(updatedScores);

        if (currentQuestion < config.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Calculate final result using the specific config's logic
            const finalResult = config.calculateResult(updatedScores);
            setCalculatedResult(finalResult);
        }
    };

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#1A0B2E]/60 backdrop-blur-sm p-4 animate-in fade-in duration-300 rounded-[48px]">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300 max-h-[90%]">

                {/* Modal Header */}
                <div className={`px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 shrink-0`}>
                    <div>
                        <h4 className="font-bold text-gray-800 text-lg">{config.title}</h4>
                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest mt-0.5">{config.description}</p>
                    </div>
                    <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    {!calculatedResult ? (
                        <div className="space-y-6">
                            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                <span>{config.questions[currentQuestion].dichotomy}</span>
                                <span>{currentQuestion + 1} of {config.questions.length}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 leading-snug">
                                {config.questions[currentQuestion].text}
                            </h3>

                            <div className="space-y-3 mt-6">
                                {config.questions[currentQuestion].options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => handleAnswer(opt.axis)}
                                        className={`w-full text-left px-5 py-4 rounded-xl border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all font-medium text-gray-700 active:scale-[0.98] ${theme.focusBorder} outline-none cursor-pointer`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-6 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Result</p>
                                <h2 className={`text-4xl sm:text-5xl font-black ${theme.text} tracking-tighter`}>{calculatedResult}</h2>
                            </div>

                            <p className="text-gray-600 font-medium text-sm leading-relaxed px-4">
                                {config.getResultMessage(calculatedResult)}
                            </p>

                            <button
                                type="button"
                                onClick={() => onApply(calculatedResult)}
                                className={`w-full py-3.5 mt-4 ${theme.bg} text-white rounded-xl font-bold text-sm shadow-md hover:brightness-90 transition-all active:scale-[0.98] cursor-pointer`}
                            >
                                Apply to my Profile
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setCurrentQuestion(0);
                                    setCalculatedResult('');
                                }}
                                className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest cursor-pointer mt-4"
                            >
                                Retake Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizModal;