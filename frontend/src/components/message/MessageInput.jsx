import { useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if the message input is empty, than we shouldnot be able to send anything
    if(!message) return
    // send the message
    await sendMessage(message);
    // after sending message, empty the input
    setMessage("")
  }

    return (
      <form onSubmit={handleSubmit}>
      <div className="p-4 text-black bg-white border-b border-gray-300  bg-opacity-10 backdrop-blur-lg flex items-center">
        <input 
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-100"
        />
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          {loading ? <div className="loading loading-spinner"></div> : <BsSend/>}
        </button>
      </div>
      </form>
    );
  };
  
  export default MessageInput;
  