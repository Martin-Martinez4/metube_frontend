
import { useLocation, useNavigate, Link, useSearchParams, createSearchParams } from "react-router-dom";
import { useMutation, useReactiveVar } from "@apollo/client";
import { loggedInUserVar } from "../../../app/apolloCache/InMemoryCache";
import { gql } from "../../../__generated__/gql";
import "./TopNav.scss";
import { ThemeSwitcher } from "../../context/themecontext/ThemeSwitcher";
import { FormEvent, useState } from "react";

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
  let [searchParams, setSearchParam] = useSearchParams();


  const [logout] = useMutation(LOGOUT_QUERY);

  const loggedInUser = useReactiveVar(loggedInUserVar).isLoggedIn;

  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(searchTerm == "") return
    navigate({
      pathname: "/search",
      search: createSearchParams({
          title: searchTerm
      }).toString()
  });
  }

  const { state } = useLocation();

  return (
    <div className="topnav">
      <Link to="/">

        <img className="pointer topnav__logo" src="/NameAndLogoSmall.svg" alt="MeTube Logo"></img>
      </Link>
      <fieldset className="topnav__searchbar">
      <form onSubmit={(e) => handleSearch(e)}>

        <input 
          type="search" 
          className="topnav__searchbar__input"
          placeholder="search..."
          onFocus={() => {}}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </form>
        <div className="topnav__searchbar__button" onClick={(e) => handleSearch(e)} ><img className="topnav__searchbar__icon" src="/MagnifyingGlass2.svg"></img></div>
      </fieldset>

      <div className="flex">
        <div className="marginr4">

          <ThemeSwitcher></ThemeSwitcher>
        </div>

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

