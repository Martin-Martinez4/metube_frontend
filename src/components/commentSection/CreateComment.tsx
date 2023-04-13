
import { useEffect, useRef, useState } from "react";
import "./CreateComment.scss";
import { handleFormInputChange } from "../../app/utilis/eventhandlers";

function CreateComment() {

  const [editMode, setEditMode] = useState(false);

  const [commentBoxText, setCommentBoxText] = useState({
    commentBoxText: ""
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [commentBoxText]);

  return (
    <div className={editMode ? "flexColumn" : "flex"}>
      <div>

        {
          editMode
            ?
            <div className="flexColumn">

              <p className="marginb3">Commenting as Username</p>
              <div className="flex">
                <img className="thumbnailpreview__info__userprofile marginb3 marginr3" src={`http://localhost:8081/profile/${""}/`}></img>
                <div>
                  <p>username</p>
                  <p>@tagName</p>

                </div>

              </div>
            </div>
            :
            <img className="thumbnailpreview__info__userprofile marginr3" src={`http://localhost:8081/profile/${""}/`}></img>
        }

      </div>
      <textarea
        ref={textareaRef}
        name="commentBoxText"
        className="createComment"
        placeholder="Write a Comment..."
        onChange={(e) => handleFormInputChange(e, commentBoxText, setCommentBoxText)}
      >
        {commentBoxText.commentBoxText}
      </textarea>
    </div>


  )
}

export default CreateComment

