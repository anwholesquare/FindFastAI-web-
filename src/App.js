import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import 'bootstrap/dist/js/bootstrap.min.js';
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import SearchDetails from "./components/SearchDetails/SearchDetails";
import MyProfile from "./components/MyProfile/MyProfile";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path= "/signin" element={<SignIn/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/search" element={<Search/>}/>
        <Route path= "/searchresults/" element={<SearchResults/>}/>
        <Route path= "/searchdetail/:searchId" element={<SearchDetails/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>

      </Routes>
      {/* <SignIn/> */}
     {/* <Footer/> */}
    </div>
  );
}

export default App;
