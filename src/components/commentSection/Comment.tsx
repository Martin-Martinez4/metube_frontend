import { Comment as CommentType } from "../../__generated__/graphql";
import { formatdate } from "../../app/utilis/dateFormaters";
import CommentLikeDislike from "../likeDislike/CommentLikeDislike";
import ResponseSection from "./ResponseSection";

type props = {
    comment: CommentType,
}

function Comment({ comment }: props) {

    return (
        <div className="videopage__comments__comment margint6">

            <img className="thumbnailpreview__info__userprofile" src={`http://192.168.1.46:8081/profile/${comment.Profile?.username}/`}></img>

            <div className="videopage__comments__comment__text marginl3">
                <p className="marginb2">{comment.Profile?.username} • {formatdate(comment.datePosted) + " ago"}</p>
                <p className="marginb3">
                    {comment.body}
                </p>
                <div className="flex">

                    <CommentLikeDislike comment_id={comment.id} likes={comment.likes} dislikes={comment.dislikes} userlikedComment={comment.status} ></CommentLikeDislike>
                    
                </div>

                <ResponseSection numberOfResponses={comment.responses} video_id={comment.video_id as string} parent_id={comment.id} ></ResponseSection>

            </div>


        </div>
    )
}

export default Comment


