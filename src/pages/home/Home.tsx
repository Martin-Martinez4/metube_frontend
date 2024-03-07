
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreview from "../../components/video/thumbnailpreview/ThumbnailPreview"
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import 'video.js/dist/video-js.css';

import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

import "./Home.scss";
import { useNavigate } from "react-router-dom";

export const VIDEOS_QUERY = gql(/* GraphQL */`
query Videos{
  videos(amount: 12){
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

function Home() {

  const { data, loading, error } = useQuery(VIDEOS_QUERY);

  const navigate = useNavigate();

  if (loading) {

    return (
      <>

        <TopNav></TopNav>
        <div className="home">

          <div className="flex">
            <LeftsideNav></LeftsideNav>


            {/* need to implement infinite scrolling */}
            <div className="home__videoarea">
              <div className="home__categoriesnav">
                <span className="home__categoriesnav__category marginr4">All</span>
                <span className="home__categoriesnav__category marginr4">Computer programming</span>
                <span className="home__categoriesnav__category marginr4">Coding</span>
                <span className="home__categoriesnav__category marginr4">Animation</span>

              </div>

              <div className="flex justifyContentCenter" style={{ height: "100%" }}>

                <img src="/LoadingRings.svg" style={{ width: "10%", margin: "auto" }}></img>

              </div>

              <div className="whitespace"></div>

            </div>
          </div>
        </div>

      </>
    )


  }
  if (error) {

    return (
      <>
      {console.log(error)}
        <TopNav></TopNav>
        <div className="home">

          <div className="flex">
            <LeftsideNav></LeftsideNav>


            {/* need to implement infinite scrolling */}
            <div className="home__videoarea">
              <div className="home__categoriesnav">
                <span className="home__categoriesnav__category marginr4">All</span>
                <span className="home__categoriesnav__category marginr4">Computer programming</span>
                <span className="home__categoriesnav__category marginr4">Coding</span>
                <span className="home__categoriesnav__category marginr4">Animation</span>

              </div>

              <div className="home__videoarea__container">

                <div>

                  <p>An error has occured...</p>
                  <p
                    className="hovercolorlightblue pointer"
                    onClick={() => {

                      navigate('/', { replace: true })
                    }
                    }>Click here to go the home page or try again later
                  </p>
                </div>

              </div>

              <div className="whitespace"></div>

            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>

      <TopNav></TopNav>
      <div className="home">

        <div className="flex">
          <LeftsideNav></LeftsideNav>


          {/* need to implement infinite scrolling */}
          <div className="home__videoarea">
            <div className="home__categoriesnav">
              <span className="home__categoriesnav__category marginr4">All</span>
              <span className="home__categoriesnav__category marginr4">Computer programming</span>
              <span className="home__categoriesnav__category marginr4">Coding</span>
              <span className="home__categoriesnav__category marginr4">Animation</span>

            </div>

            <div className="home__videoarea__container">

              {data?.videos?.map((video) => {

                if (video === null) return
                const { id, contentinformation, profile, statistic, thumbnail, url, duration } = video
                return (
                  <>
                    <ThumbnailPreview
                      key={id}
                      id={id}
                      url={url}
                      title={contentinformation ? contentinformation.title : ""}
                      channelname={profile ? profile.username : ""}
                      views={statistic ? statistic.views : undefined}
                      duration={duration}

                      thumbnail={thumbnail ? thumbnail.url : ""}
                      profile_id={profile ? profile.username : ""}
                      published_date={contentinformation ? contentinformation.published : ""}
                      width="19vw"
                    ></ThumbnailPreview>
                  </>)

              })}

            </div>

            <div className="whitespace"></div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Home
