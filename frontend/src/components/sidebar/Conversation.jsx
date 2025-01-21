const Conversation = () => {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-sm cursor-pointer group"> {/* Added  group class  so that on hover the text color of all its elements can change*/}

      <img
        src="https://via.placeholder.com/40"
        alt="Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
          <p className="text-sm font-medium text-white group-hover:text-black">
            John Doe
          </p>
          <p className="text-xs text-white group-hover:text-black">
            Last message...
          </p>
        </div>
    </div>
  );
};

export default Conversation;