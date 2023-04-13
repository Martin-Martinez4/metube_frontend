
import { useQuery } from "@apollo/client";
import { gql } from "../../__generated__/gql";
import Comment from "./Comment";
import { Like_Dislike,  Comment as  Commenttype } from "../../__generated__/graphql";
import { useEffect } from "react";
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

function CommentSection({video_id, number_of_comments}: props) {

    const {data, loading, error, refetch} = useQuery(VIDEO_COMMENTS, {
        variables: {
            video_id: video_id
        }
    })

    useEffect(() => {
        refetch({ video_id: video_id })
    }, [])

    if(loading){
        return (<p>Loading</p>)
    }
    else if(data){

        return (
            <div className="videopage__comments">
    
                <p className="marginb3">{number_of_comments? number_of_comments : ""} Comments</p>
                <CreateComment></CreateComment>

                {
                    data.getVideoComments.map((comment) => {

                        return(
                        <Comment comment={comment as Commenttype}></Comment>
                        )
                    })
                }
    
    
            </div>
        )
    }
    else{
        return (<p>Problem getting comments</p>)
    }

}

export default CommentSection

