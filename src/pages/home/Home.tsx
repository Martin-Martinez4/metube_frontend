
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreview from "../../components/video/thumbnailpreview/ThumbnailPreview"
import LeftsideNav from "../../components/nav/leftsidenav/LeftsideNav";
import 'video.js/dist/video-js.css';

import "./Home.scss";

import VideoPlayer from "../../components/video/videoplayer/VideoPlayer";

function Home() {

  return (
<>

    <TopNav></TopNav>
    <div className="home">

      <div style={{ display: "flex"}}>
        <LeftsideNav></LeftsideNav>

        {/* need to implement infinite scrolling */}
        <div className="home__videoarea">

            <div className="home__videoarea__container">

              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>

              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>

              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
              <ThumbnailPreview></ThumbnailPreview>
            </div>

            <div className="whitespace"></div>
        
        </div>
      </div>
    </div>

</>
  )
}

export default Home
