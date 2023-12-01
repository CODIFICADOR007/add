import "./App.css";
import Home from "./pages/home/home";
import Userlist from "./pages/userlist/userlist";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login and register/Login";
import Gym from "./pages/home/collect/Gym"
import Mess from "./pages/home/collect/Mess"
import Roomclean from "./pages/home/collect/Roomclean"
import Washbox from "./pages/home/collect/Washbox"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:userId" element={<Userlist />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/Gym" element={<Gym></Gym>}/>
        <Route path="/Mess" element={<Mess/>}/>
        <Route path="/Roomclean" element={<Roomclean/>}/>
        <Route path="/laundry" element={<Washbox/>}/>
      </Routes>
    </>
  );
}

export default App;
