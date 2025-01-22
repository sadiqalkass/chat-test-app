import { Routes,Route, Navigate } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import SignUp from "./pages/Signup/SignUp";
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/authContext";

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={authUser? <Home/> :<Navigate to='/login'/> }/>
        <Route path="/login" element={authUser? <Navigate to='/'/> : <Login/>}/>
        <Route path="/signup" element={authUser? <Navigate to='/'/> :<SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
