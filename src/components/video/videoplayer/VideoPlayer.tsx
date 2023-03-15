
import { useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from '../../../app/videojs/VideoJs';

function VideoPlayer() {

    const playerRef = useRef(null);

    const videoJsOptions = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      aspectRatio: '16:9',
      sources: [{
        src: "http://localhost:8081/media/Trigun_Ep1/stream/",
        type: "application/x-mpegURL"
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });
  
      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    };

  return (
    <div style={{ width: "100%", height: "auto"}}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

    </div>
  )
}

export default VideoPlayer

