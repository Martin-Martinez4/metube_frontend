
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreview from "../../components/video/thumbnailpreview/ThumbnailPreview"
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import 'video.js/dist/video-js.css';

import { useQuery, gql } from "@apollo/client";

import "./Home.scss";

const VIDEOS_QUERY = gql`

query Videos{
  videos(amount: 4){
    id
     url
    statistic{
      likes
    }
  
  }
}
`

function Home() {

  const {data, loading, error} = useQuery(VIDEOS_QUERY);

  if (loading) return <p>Loading</p>
  if (error) return <p>{`${error}`}</p>

  return (
<>

    {console.log(data)}
    <TopNav></TopNav>
    <div className="home">

      <div className="flex">
        <LeftsideNav></LeftsideNav>


        {/* need to implement infinite scrolling */}
        <div className="home__videoarea">

            <div className="home__videoarea__container">

              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              <ThumbnailPreview width="19vw"></ThumbnailPreview>

              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              <ThumbnailPreview width="19vw"></ThumbnailPreview>
              
            </div>

            <div className="whitespace"></div>
        
        </div>
      </div>
    </div>

</>
  )
}

export default Home
