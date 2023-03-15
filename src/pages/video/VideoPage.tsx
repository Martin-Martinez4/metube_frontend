
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreviewSmall from "../../components/video/thumbnailpreview/ThumbnailPreviewSmall";
import VideoDescription from "../../components/video/videodescription/VideoDescription";
import VideoPlayer from "../../components/video/videoplayer/VideoPlayer"

import "./VideoPage.scss";

function VideoPage() {

  return (
    <>
      <TopNav></TopNav>

      <div className="videopage__container">


        <div className="videopage__mainarea">

          <div className="videopage__video marginb3">
            <VideoPlayer></VideoPlayer>
            <div className="videopage__video__info">

              <h1 className="marginb1 videopage__video__title">Video Title</h1>

              <div className="marginb2 flex justifyContentSpaceBetween">
                172K views • 1 month ago
                <div className="flex">
                  <div className="flexcolumn justifyContentCenter">
                    <div className="flex justifyContentCenter">

                      <div className="flexcolumn AlignItemsCenter marginr2">

                        <div className="textaligncenter ">

                          <img src="/Thumbsup.svg"></img><span className="marginr2 marginl1">22</span>
                          <img src="/Thumbsdown.svg"></img><span className="marginl1">22</span>
                        </div>
                        {/* ~118px width */}
                        <div>---------------</div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>



            <div className="flex AlignItemsCenter justifyContentSpaceBetween marginb3">

              <div className="flex AlignItemsCenter">

                <img className="thumbnailpreview__info__userprofile marginr2"></img>
                <div className="flexColumn">
                  {/* <span>Channel Name Channel Name Channel Name Channel Name Channell</span> */}
                  <span style={{ wordBreak: "break-word", maxWidth: "25vw" }}>Channel Name</span>
                  <span>184K subscribers </span>
                </div>
              </div>

              <div className="flex">

                <div className="btn bgred colorwhite marginr2 videopage__video__info__button--subscribe">
                  Subscribe
                </div>
              </div>

            </div>

            <VideoDescription></VideoDescription>


          </div>

          <div className="videopage__comments">

            <p className="marginb3">200k Comments</p>
            <div className="videopage__comments__comment margint4">

              <img className="thumbnailpreview__info__userprofile"></img>

              <div className="videopage__comments__comment__text marginl3">
                <p className="marginb2">Channel Name • 40 years ago</p>
                <p>
                  People keep saying "this limitation was removed in 2013" but I just posted something over 10,000 characters and it would not post. After reducing it slightly, trying to post, it failing and slightly reducing it again I found that at 9,800 characters it will post.

                  So there is a limit, although this is huge and it appears to be set to 10,000 characters.

                  People are primarily asking what the exact limit is, this is my educated guess after noticing I had to go under that amount. The limit could very well be 9,900 or 9,950 characters but I can't see that being likely since this was so close to being 10,000 - thats my guess on the actual limitation.

                  It can reach this (massive? lol) limit if you are quoting other people's lengthy responses and adding your own.
                  WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                </p>
                <p><img src="ResponsesIcon.svg"></img> 200k replies</p>
                <div className="videopage__responses margint4">

                  <div className="videopage__responses__response">

                    <img className="thumbnailpreview__info__userprofile"></img>

                    <div className="videopage__responses__response__text marginl3">


                      <p className="marginb2">Channel Name • 40 years ago</p>
                      <p>
                        People keep saying "this limitation was removed in 2013" but I just posted something over 10,000 characters and it would not post. After reducing it slightly, trying to post, it failing and slightly reducing it again I found that at 9,800 characters it will post.

                        So there is a limit, although this is huge and it appears to be set to 10,000 characters.

                        People are primarily asking what the exact limit is, this is my educated guess after noticing I had to go under that amount. The limit could very well be 9,900 or 9,950 characters but I can't see that being likely since this was so close to being 10,000 - thats my guess on the actual limitation.

                        It can reach this (massive? lol) limit if you are quoting other people's lengthy responses and adding your own.
                        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                      </p>
                    </div>

                  </div>

                </div>
                <div className="videopage__responses margint4">

                  <div className="videopage__responses__response">

                    <img className="thumbnailpreview__info__userprofile"></img>

                    <div className="videopage__responses__response__text marginl3">


                      <p className="marginb1">Channel Name • 40 years ago</p>
                      <p>
                        People keep saying "this limitation was removed in 2013" but I just posted something over 10,000 characters and it would not post. After reducing it slightly, trying to post, it failing and slightly reducing it again I found that at 9,800 characters it will post.

                        So there is a limit, although this is huge and it appears to be set to 10,000 characters.

                        People are primarily asking what the exact limit is, this is my educated guess after noticing I had to go under that amount. The limit could very well be 9,900 or 9,950 characters but I can't see that being likely since this was so close to being 10,000 - thats my guess on the actual limitation.

                        It can reach this (massive? lol) limit if you are quoting other people's lengthy responses and adding your own.
                        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                      </p>
                    </div>

                  </div>

                </div>
              </div>


            </div>
            <div className="videopage__comments__comment margint4">

              <img className="thumbnailpreview__info__userprofile"></img>

              <div className="videopage__comments__comment__text marginl3">
                <p className="marginb2">Channel Name • 40 years ago</p>
                <p>
                  People keep saying "this limitation was removed in 2013" but I just posted something over 10,000 characters and it would not post. After reducing it slightly, trying to post, it failing and slightly reducing it again I found that at 9,800 characters it will post.

                  So there is a limit, although this is huge and it appears to be set to 10,000 characters.

                  People are primarily asking what the exact limit is, this is my educated guess after noticing I had to go under that amount. The limit could very well be 9,900 or 9,950 characters but I can't see that being likely since this was so close to being 10,000 - thats my guess on the actual limitation.

                  It can reach this (massive? lol) limit if you are quoting other people's lengthy responses and adding your own.
                  WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                </p>
                <p><img src="ResponsesIcon.svg"></img> 200k replies</p>
                <div className="videopage__responses margint4">

                  <div className="videopage__responses__response">

                    <img className="thumbnailpreview__info__userprofile"></img>

                    <div className="videopage__responses__response__text marginl3">


                      <p className="marginb2">Channel Name • 40 years ago</p>
                      <p>
                        People keep saying "this limitation was removed in 2013" but I just posted something over 10,000 characters and it would not post. After reducing it slightly, trying to post, it failing and slightly reducing it again I found that at 9,800 characters it will post.

                        So there is a limit, although this is huge and it appears to be set to 10,000 characters.

                        People are primarily asking what the exact limit is, this is my educated guess after noticing I had to go under that amount. The limit could very well be 9,900 or 9,950 characters but I can't see that being likely since this was so close to being 10,000 - thats my guess on the actual limitation.

                        It can reach this (massive? lol) limit if you are quoting other people's lengthy responses and adding your own.
                        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                      </p>
                    </div>

                  </div>

                </div>
                <div className="videopage__responses margint4">

                  <div className="videopage__responses__response">

                    <img className="thumbnailpreview__info__userprofile"></img>

                    <div className="videopage__responses__response__text marginl3">


                      <p className="marginb1">Channel Name • 40 years ago</p>
                      <p>
                        People keep saying "this limitation was removed in 2013" but I just posted something over 10,000 characters and it would not post. After reducing it slightly, trying to post, it failing and slightly reducing it again I found that at 9,800 characters it will post.

                        So there is a limit, although this is huge and it appears to be set to 10,000 characters.

                        People are primarily asking what the exact limit is, this is my educated guess after noticing I had to go under that amount. The limit could very well be 9,900 or 9,950 characters but I can't see that being likely since this was so close to being 10,000 - thats my guess on the actual limitation.

                        It can reach this (massive? lol) limit if you are quoting other people's lengthy responses and adding your own.
                        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                      </p>
                    </div>

                  </div>

                </div>
              </div>


            </div>

          </div>

        </div>
        <div className="videopage__suggestions">

          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall></ThumbnailPreviewSmall>

          <div className="whitespace"></div>


        </div>


      </div>


    </>
  )
}

export default VideoPage

