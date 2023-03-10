
import "./LeftsideNav.scss"
import LeftsideNavSection from "./LeftsideNavSection"

function LeftsideNav() {

    const entries = [
        {
            icon: "./ProfileImageSmall.svg",
            title: "test entry"

        },
        {
            icon: "./ProfileImageSmall.svg",
            title: "test entry"

        },
        {
            icon: "./ProfileImageSmall.svg",
            title: "Thin Binding of Babishsssssssssssssssssssssssssss sssssssssss"

        },
        {
            icon: "./ProfileImageSmall.svg",
            title: "Thin Binding of Babishsssssssssssssssssssssssssss sssssssssss"

        },
    ]

  return (
    <div className="leftsidenav">
        <LeftsideNavSection header="Profiles"  entries={entries}></LeftsideNavSection>
        <LeftsideNavSection entries={entries}></LeftsideNavSection>
      

    </div>
  )
}

export default LeftsideNav

