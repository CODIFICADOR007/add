import "./home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import washp from "./wash.jpeg";
import roomp from "./room.jpeg";
import gymp from "./gym.jpeg";
import messp from "./mess.jpeg";
import Gym from "./collect/Gym"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function Home() {
  const user = useSelector((state) => state.user);
  return (


    <div className="home-page-div">
      <div className="mainDiv">
        <Link to="laundry">
          <div className="contentDiv messDiv">
            <img src={washp} alt="Anime background" />
            <h1 className="home-card-title">Washing Box</h1>
          </div>
        </Link>
        <Link to="/Gym">
          <div className="contentDiv gymDiv">
            <img src={gymp} alt="Movies background" />
            <h1 className="home-card-title">Gym</h1>
            <Gym></Gym>
          </div>
        </Link>
        <Link to="/Mess">
          <div className="contentDiv MessDiv">
            <img src={messp} alt="Series background" />
            <h1 className="home-card-title">Mess</h1>
          </div>
        </Link>
        <Link to="Roomclean">
          <div className="contentDiv roomDiv">
            <img src={roomp} alt="Games background" />
            <h1 className="home-card-title">Room Cleaning</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
