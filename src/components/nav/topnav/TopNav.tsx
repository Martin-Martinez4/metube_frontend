
import { useNavigate } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import "./TopNav.scss";
import { loggedInUserVar } from "../../../app/apolloCache/InMemoryCache";

function TopNav() {

  const navigate = useNavigate();

  const loggedInUser = useReactiveVar(loggedInUserVar)

  return (
    <div className="topnav">
        <div>
            <img className="pointer" src="/NameAndLogoSmall.svg" alt="MeTube logo" onClick={() => {navigate(`/`)}}></img>
        </div>
        <fieldset className="topnav__searchbar">
            <input type="search" className="topnav__searchbar__input"
            // placeholder={`${loggedInUser.isLoggedIn}`}></input>
            placeholder="Search..."></input>
            <button type="submit"className="topnav__searchbar__button"><img style={{ width: "40%" }} src="/MagnifyingGlass2.svg"></img></button>
        </fieldset>

        <div>
            <div className="hamburger">
              <p className="line line1"></p>
              <p className="line line2"></p>
              <p className="line line3"></p>
          </div>
        </div>
        

    </div>
  )
}

export default TopNav

