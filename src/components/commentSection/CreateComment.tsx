
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
  }, [commentBoxText, editMode]);

  return (
    <div className={editMode ? "flexColumn" : "flex"}>
      <div>

        {
          editMode
            ?
            <div className="flexColumn">

              <p className="marginb3">You are commenting as </p>
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
      {
        editMode
          ?
          <textarea
            ref={textareaRef}
            name="commentBoxText"
            className="createComment marginb3"
            placeholder="Write a Comment..."
            onFocus={() => setEditMode(true)}
            onChange={(e) => handleFormInputChange(e, commentBoxText, setCommentBoxText)}
            value={commentBoxText.commentBoxText}
          >
          </textarea>
          :
          <textarea
            className="createComment marginb3"
            placeholder="Write a Comment..."
            onFocus={() => setEditMode(true)}
            style={{ height: "1rem" }}
            value={""}
            
          >
          </textarea>
      }

      {

        editMode
          ?
          <div className="flex justifyContentEnd">
            <div className="btn marginr2 bgred colorwhite" onClick={() => setEditMode(false)}>Cancel</div>
            <div className="btn bgblue colorwhite">Comment</div>
          </div>
          :
          ""
      }

    </div>


  )
}

export default CreateComment

