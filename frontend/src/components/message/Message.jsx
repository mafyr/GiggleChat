import { useAuthContext } from "../../../context/AuthContext";
import  useConversation  from "../../zustand/useConversation";
import {extractTime} from "../../utils/extractTime";
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();

  // to see if message is from us or not
  const fromMe = message.senderId === authUser._id;

  // our message should display on right side
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  // for profile pic along with message
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  // bg color of message
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-200";

  // formatted time
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName} mb-4 mt-1`}>
      <img
        src={`${profilePic}`}
        alt="User Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
     
        <p className={`p-2  text-sm rounded text-gray-800 font-medium ${bubbleBgColor}`}>{message.message}</p> 
        <p className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</p>
    </div>
  );
};

export default Message;