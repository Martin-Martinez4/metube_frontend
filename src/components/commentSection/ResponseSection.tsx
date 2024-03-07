import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";
import { CommentInput, Comment as CommentType } from "../../__generated__/graphql";
import Response from "./Response"
import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";

import "./ResponseSection.scss";
import { handleAccessError } from "../../app/errors/handleAccessError/HandleAccessError";
import { loggedInUserVar } from "../../app/apolloCache/InMemoryCache";

type props = {
    numberOfResponses: number | undefined,
    video_id: string,
    parent_id: string,
}

const COMMMENT_RESPONSES = gql(/* GraphQL */`
    query GeCommentResponses($comment_id: String!) {
        getCommentResponses(comment_id: $comment_id) {
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
    },
    
  `);



export const CREATE_REPSONSE = gql(/* GraphQL */`

    mutation CreateResponse($body: String!, $video_id: String!, $parent_comment_id: String!){
        createResponse(comment:{body: $body, VideoId: $video_id}, parent_comment_id: $parent_comment_id){
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

const isLoggedIn = loggedInUserVar().isLoggedIn;

function ResponseSection({ numberOfResponses, video_id, parent_id }: props) {

    // const [getResponses, { data, loading, error }] = useLazyQuery(COMMMENT_RESPONSES);
    const [getReplies, { loading, error, data, refetch }] = useLazyQuery(COMMMENT_RESPONSES, {
        variables: { comment_id: `${parent_id}` },
    });

    const [createResponseMode, setCreateResponseMode] = useState(false);

    const [createResponse] = useMutation(CREATE_REPSONSE);

    const [responses, setResponses] = useState(data?.getCommentResponses.map((response) => {

        return (<Response key={response?.id} comment={response as CommentType} handleAddNewResponse={addNewResponse} ></Response>)
    }));

    const [currentNumberOfResponses, setCurrentNumberOfResponses] = useState(numberOfResponses);
    const [showReplies, setShowReplies] = useState(false);

    async function addNewResponse(response: CommentInput) {
        const result = { created: false, error: null };


        const res = await createResponse({
            variables: {

                body: response.body,
                video_id: video_id,
                parent_comment_id: parent_id,
            }


        })
            .then(async res => {

                const createdResponse = res.data?.createResponse;

                console.log(responses)

                await refetch({ comment_id: parent_id })
                    .then(res => {


                        setResponses(res?.data.getCommentResponses.map((response) => {

                            return (<Response key={response?.id} comment={response as CommentType} handleAddNewResponse={addNewResponse} ></Response>)
                        }))

                    })

                if (responses) {

                    setResponses([...responses, <Response key={createdResponse?.id} comment={createdResponse as CommentType} handleAddNewResponse={addNewResponse}></Response>])

                    setCurrentNumberOfResponses(currentNumberOfResponses ? currentNumberOfResponses + 1 : 1)
                }
                else {
                    setResponses([<Response key={createdResponse?.id} comment={createdResponse as CommentType} handleAddNewResponse={addNewResponse}></Response>])
                    setCurrentNumberOfResponses(currentNumberOfResponses ? currentNumberOfResponses + 1 : 1)

                    setShowReplies(true);

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

        setCreateResponseMode(false);
        return res;

    }

    useEffect(() => {
        setResponses(data?.getCommentResponses.map((response) => {

            return (
                <Response key={response?.id} comment={response as CommentType} handleAddNewResponse={addNewResponse}></Response>
            )
        }))
    }, [data])


    return (
        <>
            <div className="flex">

                {
                    currentNumberOfResponses
                        ?
                        <>
                            <img
                                className={`pointer ${showReplies ? "" : " transformRotNeg90"}`}
                                src="/ResponsesIcon.svg"
                                onClick={
                                    (e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        getReplies({ variables: { comment_id: `${parent_id}` } })
                                        setShowReplies(!showReplies)
                                    }
                                }
                            ></img>
                            <p className="marginr2"> {currentNumberOfResponses} Replies</p>
                        </>
                        :
                        ""
                }
                {
                    isLoggedIn
                    ?
                    <div className="reply__button hoverPill colorblue hoverlighten pointer" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCreateResponseMode(true);
                    }}>reply</div>
                    :
                    ""
                }
            </div>
            {
                createResponseMode
                    ?
                    <CreateComment
                        handleCreateComment={addNewResponse}
                        video_id={video_id ? video_id : ""}
                        startInEditMode={true}
                        handleCancel={() => { setCreateResponseMode(false) }}
                        handleSubmit={() => { setCreateResponseMode(false) }}
                    ></CreateComment>
                    :
                    ""
            }

            {
                showReplies
                    ?
                    <div className="videopage__responses margint4">

                        {
                            responses
                        }



                    </div>
                    :
                    ""

            }
            {/* <hr className="ResponseSection__linebreak margint4" /> */}

        </>
    )
}

export default ResponseSection