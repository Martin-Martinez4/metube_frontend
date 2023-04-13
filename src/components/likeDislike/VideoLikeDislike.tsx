import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Like_Dislike } from "../../__generated__/graphql";
import { gql } from "../../__generated__/gql";

const USER_LIKED_VIDEO = gql(/* GraphQL */`
    query VideoLikeStatus($id: ID!){
      getVideoLikeStatus(id: $id)
    }

`);

export const LIKE_VIDEO = gql(/* GraphQL */`

    mutation LikeVideo($video_id: String!){
      likeVideo(video_id: $video_id)
    }
`);
export const DISLIKE_VIDEO = gql(/* GraphQL */`

    mutation DislikeVideo($video_id: String!){
      dislikeVideo(video_id: $video_id)
    }
`);

type props = {
  video_id: string,
  likes: number | undefined,
  dislikes: number | undefined
}

function VideoLikeDislike({ video_id, likes, dislikes }: props) {

  const userLikedVideo = useQuery(USER_LIKED_VIDEO, {
    variables: { id: `${video_id}` },
  });

  
  const [likeVideo] = useMutation(LIKE_VIDEO);
  const [dislikeVideo] = useMutation(DISLIKE_VIDEO);
  
  const [videoLikeStatus, setVideoLikeStatus] = useState<Like_Dislike | null | undefined>(userLikedVideo.data?.getVideoLikeStatus);
  const [likesAndDislikes, setLikesAndDislikes] = useState<{ likes: number | undefined, dislikes: number | undefined }>({
    likes: likes,
    dislikes: dislikes,
  });


  function handleLikeVideo() {

    if (video_id) {

      likeVideo({
        variables: {
          video_id: video_id,
        }
      })
        .then(res => {
          if (res.data?.likeVideo) {

            const VideoLikeStatusBeforeCurrentAction = videoLikeStatus;

            setVideoLikeStatus(Like_Dislike.Like);

            
            if(VideoLikeStatusBeforeCurrentAction === Like_Dislike.Dislike){


              setLikesAndDislikes({ likes: likesAndDislikes.likes === undefined ? likesAndDislikes.likes : ++likesAndDislikes.likes, dislikes: likesAndDislikes.dislikes === undefined ? likesAndDislikes.dislikes : --likesAndDislikes.dislikes })

            }else{
              
              setLikesAndDislikes({ ...likesAndDislikes, likes: likesAndDislikes.likes === undefined ? likesAndDislikes.likes : ++likesAndDislikes.likes })
            }

          }
        })

    }

  }

  function handleDisLikeVideo() {

    if (video_id) {

      dislikeVideo({
        variables: {
          video_id: video_id,
        }
      })
        .then(res => {
          if (res.data?.dislikeVideo) {

            const VideoLikeStatusBeforeCurrentAction = videoLikeStatus;

            setVideoLikeStatus(Like_Dislike.Dislike);

            if(VideoLikeStatusBeforeCurrentAction === Like_Dislike.Like){
       
              
              setLikesAndDislikes({ likes: likesAndDislikes.likes === undefined ? likesAndDislikes.likes : --likesAndDislikes.likes, dislikes: likesAndDislikes.dislikes === undefined ? likesAndDislikes.dislikes : ++likesAndDislikes.dislikes })
              
            }else{
              
              setLikesAndDislikes({ ...likesAndDislikes, dislikes: likesAndDislikes.dislikes === undefined ? likesAndDislikes.dislikes : ++likesAndDislikes.dislikes })
            }


          }
        })

    }

  }

  useEffect(() => {
    userLikedVideo.refetch({ id: video_id })
    .then(
      res => {

        setVideoLikeStatus(res.data.getVideoLikeStatus);
      }
    )

  }, [])

  return (
    <>
      <div className="textaligncenter ">

        {
          videoLikeStatus === Like_Dislike.Like
            ?
            <>
              <img src="/ThumbsupBlue.svg" onClick={handleLikeVideo} className="pointer"></img><span className="marginr2 marginl1">{likesAndDislikes.likes}</span>
              <img src="/Thumbsdown.svg" onClick={handleDisLikeVideo} className="pointer"></img><span className="marginl1">{likesAndDislikes.dislikes}</span>
            </>
            :
            ""
        }
        {
          videoLikeStatus === Like_Dislike.Dislike
            ?
            <>
              <img src="/Thumbsup.svg" onClick={handleLikeVideo} className="pointer"></img><span className="marginr2 marginl1">{likesAndDislikes.likes}</span>
              <img src="/ThumbsdownRed.svg" className="pointer"></img><span className="marginl1">{likesAndDislikes.dislikes}</span>
            </>
            :
            ""
        }
        {
          videoLikeStatus === null || videoLikeStatus === undefined
            ?
            <>
              <img src="/Thumbsup.svg" onClick={handleLikeVideo} className="pointer"></img><span className="marginr2 marginl1">{likesAndDislikes.likes}</span>
              <img src="/Thumbsdown.svg" onClick={handleDisLikeVideo} className="pointer"></img><span className="marginl1">{likesAndDislikes.dislikes}</span>
            </>
            :
            ""
        }
       
      </div>
      {/* ~118px width */}
      <div>---------------</div>
    </>
  )
}

export default VideoLikeDislike


