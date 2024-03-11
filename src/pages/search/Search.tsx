
import TopNav from "../../components/nav/topnav/TopNav"
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import 'video.js/dist/video-js.css';

import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";

import { useNavigate, useSearchParams } from "react-router-dom";
import ThumbnailPreviewBig from "../../components/video/thumbnailpreview/ThumbnailPreviewBig";

export const SEARCH_QUERY = gql(/* GraphQL */`
query SearchForVideoByTitle($searchTerm: String!) {
  SearchForVideoByTitle(searchTerm: $searchTerm){
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

function Search() {

let [searchParams] = useSearchParams();
  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: {searchTerm: searchParams.get("title") != null? searchParams.get("title") : ""}
  })
  const navigate = useNavigate();


  if (loading) {

    return (
      <>

        <TopNav></TopNav>
        <div className="home">

          <div className="flex">
            {/* <LeftsideNav></LeftsideNav> */}


            {/* need to implement infinite scrolling */}
            <div className="home__videoarea">
              <div className="flex justifyContentCenter flexColumn" style={{ height: "100%" }}>

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
            {/* <LeftsideNav></LeftsideNav> */}


            {/* need to implement infinite scrolling */}
            <div className="home__videoarea">
           

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
           

            <div className="home__videoarea__container flexColumn alignContentCenter">

              {data?.SearchForVideoByTitle?.map((video) => {

                if (video === null) return
                const { id, contentinformation, profile, statistic, thumbnail, url, duration } = video
                return (
                  <>
                    <ThumbnailPreviewBig
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
                      width="30vw"
                    ></ThumbnailPreviewBig>
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

export default Search;
