
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useReactiveVar } from "@apollo/client";
import { loggedInUserVar } from "../../../app/apolloCache/InMemoryCache";
import { gql } from "../../../__generated__/gql";
import "./TopNav.scss";

export const LOGOUT_QUERY = gql(/* GraphQL */`
mutation Logout{
  logout{
    username
    displayname
    subscribers
    isChannel
  }
}
`);

function TopNav() {

  const navigate = useNavigate();

  const [logout] = useMutation(LOGOUT_QUERY);

  const loggedInUser = useReactiveVar(loggedInUserVar).isLoggedIn;

  const { state } = useLocation();

  return (
    <div className="topnav">
      <div>
        <img className="pointer" src="/NameAndLogoSmall.svg" alt="MeTube logo" onClick={() => { navigate(`/`) }}></img>
      </div>
      <fieldset className="topnav__searchbar">
        <input type="search" className="topnav__searchbar__input"
          placeholder="search..."></input>
        {/* placeholder="Search..."></input> */}
        <div className="topnav__searchbar__button"><img className="topnav__searchbar__icon" style={{ width: "40%" }} src="/MagnifyingGlass2.svg"></img></div>
      </fieldset>

      <div>

        <div>
          {
            loggedInUser
              ?

              <p
                onClick={() => {
                  logout()
                  .then(res => {

                    loggedInUserVar({
                      isLoggedIn: false,
                      Username: "",
                      Displayname: "",
                      IsChannel: false,
                    })

                  })
                  .catch(err => {

                    alert("error loging out")

                    loggedInUserVar({
                      isLoggedIn: false,
                      Username: "",
                      Displayname: "",
                      IsChannel: false,
                    })

                  })
                }}
                className="pointer hovercolorlightblue"
              >Signout</p>
              :



              <p
                onClick={() => {

                  if (location.pathname === "/login" && state?.continue !== undefined) {

                    navigate('/login', { replace: true, state: { continue: state?.continue } })

                  }
                  else if (location.pathname === "/login") {

                    navigate('/login', { replace: true, state: { continue: "/" } })

                  }
                  else {

                    navigate('/login', { replace: true, state: { continue: location.pathname } })
                  }
                }}
                className="pointer hovercolorlightblue"
              >Signin</p>
          }


        </div>
      </div>


    </div >
  )
}

export default TopNav

