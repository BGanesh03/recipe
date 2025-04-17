import "./App.css";
import Signup from "./components/signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <>
    {/* <Home/> */}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
