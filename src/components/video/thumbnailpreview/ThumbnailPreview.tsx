
import { useNavigate } from "react-router-dom"
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import "./ThumbnailPreview.scss"
import { formatdate } from "../../../app/utilis/dateFormaters"

function ThumbnailPreview({ id, width, title, channelname, views, thumbnail, profile_id, published_date }: ThumbnailPreviewProps) {

  const navigate = useNavigate()

  return (

    <div className="pointer" style={{ width: `${width}`}}>
        <div className="thumbnailpreview">

          <img onClick={() => {navigate(`/video/${id}`)}} className="thumbnailpreview__thumbnail" src={`http://localhost:8081`+ thumbnail}></img>

            <div onClick={() => {navigate(`/profile/${profile_id}`)}} className="thumbnailpreview__info">

              <img className="thumbnailpreview__info__userprofile" src={`http://localhost:8081/profile/` + channelname + "/"}></img>

              <div className="thumbnailpreview__info__textarea">
                  <p className="thumbnailpreview__videotitle">{title}</p>
                    <p className="thumbnailpreview__userinformation">{channelname}</p>
                  <p className="thumbnailpreview__userinformation">{views} views • {published_date ? formatdate(published_date) + " ago": ""}</p>
              </div>
            </div>

        </div>
      </div>
      
  )
}

export default ThumbnailPreview

