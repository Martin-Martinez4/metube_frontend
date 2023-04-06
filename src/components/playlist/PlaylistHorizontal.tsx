
import { useState } from "react";
import ThumbnailPreviewSmall from "../video/thumbnailpreview/ThumbnailPreviewSmall";

import "./PlaylistHorizontal.scss"

function PlaylistHorizontal() {

    const [playListPage, setPlayListPage] = useState(0)
    const playlistLength = 12

    return (
        <div className="playlist__container">
            <p className="margint4">Playlist Title</p>
            {/* style={{ transform: `translateX(-(100 * index)% )` }} */}


            {/* <div className="playlist--horizontal" style={{ transform: `translateX(-(100 * 5)% )` }}> */}
            <div className="playlist--horizontal" style={{ transform: `translateX(${-(16 * 4.5 * playListPage)}vw )` }}>

                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>

                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>

                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width="16vw"></ThumbnailPreviewSmall>


            </div>
          
            {playListPage > 0 
            ?
            <img src="/ChevronRight.svg" alt="see more" className="playlist__seeLess round pointer" onClick={() => setPlayListPage(playListPage - 1)}></img>
            :
            ""
            }

            {
                (playlistLength > 5 && (playListPage+1) * 5 < playlistLength) 
                ?
                <img src="/ChevronRight.svg" alt="see more" className="playlist__seeMore round pointer" onClick={() => setPlayListPage(playListPage + 1)}></img>
                :
                ""
            }
            
            <hr className="playlist__horizontalline"/>
        </div>
    )
}

export default PlaylistHorizontal

