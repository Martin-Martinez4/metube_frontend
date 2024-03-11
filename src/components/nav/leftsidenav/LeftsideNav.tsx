
import { useContext } from "react"
import "./LeftsideNav.scss"
import LeftsideNavSection from "./LeftsideNavSection"
import { ThemeContext } from "../../../App"

function LeftsideNav() {
    const {theme} = useContext(ThemeContext)

    const entries = theme == 'light' ? [
        {
            icon: "/navicons/HomeIcon.svg",
            title: "Home",
            link: "/"

        },
        {
            icon: "/navicons/TrendingIcon.svg",
            title: "Trending"

        },
        {
            icon: "/navicons/WatchLaterIcon.svg",
            title: "Watch Later"

        },
        {
            icon: "/navicons/ThumbupIconSidebar.svg",
            title: "Liked"
            
        },
        {
            icon: "/navicons/HistoryIcon.svg",
            title: "History"

        },
        {
            icon: "/navicons/LibraryIcon.svg",
            title: "Library"

        },
    ]
    :
    [
        {
            icon: "/navicons/HomeIcon_white.svg",
            title: "Home",
            link: "/"

        },
        {
            icon: "/navicons/TrendingIcon_white.svg",
            title: "Trending"

        },
        {
            icon: "/navicons/WatchLaterIcon_white.svg",
            title: "Watch Later"

        },
        {
            icon: "/navicons/ThumbupIconSidebar_white.svg",
            title: "Liked"
            
        },
        {
            icon: "/navicons/HistoryIcon_white.svg",
            title: "History"

        },
        {
            icon: "/navicons/LibraryIcon_white.svg",
            title: "Library"

        },
    ]

    const profileEntries = [
        {
            icon: `http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/coding_channel/`,
            title: "coding_channel"

        },
        {
            icon: `http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/TBD/`,
            title: "TBD"

        },
        {
            icon: "/ProfileImageSmall.svg",
            title: "placeholder"

        },
        
    ]

  return (
    <div className="leftsidenav hiddenAt620px">
        <LeftsideNavSection entries={entries}></LeftsideNavSection>
        <LeftsideNavSection header="Profiles" iconClasses="round" entries={profileEntries}></LeftsideNavSection>
      

    </div>
  )
}

export default LeftsideNav

