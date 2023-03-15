
import { useState } from "react"

import { handleToggleBooleanState } from "../../../app/utilis/eventhandlers"

import "./VideoDescription.scss"

function VideoDescription() {

  const [seeMore, setSeeMore] = useState(false)

  return (

    <div className="video__description">
         {/* style Maybe add a onclick event instead? */}
        <div className={` ${seeMore ? "hidden" : ""}`}>
            Keep on learning with Brilliant at https://brilliant.org/LowLevelLearning. Get started for free, and hurry — the first 200 people get 20% off an annual premium subscription with my URL! Thanks again Brilliant for sponsoring this video!… 
            <span className="bold marginl2 pointer" onClick={(e) => handleToggleBooleanState(e,seeMore,setSeeMore)}>{seeMore ? "" : "See More"}</span>
        </div>
        <div className={` ${seeMore ? "" : "hidden"}`}>
            Keep on learning with Brilliant at https://brilliant.org/LowLevelLearning. Get started for free, and hurry — the first 200 people get 20% off an annual premium subscription with my URL! Thanks again Brilliant for sponsoring this video!
            WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
            <ul>
                <li>test</li>
            </ul>

            <span className="bold pointer" onClick={(e) => handleToggleBooleanState(e, seeMore,setSeeMore)}>See Less</span>
     </div>
    </div>
  )
}

export default VideoDescription

