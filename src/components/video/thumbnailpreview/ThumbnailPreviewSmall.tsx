
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import "./ThumbnailPreviewSmall.scss"

function ThumbnailPreviewSmall({ width }: ThumbnailPreviewProps) {

  return (
    <div style={{ width: `${width}` }}>

      <div className="thumbnailpreview--small">

        <img className="thumbnailpreview--small__thumbnail"></img>

        <div className="thumbnailpreview--small__info">

          <div className="thumbnailpreview--small__info__textarea">
            <p className="thumbnailpreview--small__videotitle">Part 3 - Adding Dataloader with DataloadenAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <p className="thumbnailpreview--small__channelname">WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW</p>
            <p className="thumbnailpreview--small__userinformation">28k views • 2years ago</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThumbnailPreviewSmall

