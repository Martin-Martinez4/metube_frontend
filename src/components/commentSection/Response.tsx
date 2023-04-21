
import { useState } from "react";
import { CommentInput, Comment as Commenttype } from "../../__generated__/graphql";
import { formatdate } from "../../app/utilis/dateFormaters";
import CommentLikeDislike from "../likeDislike/CommentLikeDislike";
import CreateComment from "./CreateComment";

type props = {
    comment: Commenttype,
    handleAddNewResponse: (comment: CommentInput) =>  Promise<{created: boolean, error: Error | null}>,
}

function Response({ comment, handleAddNewResponse }: props) {

    const [createResponseMode, setCreateResponseMode] = useState(false);

    return (

        
        <div className="videopage__responses__response margint5">
            <img className="thumbnailpreview__info__userprofile" src={`http://localhost:8081/profile/${comment.Profile?.username}/`}></img>

            <div className="videopage__responses__response__text marginl3">


                <p className="marginb2">{comment.Profile?.username} • {formatdate(comment.datePosted)}</p>
                <p>
                    {comment.body}
                </p>
                <div className="flex">

                    <CommentLikeDislike comment_id={comment.id} likes={comment.likes} dislikes={comment.dislikes} userlikedComment={comment.status} ></CommentLikeDislike>

                </div>
                <div className="reply__button hoverPill colorblue hoverlighten pointer" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCreateResponseMode(!createResponseMode);
                    }}>reply</div>
                    {
                        createResponseMode
                        ?
                        <CreateComment 
                            handleCreateComment={handleAddNewResponse} 
                            video_id={comment.video_id ? comment.video_id : ""} 
                            initialData={`@${comment.Profile?.username} `}
                            startInEditMode={true}
                            handleCancel={() => {setCreateResponseMode(false)}}
                            handleSubmit={() => {setCreateResponseMode(false)}}
                        ></CreateComment>
                        :
                        ""
                    }
            </div>

        </div>
    )
}

export default Response
