
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { formatdate } from "../../app/utilis/dateFormaters";
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreviewSmall from "../../components/video/thumbnailpreview/ThumbnailPreviewSmall";
import VideoDescription from "../../components/video/videodescription/VideoDescription";
import VideoPlayer from "../../components/video/videoplayer/VideoPlayer"
import { gql } from "../../__generated__/gql";

import "./VideoPage.scss";

  const VIDEO_QUERY = gql(/* GraphQL */`
    query Video($id: ID!){
      video(id: $id){
        id
        url
        contentinformation{
          title
          description
          published
        }
        thumbnail{
          url
        }
        statistic{
          likes
          dislikes
          views
        }
        profile{
          username
        }
      
      }
    }
  `);

function VideoPage() {

  const {video_id} = useParams();

  
  
  const { loading, error, data } = useQuery(VIDEO_QUERY, {
    variables: { id: `${video_id}` },
  });

  
  if(loading){
    return <p>Loading...</p>
  }
  
  return (
    <>
      <TopNav></TopNav>
      <div className="videopage__container">


        <div className="videopage__mainarea">

          <div className="videopage__video marginb3">
            <VideoPlayer video_url={data?.video?.url ? data?.video?.url : ""}></VideoPlayer>
            <div className="videopage__video__info">

              <h1 className="marginb1 videopage__video__title">{data?.video?.contentinformation?.title}</h1>

              <div className="marginb2 flex justifyContentSpaceBetween">
                {data?.video?.statistic?.views} views • {data?.video?.contentinformation?.published ? formatdate(data?.video?.contentinformation?.published) : ""} ago
                <div className="flex">
                  <div className="flexcolumn justifyContentCenter">
                    <div className="flex justifyContentCenter">

                      <div className="flexcolumn AlignItemsCenter marginr2">

                        <div className="textaligncenter ">

                          <img src="/Thumbsup.svg"></img><span className="marginr2 marginl1">{data?.video?.statistic?.likes}</span>
                          <img src="/Thumbsdown.svg"></img><span className="marginl1">{data?.video?.statistic?.dislikes}</span>
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

                <img className="thumbnailpreview__info__userprofile marginr2" src={`http://localhost:8081/profile/` + data?.video?.profile?.username + "/"}></img>
                <div className="flexColumn">
                  <span style={{ wordBreak: "break-word", maxWidth: "25vw" }}>{data?.video?.profile?.username}</span>
                  <span>184K subscribers </span>
                </div>
              </div>

              <div className="flex">

                <div className="btn bgred colorwhite marginr2 videopage__video__info__button--subscribe">
                  Subscribe
                </div>
              </div>

            </div>

            <VideoDescription description={data?.video?.contentinformation?.description}></VideoDescription>


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
                <p><img src="/ResponsesIcon.svg"></img> 200k replies</p>
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
                <p><img src="/ResponsesIcon.svg"></img> 200k replies</p>
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

          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
          <ThumbnailPreviewSmall id="1"></ThumbnailPreviewSmall>
 id="1"
          <div className="whitespace"></div>


        </div>


      </div>


    </>
  )
}

export default VideoPage

