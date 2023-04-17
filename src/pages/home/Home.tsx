
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreview from "../../components/video/thumbnailpreview/ThumbnailPreview"
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import 'video.js/dist/video-js.css';

import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

import "./Home.scss";

export const VIDEOS_QUERY = gql(/* GraphQL */`
query Videos{
  videos(amount: 4){
    id
    url
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

  if (loading) {

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

              loading

            </div>

            <div className="whitespace"></div>

          </div>
        </div>
      </div>

    </>

  }
  if (error) return <p>{`${error}`}</p>

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
                const { id, contentinformation, profile, statistic, thumbnail } = video

                return (
                  <>
                    <ThumbnailPreview
                      key={id}
                      id={id}
                      title={contentinformation ? contentinformation.title : ""}
                      channelname={profile ? profile.username : ""}
                      views={statistic ? statistic.views : undefined}
                      thumbnail={thumbnail ? thumbnail.url : ""}
                      profile_id={profile ? profile.username : ""}
                      published_date={contentinformation ? contentinformation.published : ""}
                      width="19vw"
                    ></ThumbnailPreview>
                    <ThumbnailPreview
                      key={id}
                      id={id}
                      title={contentinformation ? contentinformation.title : ""}
                      channelname={profile ? profile.username : ""}
                      views={statistic ? statistic.views : undefined}
                      thumbnail={thumbnail ? thumbnail.url : ""}
                      profile_id={profile ? profile.username : ""}
                      published_date={contentinformation ? contentinformation.published : ""}
                      width="19vw"
                    ></ThumbnailPreview>
                    <ThumbnailPreview
                      key={id}
                      id={id}
                      title={contentinformation ? contentinformation.title : ""}
                      channelname={profile ? profile.username : ""}
                      views={statistic ? statistic.views : undefined}
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
