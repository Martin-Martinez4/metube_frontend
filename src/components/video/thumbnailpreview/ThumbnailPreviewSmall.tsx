
import { Link } from "react-router-dom"
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import { formatdate } from "../../../app/utilis/dateFormaters"
import "./ThumbnailPreviewSmall.scss"

function ThumbnailPreviewSmall({ width, video }: ThumbnailPreviewProps) {

  console.log(video)

  return (
    <div style={{ width: `${width}` }}>

      <div className="thumbnailpreview--small">

      <Link to={`/video/${video.id}`}>
              <img className="thumbnailpreview__thumbnail" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}`+ `/downloads/${video.url.split("/")[2]}.jpg/`}></img>
            </Link>
        <div className="thumbnailpreview--small__info">

          <div className="thumbnailpreview--small__info__textarea">
            <p className="thumbnailpreview--small__videotitle">{video.contentinformation.title}</p>
            <p className="thumbnailpreview--small__channelname">{video.profile.username}</p>
            <p className="thumbnailpreview--small__userinformation">{video.statistic.views} views • {video?.contentinformation?.published ? formatdate(video?.contentinformation?.published) : ""} ago</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThumbnailPreviewSmall

