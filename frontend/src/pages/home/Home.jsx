import Sidebar from "/src/components/sidebar/Sidebar";
import MessageContainer from "/src/components/message/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;