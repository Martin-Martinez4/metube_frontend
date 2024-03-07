
import "./LeftsideNav.scss"
import LeftsideNavSection from "./LeftsideNavSection"

function LeftsideNav() {

    const entries = [
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

    const profileEntries = [
        {
            icon: "http://192.168.1.46:8081/profile/coding_channel/",
            title: "coding_channel"

        },
        {
            icon: "http://192.168.1.46:8081/profile/TBD/",
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

