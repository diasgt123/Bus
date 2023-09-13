import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Scan from "./Components/Scan/Scan";
import Qr from "./Components/Qr/Qr";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <div id="root">
      <Routes>
        <Route path="/" element={<Scan />} />
        <Route path="/Qr" element={<Qr />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </div>
  );
}

export default App;
