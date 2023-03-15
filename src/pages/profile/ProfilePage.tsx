
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav"
import PlaylistHorizontal from "../../components/playlist/PlaylistHorizontal"
import "./ProfilePage.scss"

function ProfilePage() {
    return (
        <div className="flex">
            <LeftsideNav></LeftsideNav>
            <div className="profilepage__content">
                <div className="profilepage__headerimage">
                    {/* a big image goes here */}
                    <div></div>
                </div>

                <div className="marginl6 margint4">
                    <div className="profilepage__profileinformation marginb4">
                        {/* profile and sub button goes here */}
                        <div className="flex AlignItemsCenter justifyContentSpaceBetween marginb3">

                            <div className="flex AlignItemsCenter">

                                <img className="profilepage__userprofile marginr2"></img>
                                <div className="flexColumn">
                                    {/* <span>Channel Name Channel Name Channel Name Channel Name Channell</span> */}
                                    <span className="profilepage__channelname">Channel Name</span>
                                    <span>184K subscribers </span>
                                </div>
                            </div>

                            <div className="flex">

                                <div className="btn bgred colorwhite marginr4 videopage__video__info__button--subscribe">
                                    Subscribe
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="profilepage__playlistcontainer">
                        {/* changes what is displayed in this area */}
                        <div className="profilepage__nav">
                            {/* Lazy load sections */}
                            <span className="marginr2 marginb2 pointer">Home</span>
                            <span className="marginr2 marginb2 pointer">Videos</span>
                            <span className="marginr2 marginb2 pointer">Playlists</span>
                            <span className="marginr2 marginb2 pointer">Channels</span>
                            <span className="marginr2 marginb2 pointer">About</span>

                        </div>

                        {/* horizontal playlist of videos */}
                        {/* make it scrollable by using javascript */}
                        <PlaylistHorizontal></PlaylistHorizontal>
                        <PlaylistHorizontal></PlaylistHorizontal>
                        <PlaylistHorizontal></PlaylistHorizontal>
                        <PlaylistHorizontal></PlaylistHorizontal>
                        

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage


