
import { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { formatdate } from "../../app/utilis/dateFormaters";
import TopNav from "../../components/nav/topnav/TopNav"
import ThumbnailPreviewSmall from "../../components/video/thumbnailpreview/ThumbnailPreviewSmall";
import VideoDescription from "../../components/video/videodescription/VideoDescription";
import VideoPlayer from "../../components/video/videoplayer/VideoPlayer"
import { gql } from "../../__generated__/gql";

import "./VideoPage.scss";
import SubscribeButton from "../../components/subscribebutton/SubscribeButton";
import VideoLikeDislike from "../../components/likeDislike/VideoLikeDislike";
import CommentSection from "../../components/commentSection/CommentSection";
import AddVideoView from "../../components/video/addView/AddVideoView";
import { formatNumber } from "../../app/utilis/numberFormater";
import LoadingSpinner from "../../components/loadingIndicator/LoadingSpinner";

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
          comments
        }
        profile{
          username
          userIsSubscribedTo
          subscribers
        }
      
      }
    },
    
  `);


function VideoPage() {

  const { video_id } = useParams();

  const { loading, error, data, refetch } = useQuery(VIDEO_QUERY, {
    variables: { id: `${video_id}` },
  });

  useEffect(() => {
    refetch({ id: video_id });

  }, [])


  if (loading) {
    return (
      <div className="flex justifyContentCenter AlignItemsCenter" style={{ height: "100vh" }}>

<LoadingSpinner diameter={"15%"}></LoadingSpinner>


      </div>
    )
  }

  return (
    <>
      <AddVideoView video_id={video_id}></AddVideoView>
      <TopNav></TopNav>
      <div className="videopage__container">


        <div className="videopage__mainarea">

          <div className="videopage__video marginb3">
            <VideoPlayer video_url={data?.video?.url ? data?.video?.url : ""}></VideoPlayer>
            <div className="videopage__video__info">

              <h1 className="marginb1 videopage__video__title">{data?.video?.contentinformation?.title}</h1>

              <div className="marginb2 flex justifyContentSpaceBetween videopage__video__likesAndViews">
                <div className="marginb2">

                {formatNumber(data?.video?.statistic?.views)} views • {data?.video?.contentinformation?.published ? formatdate(data?.video?.contentinformation?.published) : ""} ago
                </div>
                <div className="flex">
                  <div className="flexcolumn justifyContentCenter">
                    <div className="flex justifyContentCenter">

                      <div className="flexcolumn AlignItemsCenter marginr2">


                        {/* ~118px width */}
                        <VideoLikeDislike video_id={video_id ? video_id : ""} likes={data?.video?.statistic?.likes} dislikes={data?.video?.statistic?.dislikes}></VideoLikeDislike>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>



            <div className="flex justifyContentSpaceBetween marginb3 videopage__video__profileAndSubscribe">

              <div className="flex AlignItemsCenter videopage__video__profile">

                <img className="thumbnailpreview__info__userprofile marginr2" src={`http://localhost:8081/profile/` + data?.video?.profile?.username + "/"}></img>
                <div className="flexColumn">
                  <span className="videopage__video__username">{data?.video?.profile?.username}</span>
                  <span>{formatNumber(data?.video?.profile?.subscribers)} subscribers </span>
                </div>
              </div>

              <div className="flex margint3">

                <SubscribeButton username={data?.video?.profile?.username} isSubscribed={data?.video?.profile?.userIsSubscribedTo}></SubscribeButton>
              </div>

            </div>

            <VideoDescription description={data?.video?.contentinformation?.description}></VideoDescription>


          </div>

          <CommentSection video_id={video_id ? video_id : ""} number_of_comments={data?.video?.statistic?.comments}></CommentSection>

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
          <div className="whitespace"></div>


        </div>


      </div>


    </>
  )
}

export default VideoPage

