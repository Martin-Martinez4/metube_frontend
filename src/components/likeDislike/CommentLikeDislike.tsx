import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Like_Dislike } from "../../__generated__/graphql";
import { gql } from "../../__generated__/gql";

export const LIKE_COMMENT = gql(/* GraphQL */`

    mutation LikeComment($comment_id: String!){
      likeComment(comment_id: $comment_id)
    }
`);
export const DISLIKE_COMMENT = gql(/* GraphQL */`

    mutation DislikeComment($comment_id: String!){
      dislikeComment(comment_id: $comment_id)
    }
`);
export const BE_NEUTRAL_ON_COMMENT = gql(/* GraphQL */`

    mutation DeleteLikeDislikeComment($comment_id: String!){
      deleteLikeDislikeComment(comment_id: $comment_id)
    }
`);

type props = {
  comment_id: string,
  likes: number | undefined,
  dislikes: number | undefined,
  userlikedComment: Like_Dislike | null | undefined,
}

function CommentLikeDislike({ comment_id, likes, dislikes, userlikedComment }: props) {

  const [likeComment] = useMutation(LIKE_COMMENT);
  const [dislikeComment] = useMutation(DISLIKE_COMMENT);
  const [beNeutralOnComment] = useMutation(BE_NEUTRAL_ON_COMMENT);

  const [commentLikeStatus, setCommentLikeStatus] = useState<Like_Dislike | null | undefined>(userlikedComment);
  const [likesAndDislikes, setLikesAndDislikes] = useState<{ likes: number | undefined, dislikes: number | undefined }>({
    likes: likes,
    dislikes: dislikes,
  });


  function handleLikeComment() {

    if (comment_id) {

      likeComment({
        variables: {
          comment_id: comment_id,
        }
      })
        .then(res => {
          if (res.data?.likeComment) {

            const VideoLikeStatusBeforeCurrentAction = commentLikeStatus;

            setCommentLikeStatus(Like_Dislike.Like);


            if (VideoLikeStatusBeforeCurrentAction === Like_Dislike.Dislike) {


              setLikesAndDislikes({ likes: likesAndDislikes.likes === undefined ? likesAndDislikes.likes : ++likesAndDislikes.likes, dislikes: likesAndDislikes.dislikes === undefined ? likesAndDislikes.dislikes : --likesAndDislikes.dislikes })

            } else {

              setLikesAndDislikes({ ...likesAndDislikes, likes: likesAndDislikes.likes === undefined ? likesAndDislikes.likes : ++likesAndDislikes.likes })
            }

          }
        })

    }

  }

  function handleDislikeComment() {

    if (comment_id) {

      dislikeComment({
        variables: {
          comment_id: comment_id,
        }
      })
        .then(res => {
          if (res.data?.dislikeComment) {

            const VideoLikeStatusBeforeCurrentAction = commentLikeStatus;

            setCommentLikeStatus(Like_Dislike.Dislike);

            if (VideoLikeStatusBeforeCurrentAction === Like_Dislike.Like) {


              setLikesAndDislikes({ likes: likesAndDislikes.likes === undefined ? likesAndDislikes.likes : --likesAndDislikes.likes, dislikes: likesAndDislikes.dislikes === undefined ? likesAndDislikes.dislikes : ++likesAndDislikes.dislikes })

            } else {

              setLikesAndDislikes({ ...likesAndDislikes, dislikes: likesAndDislikes.dislikes === undefined ? likesAndDislikes.dislikes : ++likesAndDislikes.dislikes })
            }


          }
        })

    }

  }

  useEffect(() => {

    setCommentLikeStatus(userlikedComment);

  }, [])

  return (
    <>
      <div>

        {
          commentLikeStatus === Like_Dislike.Like
            ?
            <>
              <img src="/ThumbsupBlue.svg" onClick={handleLikeComment} className="pointer"></img><span className="marginr2 marginl1">{likesAndDislikes.likes}</span>
              <img src="/Thumbsdown.svg" onClick={handleDislikeComment} className="pointer"></img><span className="marginl1">{likesAndDislikes.dislikes}</span>
            </>
            :
            ""
        }
        {
          commentLikeStatus === Like_Dislike.Dislike
            ?
            <>
              <img src="/Thumbsup.svg" onClick={handleLikeComment} className="pointer"></img><span className="marginr2 marginl1">{likesAndDislikes.likes}</span>
              <img src="/ThumbsdownRed.svg" className="pointer"></img><span className="marginl1">{likesAndDislikes.dislikes}</span>
            </>
            :
            ""
        }
        {
          commentLikeStatus === null || commentLikeStatus === undefined
            ?
            <>
              <img src="/Thumbsup.svg" onClick={handleLikeComment} className="pointer"></img><span className="marginr2 marginl1">{likesAndDislikes.likes}</span>
              <img src="/Thumbsdown.svg" onClick={handleDislikeComment} className="pointer"></img><span className="marginl1">{likesAndDislikes.dislikes}</span>
            </>
            :
            ""
        }

      </div>
      {/* ~118px width */}
      {/* <div>---------------</div> */}
    </>
  )
}

export default CommentLikeDislike


