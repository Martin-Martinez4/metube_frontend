
import { useState } from "react";
import ThumbnailPreviewSmall from "../video/thumbnailpreview/ThumbnailPreviewSmall";

import "./PlaylistHorizontal.scss"

function PlaylistHorizontal() {

    const numberOfVideosPerPage = 4.5;
    const videoWidth = 16;
    const videoWidthUnit = "vw"

    const [playListPage, setPlayListPage] = useState(0)
    // will be dynamic later
    const playlistLength = 12;


    return (
        <div className="playlist__container">
            <p className="margint4">Playlist Title</p>

            <div className="playlist--horizontal" style={{ transform: `translateX(${-(videoWidth * numberOfVideosPerPage * playListPage)}${videoWidthUnit} )` }}>

                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>

                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>

                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>
                <ThumbnailPreviewSmall id="" width={`${videoWidth}${videoWidthUnit}`}></ThumbnailPreviewSmall>


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

