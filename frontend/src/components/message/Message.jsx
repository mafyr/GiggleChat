const Message = () => {
    return (
      <div className="flex items-center gap-4 p-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-white">John Doe</p>
          <p className="text-xs text-white">Hello, how are you?</p>
        </div>
      </div>
    );
  };
  
  export default Message;
  