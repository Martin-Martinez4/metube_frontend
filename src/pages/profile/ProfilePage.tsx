
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import TopNav from "../../components/nav/topnav/TopNav";
import PlaylistHorizontal from "../../components/playlist/PlaylistHorizontal";
import { gql } from "../../__generated__/gql";
import "./ProfilePage.scss";

const PROFILE_QUERY = gql(/* GraphQL */`
query Profile($username: String!){
  profile(username: $username){
    username
    displayname
    subscribers
  
  }
}
`);

function ProfilePage() {

    const {username} = useParams()

    const {data, loading, error} = useQuery(PROFILE_QUERY, {
        variables: {username: `${username}`}
    })

    return (
        <>
        <TopNav></TopNav>
        <div className="flex">
            <LeftsideNav></LeftsideNav>
            <div className="profilepage__content">
                <div className="profilepage__headerimage margint1">
                    {/* a big image goes here */}
                    {/* <div></div> */}
                    {/* <img className="profilepage__headerimage cover" src="/channels4_banner.jpg" alt="" /> */}
                    <img className="profilepage__headerimage cover" src={`http://localhost:8081/banner/${username}/`} alt="" />
                </div>

                <div className="marginl6 margint4">
                    <div className="profilepage__profileinformation marginb4">

                        <div className="flex AlignItemsCenter justifyContentSpaceBetween marginb3">

                            <div className="flex AlignItemsCenter">

                                <img className="profilepage__userprofile marginr2" src={`http://localhost:8081/profile/${username}/`}></img>
                                <div className="flexColumn">
                                 
                                    <span className="profilepage__channelname">{data?.profile?.username}</span>
                                    <span className="profilepage__subcount">{data?.profile?.subscribers} subscribers </span>
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

                        {/* <div className="whitespace"></div> */}
                        

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default ProfilePage


