
import { useNavigate, Link } from "react-router-dom"
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import "./ThumbnailPreviewBig.scss"
import { formatdate, durationFromSeconds } from "../../../app/utilis/dateFormaters"

function ThumbnailPreviewBig({ id, width, url, title, channelname, views, thumbnail, profile_id, published_date, duration }: ThumbnailPreviewProps) {

    const navigate = useNavigate()
    // console.log(url.split("/")[2])
    // console.log(durationFromSeconds(duration!))
    return (
        <div className="pointer thumbnailpreview__container--big">
            <div className="thumbnailpreview--big flex">
                <div className="thumbnailpreview--big__thumbnail__container">

                    <div className="thumbnailpreview__thumbnail__duration">{duration ? durationFromSeconds(duration) : ""}</div>
                    <Link to={`/video/${id}`}>
                        <img className="thumbnailpreview--big__thumbnail" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}` + `/downloads/${url.split("/")[2]}.jpg/`}></img>
                    </Link>
                </div>

                <div className="thumbnailpreview__info">

                    <div className="thumbnailpreview--big__info__textarea">

                        <Link to={`/video/${id}`} className="thumbnailpreview__videotitle__link">
                            <p className="thumbnailpreview__videotitle" >{title}</p>
                        </Link>
                        <div className="flex">

                            <Link to={`/profile/${profile_id}`}>
                                <img className="thumbnailpreview__info__userprofile" src={`http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}/profile/` + channelname + "/"}></img>

                            </Link>
                            <p className="thumbnailpreview__userinformation">{channelname}</p>
                        </div>
                        <p className="thumbnailpreview__userinformation">{views} views • {published_date ? formatdate(published_date) + " ago" : ""}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ThumbnailPreviewBig

