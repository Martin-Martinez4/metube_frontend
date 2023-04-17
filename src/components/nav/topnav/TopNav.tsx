
import { useLocation, useNavigate } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import "./TopNav.scss";
import { loggedInUserVar } from "../../../app/apolloCache/InMemoryCache";

function TopNav() {

  const navigate = useNavigate();

  const loggedInUser = useReactiveVar(loggedInUserVar);

  const { state } = useLocation();

  return (
    <div className="topnav">
        <div>
            <img className="pointer" src="/NameAndLogoSmall.svg" alt="MeTube logo" onClick={() => {navigate(`/`)}}></img>
        </div>
        <fieldset className="topnav__searchbar">
            <input type="search" className="topnav__searchbar__input"
            placeholder={`${loggedInUser.Username}`}></input>
            {/* placeholder="Search..."></input> */}
            <div className="topnav__searchbar__button"><img className="topnav__searchbar__icon" style={{ width: "40%" }} src="/MagnifyingGlass2.svg"></img></div>
        </fieldset>

        <div>
            <div className="hamburger pointer" onClick={() => {

              if(location.pathname === "/login" && state?.continue !== undefined){

                navigate('/login', { replace: true, state: {continue: state?.continue} })
                
              }
              else if(location.pathname === "/login"){

                navigate('/login', { replace: true, state: {continue: "/"} })

              }
              else{

                navigate('/login', { replace: true, state: {continue: location.pathname} })
              }
            }}>
              <p className="line line1"></p>
              <p className="line line2"></p>
              <p className="line line3"></p>
          </div>
        </div>
        

    </div>
  )
}

export default TopNav

