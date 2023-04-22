
import { useMutation, useLazyQuery } from "@apollo/client";

import { gql } from "../../__generated__/gql";
import Comment from "./Comment";
import { Comment as Commenttype, CommentInput } from "../../__generated__/graphql";
import { Suspense, useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import LoadingSpinner from "../loadingIndicator/LoadingSpinner";
import { handleAccessError } from "../../app/errors/handleAccessError/HandleAccessError";
import { loggedInUserVar } from "../../app/apolloCache/InMemoryCache";

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
    datePosted
    video_id
    
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
            video_id

            Profile{
                username
                displayname
            }
        }
    }
`);

function CommentSection({ video_id, number_of_comments }: props) {

    const [getComments, { data, loading, error, refetch }] = useLazyQuery(VIDEO_COMMENTS);
    const [createComment] = useMutation(CREATE_COMMENT);

    const [showComments, setShowComments] = useState(false)

    const isLoggedIn = loggedInUserVar().isLoggedIn;

    const [comments, setComments] = useState(data?.getVideoComments.map((comment) => {

        return (
            <Comment key={comment?.id} comment={comment as Commenttype}></Comment>
        )
    }))

    async function addNewComment(comment: CommentInput): Promise<{ created: boolean, error: Error | null }> {

        const result = { created: false, error: null };

        const res = await createComment({
            variables: {

                body: comment.body,
                video_id: video_id
            }


        })
            .then(res => {

                const createdComment = res.data?.createComment;

                if (comments) {

                    setComments([<Comment key={createdComment?.id} comment={createdComment as Commenttype}></Comment>, ...comments])
                }
                else {
                    setComments([<Comment key={createdComment?.id} comment={createdComment as Commenttype}></Comment>])

                }

                result.created = true;
                // error stays as null

                return result

            })
            .catch(err => {


                handleAccessError(err)

                result.error = err
                return result
            })

        return res;

    }

    useEffect(() => {
        setComments(data?.getVideoComments.map((comment) => {

            return (
                <Comment key={comment?.id} comment={comment as Commenttype}></Comment>
            )
        }))
    }, [data])

    useEffect(() => {
        refetch({ video_id: video_id })
    }, [showComments])

    return (
        <div className="videopage__comments">
            <div className="flex marginb3 AlignItemsCenter">

                <img className={`pointer marginr1 ${showComments ? "" : "transformRotNeg90"}`} src="/ResponsesIcon.svg" style={{ width: ".8rem" }}
                    onClick={
                        () => {
                            getComments({ variables: { video_id: video_id } })
                            setShowComments(!showComments)
                        }
                    }
                ></img>
                <p>{number_of_comments ? number_of_comments : ""} Comments</p>
            </div>
            {
                showComments
                    ?
                    <Suspense fallback={
                        <div className="flex justifyContentCenter" style={{ height: "100%" }}>

                            <LoadingSpinner></LoadingSpinner>

                        </div>
                    }>
                        {
                            isLoggedIn
                                ?
                                <CreateComment handleCreateComment={addNewComment} video_id={video_id}></CreateComment>
                                :
                                ""
                        }
                        {
                            comments
                        }
                    </Suspense>
                    :
                    ""

            }


        </div>
    )
}



export default CommentSection

