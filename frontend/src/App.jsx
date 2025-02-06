import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
       <Route path='/' element={authUser ? <Home/> : <Navigate to={"/Login"}/>}/>
       <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login/>}  />
       <Route path="/signup" element={authUser ? <Navigate to='/'/> : <Signup/> }  />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
