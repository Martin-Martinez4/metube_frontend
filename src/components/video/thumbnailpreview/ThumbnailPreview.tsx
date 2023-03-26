
import { useNavigate } from "react-router-dom"
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import "./ThumbnailPreview.scss"

function ThumbnailPreview({ id, width, title, channelname, views, thumbnail, profile_id }: ThumbnailPreviewProps) {

  const navigate = useNavigate()

  return (

    <div className="pointer" style={{ width: `${width}`}}>
        <div className="thumbnailpreview">

          <img onClick={() => {navigate(`/video/${id}`)}} className="thumbnailpreview__thumbnail" src={`http://localhost:8081`+ thumbnail}></img>

            <div onClick={() => {navigate(`/profile/${profile_id}`)}} className="thumbnailpreview__info">

              <img className="thumbnailpreview__info__userprofile" src={`http://localhost:8081/profile/` + profile_id + "/"}></img>

              <div className="thumbnailpreview__info__textarea">
                  <p className="thumbnailpreview__videotitle">{title}</p>
                    <p className="thumbnailpreview__userinformation">{channelname}</p>
                  <p className="thumbnailpreview__userinformation">{views} views • 2years ago</p>
              </div>
            </div>

        </div>
      </div>
      
  )
}

export default ThumbnailPreview

