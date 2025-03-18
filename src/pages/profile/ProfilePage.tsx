
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import TopNav from "../../components/nav/topnav/TopNav";
import PlaylistHorizontal from "../../components/playlist/PlaylistHorizontal";
import { gql } from "../../__generated__/gql";
import "./ProfilePage.scss";
import SubscribeButton from "../../components/subscribebutton/SubscribeButton";
import { formatNumber } from "../../app/utilis/numberFormater";
import ThumbnailPreviewSmall from "../../components/video/thumbnailpreview/ThumbnailPreviewSmall";

const PROFILE_QUERY = gql(/* GraphQL */`
query Profile($username: String!){
  profile(username: $username){
    username
    displayname
    subscribers
    userIsSubscribedTo
  
  }
}

`);

const PROFILE_QUERY2 = gql(/* GraphQL */`
query GetVideosByProfile($username: String!) {
  getVideosByProfileUsername(profileUsername: $username){
    id
    url
    duration
    contentinformation{
      title
      published
    }
    thumbnail{
      url
    }
    statistic{
      views
    }
    profile{
      username
    }
  
  }
}

`);


function ProfilePage() {

    const { username } = useParams()

    const { data, loading } = useQuery(PROFILE_QUERY, {
        variables: { username: `${username}`, profileUsername: `${username}` }
    });
    const { data: data2} = useQuery(PROFILE_QUERY2, {
        variables: { username: `${username}`, profileUsername: `${username}` }
    });

    return (
        <>
            <TopNav></TopNav>
            <div className="flex">
                <LeftsideNav></LeftsideNav>
                <div className="profilepage__content">
                    <div className="profilepage__headerimage margint1">
                        <img className="profilepage__headerimage cover" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/banner/${username}/`} alt="" />
                    </div>

                    <div className="marginl6 margint4">
                        <div className="profilepage__profileinformation marginb4">

                            <div className="flex AlignItemsCenter justifyContentSpaceBetween marginb3">

                                <div className="flex AlignItemsCenter">

                                    <img className="profilepage__userprofile marginr2" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/${username}/`}></img>
                                    <div className="flexColumn">

                                        <span className="profilepage__channelname">{data?.profile?.username}</span>
                                        <span className="profilepage__subcount">{formatNumber(data?.profile?.subscribers)} subscribers </span>
                                    </div>
                                </div>

                                <div className="flex">

                                    {/* <div className="btn bgred colorwhite marginr4 videopage__video__info__button--subscribe">
                                        Subscribe
                                    </div> */}
                                    <SubscribeButton isSubscribed={data?.profile?.userIsSubscribedTo ? data?.profile?.userIsSubscribedTo : false} username={username? username : ""} ></SubscribeButton>
                                </div>

                            </div>

                        </div>
                        {/* <div className="profilepage__playlistcontainer"> */}
                        <div>
                            {/* changes what is displayed in this area */}
                            <div className="profilepage__nav">
                                {/* Lazy load sections */}
                                <span className="marginr2 marginb2 pointer">Videos</span>
                                <span className="marginr2 marginb2 pointer">Playlists</span>
                                {/* <span className="marginr2 marginb2 pointer">Channels</span> */}
                                <span className="marginr2 marginb2 pointer">About</span>

                            </div>
                            
                            <div className="flex flex-wrap">
                                {loading ? <img src="/LoadingRings.svg" style={{ width: "10%", margin: "auto" }}></img> :

                                    data2?.getVideosByProfileUsername?.map((video) => {return (<ThumbnailPreviewSmall width={"16vw"} video={video}></ThumbnailPreviewSmall>)})
                                }

                            </div>
                                <div className="whitespace"></div>

                            {/* horizontal playlist of videos */}
                            {/* make it scrollable by using javascript */}
                            {/* <PlaylistHorizontal></PlaylistHorizontal>
                            <PlaylistHorizontal></PlaylistHorizontal>
                            <PlaylistHorizontal></PlaylistHorizontal>
                            <PlaylistHorizontal></PlaylistHorizontal> */}

                            {/* <div className="whitespace"></div> */}


                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilePage


