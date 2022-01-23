import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Profile from "./components/profile";
import "./scss/global.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dasboard" element={<DashBoard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
