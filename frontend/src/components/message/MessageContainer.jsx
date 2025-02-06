import { FaUserCircle } from "react-icons/fa";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from '../../zustand/useConversation';
import { useEffect } from "react";

const MessageContainer = () => {

  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {

    return () => {
      //cleanup function
      setSelectedConversation(null);      
    }
  }, [setSelectedConversation]);

  const noChatSelected = () => (
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <h1 className="text-3xl font-semibold">Welcome 👋</h1>
      <p className="text-lg">Select a chat to start messaging</p>
      <FaUserCircle className="mt-4 text-6xl text-gray-500" />
    </div>
  );

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-900 bg-opacity-10 backdrop-blur-lg text-white">
      {selectedConversation ? (
        <>
          {/* Header */}
          <div className="p-4 bg-gray-800 border-b border-gray-700">
            <h2 className="text-lg font-medium flex items-center">
              Chat with{" "}
              <div className="text-blue-500 pl-1">{selectedConversation.fullName}</div>
            </h2>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-scroll scrollbar">
            <Messages />
          </div>

          {/* Input Bar */}
          <MessageInput />
        </>
      ) : (
        noChatSelected()
      )}
    </div>
  );
};

export default MessageContainer;