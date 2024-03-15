
import { useState } from "react"

import { handleToggleBooleanState } from "../../../app/utilis/eventhandlers"

import "./VideoDescription.scss"

function VideoDescription({ description }: {description: string | undefined}) {

  const [seeMore, setSeeMore] = useState(false)

  return (

    <div className="video__description">
         {/* style Maybe add a onclick event instead? */}
        <div className={` ${seeMore ? "hidden" : ""}`}>
            {description?.substring(0,120)}… 
            <span className="bold marginl2 pointer" onClick={(e) => handleToggleBooleanState(e,seeMore,setSeeMore)}>{seeMore ? "" : "See More"}</span>
        </div>
        <div className={` ${seeMore ? "" : "hidden"}`}>
            {description}
          

          <p className="bold pointer" onClick={(e) => handleToggleBooleanState(e, seeMore,setSeeMore)}>See Less</p>
     </div>
    </div>
  )
}

export default VideoDescription

