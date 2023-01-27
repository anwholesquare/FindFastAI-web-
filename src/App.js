import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path= "/signin" element={<SignIn/>}/>
        <Route path= "/about" element={<About/>}/>
        
      </Routes>
      {/* <SignIn/> */}
     
    </div>
  );
}

export default App;
