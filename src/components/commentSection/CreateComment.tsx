
import { useEffect, useRef, useState } from "react";
import "./CreateComment.scss";
import { handleFormInputChange } from "../../app/utilis/eventhandlers";
import { loggedInUserVar } from "../../app/apolloCache/InMemoryCache";
import { CommentInput } from "../../__generated__/graphql";

type props = {

  handleCreateComment: (comment: CommentInput) => Promise<{ created: boolean, error: Error | null }>,
  video_id: string,
  initialData?: string,
  handleCancel?: () => void,
  startInEditMode?: boolean,
  handleSubmit?: () => void,

}


function CreateComment({ handleCreateComment, video_id, initialData, handleCancel, startInEditMode, handleSubmit }: props) {

  const loggedInUser = loggedInUserVar()

  const [editMode, setEditMode] = useState(startInEditMode);

  const [commentBoxText, setCommentBoxText] = useState({
    commentBoxText: initialData ? initialData : ""
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [commentBoxText, editMode]);

  async function handleSubmitComment() {

    const resultComment = await handleCreateComment({ body: commentBoxText.commentBoxText, VideoId: video_id })

    if (resultComment.error !== null || resultComment.created === false) {

      alert("Create Comment failed")
      alert(resultComment.created)

      return

    } else {

      setEditMode(false)
      setCommentBoxText({ ...commentBoxText, commentBoxText: "" })

      if (handleSubmit) {
        handleSubmit();
      }

      return

    }


  }


  return (

    <div className={editMode ? "flexColumn" : "flex"}>
      <div>

        {
          editMode
            ?
            <div className="flexColumn">

              <p className="marginb3">You are commenting as </p>
              <div className="flex">
                <img className="thumbnailpreview__info__userprofile marginb3 marginr3" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/${loggedInUser.Username}/`}></img>
                <div>
                  <p>{loggedInUser.Displayname}</p>
                  <p>@{loggedInUser.Username}</p>

                </div>

              </div>
            </div>
            :
            <img className="thumbnailpreview__info__userprofile marginr3" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/${""}/`}></img>
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
            <div className="btn marginr2 bgred colorwhite" onClick={() => {
              if (handleCancel) {

                handleCancel()
              }
              setEditMode(false)
            }}>Cancel
            </div>
            <div className="btn bgblue colorwhite" onClick={() => handleSubmitComment()}>Comment</div>
          </div>
          :
          ""
      }

    </div>


  )
}

export default CreateComment

