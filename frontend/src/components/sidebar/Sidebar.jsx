import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-white bg-opacity-10 backdrop-blur-lg p-4 flex flex-col">
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
