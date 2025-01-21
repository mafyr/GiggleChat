const MessageInput = () => {
    return (
      <div className="p-4 bg-white border-b border-gray-300  bg-opacity-10 backdrop-blur-lg flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-0 focus:ring-gray-100"
        />
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    );
  };
  
  export default MessageInput;
  