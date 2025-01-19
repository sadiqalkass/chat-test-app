import "./App.css";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import SignUp from "./pages/Signup/SignUp";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
