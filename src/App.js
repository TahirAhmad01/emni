import DashBoard from "./components/dashboard";
import Profile from "./components/profile";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dasboard" element={<DashBoard/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
