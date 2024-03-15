
import { useNavigate, Link } from "react-router-dom"
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import "./ThumbnailPreview.scss"
import { formatdate, durationFromSeconds } from "../../../app/utilis/dateFormaters"

function ThumbnailPreview({ id, width, url, title, channelname, views, thumbnail, profile_id, published_date, duration }: ThumbnailPreviewProps) {

  const navigate = useNavigate()
  // console.log(url.split("/")[2])
  // console.log(durationFromSeconds(duration!))
  return (
    // <div className="pointer thumbnailpreview__contianer" style={{ width: `${width}`}}>
    <div className="thumbnailpreview__container">
        <div className="thumbnailpreview">
          <div className="thumbnailpreview__thumbnail__container">

            <div className="thumbnailpreview__thumbnail__duration">{duration? durationFromSeconds(duration) : ""}</div>
            <Link to={`/video/${id}`}>
              <img className="thumbnailpreview__thumbnail" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}`+ `/downloads/${url.split("/")[2]}.jpg/`}></img>
            </Link>
          </div>

            <div  className="thumbnailpreview__info">
              <Link to={`/profile/${profile_id}`}>
                <img className="thumbnailpreview__info__userprofile" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/` + channelname + "/"}></img>

              </Link>

              <div className="thumbnailpreview__info__textarea">

                  {/* change to use url */}
                  <Link to={`/video/${id}`} className="thumbnailpreview__videotitle__link">
                    <p className="thumbnailpreview__videotitle" >{title}</p>
                  </Link>
                    <p className="thumbnailpreview__userinformation">{channelname}</p>
                  <p className="thumbnailpreview__userinformation">{views} views • {published_date ? formatdate(published_date) + " ago": ""}</p>
              </div>
            </div>

        </div>
      </div>
      
  )
}

export default ThumbnailPreview

