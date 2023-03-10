
import "./TopNav.scss";

function TopNav() {
  return (
    <div className="topnav">
        <div>
            <img src="/NameAndLogoSmall.svg"></img>
        </div>
        <fieldset className="topnav__searchbar">
            <input type="search" className="topnav__searchbar__input"></input>
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

