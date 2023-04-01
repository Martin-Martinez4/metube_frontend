
import "./LeftsideNav.scss"
import LeftsideNavSection from "./LeftsideNavSection"

function LeftsideNav() {

    const entries = [
        {
            icon: "/navicons/HomeIcon.svg",
            title: "Home"

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
            icon: "http://localhost:8081/profile/coding_channel/",
            title: "coding_channel"

        },
        {
            icon: "http://localhost:8081/profile/anime_chanbel/",
            title: "anime_chanbel"

        },
        {
            icon: "ProfileImageSmall.svg",
            title: "placeholder"

        },
        
    ]

  return (
    <div className="leftsidenav">
        <LeftsideNavSection entries={entries}></LeftsideNavSection>
        <LeftsideNavSection header="Profiles" iconClasses="round" entries={profileEntries}></LeftsideNavSection>
      

    </div>
  )
}

export default LeftsideNav

