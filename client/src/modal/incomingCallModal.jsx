import React, { useContext } from 'react';
import { CallContext } from '../../context/CallContext';

const IncomingCallModal = () => {
    const { call, answerCall, endCall } = useContext(CallContext);

    if (!call.isReceivingCall || call.callAccepted) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md">
            <div className="bg-white rounded-[2.5rem] p-8 w-80 text-center shadow-2xl animate-bounce-subtle">
                <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    {call.type === 'video' ? '📽️' : '📞'}
                </div>
                <h2 className="text-xl font-bold text-slate-800">{call.name}</h2>
                <p className="text-gray-500 text-sm mb-8">Incoming {call.type} call...</p>
                
                <div className="flex justify-center gap-4">
                    <button onClick={endCall} className="w-14 h-14 bg-red-500 rounded-full text-white flex items-center justify-center text-xl">✕</button>
                    <button onClick={answerCall} className="w-14 h-14 bg-green-500 rounded-full text-white flex items-center justify-center text-xl">✓</button>
                </div>
            </div>
        </div>
    );
};

export default IncomingCallModal;