import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
    return (
      <button className="w-fit text-2xl px-4 py-2 text-white rounded-lg hover:bg-red-600">
        <CiLogout />
      </button>
    );
  };
  
  export default LogoutButton;