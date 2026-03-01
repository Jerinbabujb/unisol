import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {AuthContext} from './AuthContext';
import toast from "react-hot-toast";

export const ChatContext=createContext();


export const ChatProvider=({children})=>{  

    const [messages,setMessages]=useState([]);
    const [status, setStatus]= useState('');
    const [users,setUsers]=useState([]);
    const [checkReciver, setCheckReciver]= useState('');
    const [checkSend, setCheckSend] =useState('');
    const [selectedUser,setSelectedUser]=useState(null);
    const [song,setSong]=useState([]);
    const[unseenMessages,setUnseenMessages]=useState({});
    const {authUser} = useContext(AuthContext);
    const {socket, axios}= useContext(AuthContext);

  const getUsers = useCallback(async () => {
  if (!axios) {
    console.log("axios not ready yet");
    return;
  }

  try {
    const { data } = await axios.get("/api/messages/users");
      const unseen = {};
      data.users.forEach(u => {
        unseen[u.id] = data.unseenMessages[u.id] || 0;
      });
      setUnseenMessages(unseen);
    
    if (data.success) {
      setUsers(data.users);
    }
  } catch (error) {
    toast.error(error.message);
  }
}, [axios]);

    const getMessages=async(userId)=>{
        try{
          const {data}=  await axios.get(`/api/messages/${userId}`)
          if(data.success){
            setMessages(data.messages);
          }
        }
        catch(error){
            toast.error(error.message);
        }
    }

    const sendRequest=async(status)=>{
        try{
            console.log(status);
            const {data}= await axios.post(`/api/messages/request/${selectedUser.id}`,{status})
            if(data.success){
                console.log("request send succesfully",data);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }

    const sendMessage=async(messageData)=>{
        try{
            const {data}= await axios.post(`/api/messages/send/${selectedUser.id}`,messageData)
            if(data.success){
                setMessages((prevMessages)=>[...prevMessages,data.newMessage])

            }
            else toast.error(error.message);
        }
         catch(error){
            toast.error(error.message);
        }
    }


    const subscribe=async()=>{
        if(!socket) return;

        socket.on("newMessage" ,(newMessage)=>{
            if(selectedUser && newMessage.senderId === selectedUser.id){
                newMessage.seen =true;
                setMessages((prevMessages)=>[...prevMessages, newMessage]);
                axios.put(`/api/messages/mark/${newMessage._id}`);
            }
            else{
                setUnseenMessages((prevUnSeenMessages)=>({
                    ...prevUnSeenMessages,[newMessage.senderId]: prevUnSeenMessages[newMessage.senderId]? prevUnSeenMessages [newMessage.senderId] +1 : 1
                }))
            }
        })
    }

        const getSongs=useCallback(async()=>{
            try{
                const {data}= await axios.get('/api/messages/songs');
                console.log("the data is :",data)
               if (data?.success) {
                console.log(data.songs);
      setSong(data.songs);
    } else {
      toast.error(data?.message || "Failed to load songs");
    }
            }
            catch(error){
            toast.error(error.message);
        }
        },[]); 
    


    const requestCheck=async()=>{
        try{
            const {data}= await axios.get(`api/messages/check/${selectedUser.id}`)
            if(data.success){
                console.log("the status is :",data.request.status);
                setStatus(data.request.status);
                setCheckReciver(data.recerverId);
                console.log(data.recerverId)
                return{
                    status:data.request.status,
                    checkReciver: data.recerverId,
                 senderId: data.senderId
                }
            }
            return null;
        }
         catch(error){
            toast.error(error.message);
        }
    }
    const unSubscribe= async()=>{
        if(socket)
            socket.off("newMessage");
    }

    useEffect(()=>{
        subscribe();
      
        return ()=> unSubscribe();
    },[socket,selectedUser])

    
    const value={
        messages,
        users,
        selectedUser,
        getMessages,
        setSelectedUser,
        unseenMessages,
        setUnseenMessages,
        getUsers,
        sendMessage,
        sendRequest,
        status,
        setStatus,
        checkReciver,
        checkSend,
        requestCheck,
        song,
        getSongs
    }
    return (

    <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
    )
}