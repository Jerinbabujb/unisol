import { createContext, useContext } from "react";
import { ChatContext } from "./ChatContext";

export const GameContext= createContext();

const {selectedUser} = useContext(ChatContext);

export const GameProvider=({children})=>{

    value=[

    ]
    return(
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}
