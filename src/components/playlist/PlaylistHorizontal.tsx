
import ThumbnailPreviewSmall from "../video/thumbnailpreview/ThumbnailPreviewSmall";

import "./PlaylistHorizontal.scss"

function PlaylistHorizontal() {
    return (
        <div className="playlist__container">
            <p className="margint4">Playlist Title</p>
            {/* style={{ transform: `translateX(-(100 * index)% )` }} */}
            <div className="playlist--horizontal">

                <ThumbnailPreviewSmall width="18vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall width="18vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall width="18vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall width="18vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall width="18vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall width="18vw"></ThumbnailPreviewSmall>


            </div>
            <hr className="playlist__horizontalline"/>
        </div>
    )
}

export default PlaylistHorizontal

