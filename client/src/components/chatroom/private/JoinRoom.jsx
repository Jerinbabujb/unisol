import { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JoinRoom = () => {
    const { joinPrivateRoom, privateRoom } = useContext(ChatContext);
    const { inviteToken } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        joinPrivateRoom(inviteToken);
        navigate(`/private-room/${privateRoom.roomName}`);
    }, [joinPrivateRoom])
    return (
        <div>
            <h1>Joining Room....</h1>
        </div>
    );
};

export default JoinRoom;