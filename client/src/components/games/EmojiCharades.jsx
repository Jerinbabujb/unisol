import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../context/GameContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";
import Invite from "./invite";

const EmojiCharades = () => {
  const { emojiCharades, emojiAnswers, emojiQuestions,getUser,
        selectedUser,postAnswer } = useContext(GameContext);
  const {authUser} = useContext(AuthContext);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [answered, setAnswered] = useState([]);

const navigate= useNavigate();
  const handleBack=()=>{
    navigate("/messages");
  }
  const location = useLocation();
  const selectedUserId= location.state?.selectedUserId;

  useEffect(() => {
    emojiCharades();
    getUser(selectedUserId);
      }, []);


const checkAnswer = (correctAnswer, userAnswer,index) => {
  let newScore = score;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    newScore = score + 1;
    setScore(newScore);
  } 

  setAnswered(prev=>{
    const updated=[...prev];
    updated[index]=true;
    return updated;
  })
  sendAnswer(userAnswer, newScore);
};
const sendAnswer = async (userAnswer, updatedScore) => {
  await postAnswer(selectedUserId, userAnswer, updatedScore);
};

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-600 to-indigo-800 text-white px-3 py-4 sm:p-6">

  {/* Header */}
  <div className="w-full max-w-5xl relative mb-6 flex items-center justify-center">
    <button
      onClick={handleBack}
      className="absolute left-0 p-2 text-white hover:text-gray-300 transition"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  </div>

  {/* Title */}
  <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-wide text-center">
    🎮 Emoji Charades
  </h2>

  {/* Main Container */}
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">

    {/* Your Section */}
    <div>
      <div className="mb-4 text-sm sm:text-xl bg-white/20 px-4 py-2 rounded-full text-center">
        {authUser.fullName}: <span className="font-bold">{score}</span>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {emojiQuestions.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow border border-white/20"
          >
            <p className="text-2xl sm:text-3xl text-center mb-3 sm:mb-4">
              {item.questions}
            </p>

            <input
              type="text"
              placeholder="Your answer..."
              disabled={answered[index]}
              value={answer[index]||''}
              onChange={(e) => {const newAswer=[...answer];
                newAswer[index]=e.target.value;
                setAnswer(newAswer);
              }}
              className="w-full px-3 py-2 rounded-lg text-black outline-none mb-3 text-sm sm:text-base"
            />

            <button
              onClick={() => checkAnswer(item.answer,answer[index],score,index)}
              disabled={answered[index]}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition text-sm sm:text-base"
            >
              Submit Answer
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Other Player Section */}
    <div>
      <div className="mb-4 text-sm sm:text-xl bg-white/20 px-4 py-2 rounded-full text-center">
        {selectedUser?.fullName} : <span className="font-bold">{score}</span>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {emojiQuestions.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow border border-white/20"
          >
            <p className="text-2xl sm:text-3xl text-center mb-3 sm:mb-4">
              {item.questions}
            </p>

            <input
              type="text"
              placeholder={`Waiting for ${selectedUser?.fullName}...`}
              disabled
              className="w-full px-3 py-2 rounded-lg text-black outline-none bg-gray-200 text-sm sm:text-base"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
};

export default EmojiCharades;