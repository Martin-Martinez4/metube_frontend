
import { useRef, MouseEvent } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from '../../../app/videojs/VideoJs';

function VideoPlayer({ video_url }: { video_url: string }) {

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

  function handleDoubleClick(event: MouseEvent<HTMLElement>) {
    // `this` is the player in this context

    event.stopPropagation();
    event.preventDefault();

    const videoThirdWidth = ((event.target as HTMLInputElement).offsetWidth) / 3;
    const clickXCoordinate = event.clientX;

    // Maybe use a set timeout function to buffer seek commands


    let time: number;

    if (clickXCoordinate <= videoThirdWidth) {

      time = this.currentTime() - 10;

      if (time < 0) {
        time = 0;
      }

      this.currentTime(time);

      return

    } else if (clickXCoordinate > videoThirdWidth && clickXCoordinate <= (videoThirdWidth * 2)) {



      return

    } else {
      time = this.currentTime() + 10;

      if (time < 0) {
        time = 0;
      }

      this.currentTime(time);

      return

    }

  };


  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    aspectRatio: '16:9',
    nativeControlsForTouch: true,
    sources: [{
      src: `http://192.168.1.46:8081${video_url}`,
      type: "application/x-mpegURL"
    }],
    userActions: {
      doubleClick: handleDoubleClick,
      hotkeys: function (event) {
        // `this` is the player in this context

        event.stopPropagation();
        event.preventDefault();


        if (event.which === 32 && this.paused()) {
          this.play();
          return
        }
        else if (event.which === 32 && !this.paused()) {
          
          this.pause();
          return
        }
      },

    }
  };



  return (
    <div style={{ width: "100%", height: "auto" }}>
      <VideoJS video_url={video_url} options={videoJsOptions} onReady={handlePlayerReady} />

    </div>
  )
}

export default VideoPlayer

