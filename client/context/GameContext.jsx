import { createContext, useContext, useState } from "react";
import { ChatContext } from "./ChatContext";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export const GameContext= createContext();




export const GameProvider=({children})=>{
    const [gamesLists,setGamesLists] = useState([]);
    const [emojiQuestions,setEmojiQuestions]= useState([]);
    const [emojiAnswers,setEmojiAnswers]= useState([]);
    const [selectedUser,setSelectedUser]=useState(null);

        const {axios}= useContext(AuthContext);
    

    const getGames=async()=>{
        try{
        const {data}= await axios.get('api/games/games-list');
        if(data.success){
            setGamesLists(data.games);
        }
    }
    catch(error){
            toast.error(error.message);
        }

    }


    const emojiCharades= async()=>{
        try{
            const {data}= await axios.get('api/games/emoji-charades-questions');
            if(data.success){
                console.log("data",data);
                setEmojiQuestions(data.questions);
                setEmojiAnswers(data.questions.answer);
                console.log("games questions and answers", data.questions[0].questions,data.questions[0].answer)
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }

    const getUser=async(userId)=>{
        try{
            const {data}= await axios.get('api/games/get-user',{params:{userId:userId}});
            if(data.success){
                console.log(data);
                setSelectedUser(data.user);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }

    const value={
        getGames,
        gamesLists,
        emojiCharades,
        emojiAnswers,
        emojiQuestions,
        getUser,
        selectedUser
    }
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}
