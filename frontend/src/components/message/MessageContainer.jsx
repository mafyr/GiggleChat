import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div className="flex flex-col flex-1 w-1/4 h-screen bg-white bg-opacity-10 backdrop-blur-lg">
      {/* Optional Header */}
      <div className="p-4 bg-white border-b border-gray-300  bg-opacity-10 backdrop-blur-lg">
        <h2 className="text-lg font-medium text-white">
          Chat with John Doe
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-scroll scrollbar">
        <Messages />
      </div>

      {/* Input Bar */}
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
