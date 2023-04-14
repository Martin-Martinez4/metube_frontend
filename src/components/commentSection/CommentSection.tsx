
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";
import Comment from "./Comment";
import { Like_Dislike, Comment as Commenttype, CommentInput } from "../../__generated__/graphql";
import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";

type props = {
    video_id: string,
    number_of_comments: number | undefined,
}

const VIDEO_COMMENTS = gql(/* GraphQL */`
    query GetVideoComments($video_id: String!) {
  getVideoComments(video_id: $video_id) {
    id
    parent_id
    body
    status
    likes
    dislikes
    responses
    
    Profile{
      username
      displayname
    }
  }
},
    
  `);

export const CREATE_COMMENT = gql(/* GraphQL */`

    mutation CreateComment($body: String!, $video_id: String!){
        createComment(comment:{body: $body, VideoId: $video_id}){
            id
            parent_id
            body
            status
            likes
            dislikes
            responses
            datePosted

            Profile{
                username
                displayname
            }
        }
    }
`);

function CommentSection({ video_id, number_of_comments }: props) {

    const { data, loading, error, refetch } = useQuery(VIDEO_COMMENTS, {
        variables: {
            video_id: video_id
        }
    })

    const [createComment] = useMutation(CREATE_COMMENT);


    const [comments, setComments] = useState(data?.getVideoComments.map((comment) => {

        return (
            <Comment key={comment?.id} comment={comment as Commenttype}></Comment>
        )
    }))


    useEffect(() => {
        refetch({ video_id: video_id })
    }, [])

    function addNewComment(comment: CommentInput) {


        createComment({
            variables: {

                body: comment.body,
                video_id: video_id
            }


        })
        .then(res => {

            const createdComment = res.data?.createComment


            if (comments) {
    
                // setComments([...comments, <Comment key={createdComment?.id} comment={{ body: createdComment?.body || "", video_id: video_id, likes: createdComment?.likes || 0, dislikes: createdComment?.dislikes || 0, responses: createdComment?.responses || 0, datePosted: createdComment?.datePosted||"", id: createdComment?.id || "" }}></Comment>])
                setComments([...comments, <Comment key={createdComment?.id} comment={createdComment as Commenttype}></Comment>])
            }
            else {
                setComments([<Comment key={"test"} comment={{ body: comment.body, video_id: comment.VideoId, likes: 0, dislikes: 0, responses: 0, datePosted: "today", id: "121123123" }}></Comment>])
    
            }

        })
        .catch(err => err)




    }

    useEffect(() => {
        setComments(data?.getVideoComments.map((comment) => {

            return (
                <Comment key={comment?.id} comment={comment as Commenttype}></Comment>
            )
        }))
    }, [data])

    if (loading) {
        return (<p>Loading</p>)
    }
    else if (data) {

        return (
            <div className="videopage__comments">

                <p className="marginb3">{number_of_comments ? number_of_comments : ""} Comments</p>
                <CreateComment></CreateComment>

                {
                    comments
                }

            </div>
        )
    }
    else {
        return (<p>Problem getting comments</p>)
    }

}

export default CommentSection

