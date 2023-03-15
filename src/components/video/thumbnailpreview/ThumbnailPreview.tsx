
import { ThumbnailPreviewProps } from "../../../app/model/ThumbnailPreview"
import "./ThumbnailPreview.scss"

function ThumbnailPreview({ width }: ThumbnailPreviewProps) {
  return (

    <div style={{ width: `${width}`}}>
        <div className="thumbnailpreview">

          <img className="thumbnailpreview__thumbnail"></img>

            <div className="thumbnailpreview__info">

              <img className="thumbnailpreview__info__userprofile"></img>

              <div className="thumbnailpreview__info__textarea">
                  <p className="thumbnailpreview__videotitle">Part 3 - Adding Dataloader with DataloadenAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    {/* <p className="thumbnailpreview__userinformation">Channel Name Channel Name Channel Name Channel Name Channell</p> */}
                    <p className="thumbnailpreview__userinformation">WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW</p>
                  <p className="thumbnailpreview__userinformation">28k views • 2years ago</p>
              </div>
            </div>

        </div>
      </div>
      
  )
}

export default ThumbnailPreview

