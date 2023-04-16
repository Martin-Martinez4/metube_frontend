import { Like_Dislike,  Comment as  Commenttype } from "../../__generated__/graphql";
import { formatdate } from "../../app/utilis/dateFormaters";
import CommentLikeDislike from "../likeDislike/CommentLikeDislike";

type props  = {
    comment: Commenttype,
}


function Comment({ comment }: props) {

  return (
    <div className="videopage__comments__comment margint4">

                <img className="thumbnailpreview__info__userprofile" src={`http://localhost:8081/profile/${comment.Profile?.username}/`}></img>

                <div className="videopage__comments__comment__text marginl3">
                    <p className="marginb2">{comment.Profile?.username} • {formatdate(comment.datePosted) + " ago"}</p>
                    <p className="marginb3">
                        {comment.body}
                    </p>
                    
                    <CommentLikeDislike comment_id={comment.id} likes={comment.likes} dislikes={comment.dislikes} userlikedComment={comment.status} ></CommentLikeDislike>
                    
                    <p><img src="/ResponsesIcon.svg"></img> {comment.responses ?  `${comment.responses}` + "replies" : ""} </p>
                    {/* 
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

                    </div> */}

                </div>


            </div>
  )
}

export default Comment


