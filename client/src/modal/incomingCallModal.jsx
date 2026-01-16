import React, { useContext } from "react";
import { CallContext } from "../../context/CallContext";

const IncomingCallModal = () => {
  // 👇 THIS is where it goes
  const { call, answerCall, rejectCall } = useContext(CallContext);

  if (!call.isReceivingCall) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
      <div className="bg-white rounded-3xl p-8 w-80 text-center shadow-xl">
        <h2 className="text-xl font-bold">{call.name}</h2>
        <p className="text-gray-500 mb-6">
          Incoming {call.type} call…
        </p>

        <div className="flex justify-center gap-6">
          {/* ❌ DECLINE */}
          <button
            onClick={rejectCall}
            className="w-14 h-14 bg-red-500 rounded-full text-white text-xl"
          >
            ✕
          </button>

          {/* ✅ ACCEPT */}
          <button
            onClick={answerCall}
            className="w-14 h-14 bg-green-500 rounded-full text-white text-xl"
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomingCallModal;
