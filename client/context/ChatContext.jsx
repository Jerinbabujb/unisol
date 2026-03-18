import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {AuthContext} from './AuthContext';
import toast from "react-hot-toast";

export const ChatContext=createContext();


export const ChatProvider=({children})=>{  

    const [messages,setMessages]=useState([]);
    const [status, setStatus]= useState('pending');
    const [users,setUsers]=useState([]);
    const [checkReciver, setCheckReciver]= useState('');
    const [checkSend, setCheckSend] =useState('');
    const [selectedUser,setSelectedUser]=useState(null);
    const [song,setSong]=useState([]);
    const[unseenMessages,setUnseenMessages]=useState({});
    const {authUser} = useContext(AuthContext);
    const {socket, axios}= useContext(AuthContext);
    const [instagramPreference,setInstagramPreference] =useState(false);
    const [facebookPreference,setFacebookPreference] =useState(false);
    const [facebookToggle,setFacebookToggle]=useState(false);
    const [instagramToggle,setInstagramToggle]= useState(false);
    const [requestData,setRequestData]=  useState('');
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


     const allUsers=async()=>{
        try{
            console.log(status);
            const {data}= await axios.get('/api/messages/all-users/')
            if(data.success){
                setUsers(data.users);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }




    const sendRequest=async(status,id)=>{
        try{
            console.log(status);
            const {data}= await axios.post('/api/messages/request/',{status,id})
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
               if (data?.success) {
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
                setStatus(data.request.status);
                setCheckReciver(data.recerverId);
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
    // const freindRequestCheck=async()=>{
    //     try{
    //         console.log("freindRequestCheck");
    //         const {data}= await axios.get('api/messages/freind-request')
    //         if(data.success){
    //             setCheckReciver(data.recerverId);
    //             console.log("data",data);
    //             return{
    //                 status:data.request.status,
    //                 checkReciver: data.recerverId,
    //              senderId: data.senderId
    //             }
    //         }
    //         return null;
    //     }
    //      catch(error){
    //         toast.error(error.message);
    //     }
    // }
     const freindRequestCheck=async()=>{
        try{
            const {data}= await axios.get('/api/messages/freind-request');
            if(data.success){
                setRequestData(data);
            }
            else{
                console.log("error happend");
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }

 
     const privacyCreate=async(field,state)=>{
    try{
      const {data}= await axios.post(`api/messages/privacy/${selectedUser.id}`,{field,state})
      if(data.success){
      }
      if(data.error){
        console.log("error");
      }
    }
    catch(error){
            toast.error(error.message);
        }
  }

  const privacyCheck= async()=>{
    if (!selectedUser?.id) return;
    try{
        const {data} = await axios.get(`api/messages/privacycheck/${selectedUser.id}`,{});
        if(data.success){
            setFacebookPreference(data.privacyCheck.facebookPreference);
            setInstagramPreference(data.privacyCheck.instagramPreference)
            
        }
    }
    catch(error){
            toast.error(error.message);
        }
    
  }
  const privacyToggle= async()=>{
    if (!selectedUser?.id) return;
    try{
        const {data} = await axios.get(`api/messages/privacytoggle/${selectedUser.id}`,{});
        if(data.success){
            setFacebookToggle(data.privacyToggle.facebookPreference);
            setInstagramToggle(data.privacyToggle.instagramPreference)
            
        }
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
        privacyCheck();
        privacyToggle();
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
        allUsers,
        sendMessage,
        sendRequest,
        status,
        setStatus,
        checkReciver,
        checkSend,
        requestCheck,
        freindRequestCheck,
        instagramPreference,
        facebookPreference,
        setInstagramPreference,
        setFacebookPreference,
        song,
        getSongs,
        privacyCreate,
        instagramToggle,
        facebookToggle,
        setFacebookToggle,
        setInstagramToggle,
        requestData
    }
    return (

    <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>
    )
}