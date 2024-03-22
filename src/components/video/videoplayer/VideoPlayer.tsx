
import { useRef, MouseEvent } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from '../../../app/videojs/VideoJs';

function VideoPlayer({ video_url }: { video_url: string }) {
  
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    if (localStorage.getItem(video_url.split("/")[2]) !== null) {
      console.log(localStorage.getItem(video_url.split("/")[2]))
      player.currentTime(Number(localStorage.getItem(video_url.split("/")[2])))

    }
    
    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    let lastUpdated = 0;
    player.on('timeupdate', () => {
      if(Math.floor(player.currentTime()) % 10 === 0 && lastUpdated != Math.floor(player.currentTime())){
        lastUpdated = Math.floor(player.currentTime());
        localStorage.setItem(video_url.split("/")[2], String(lastUpdated))
        console.log(localStorage.getItem(video_url.split("/")[2]))
      }
    })

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
      src: `http://${import.meta.env.VITE_HOST_URL}:${import.meta.env.VITE_HOST_PORT}${video_url}`,
      type: "application/x-mpegURL"
    }],
    controlBar: {
      volumePanel: {
        inline: false,
        volumeControl: {
          vertical: true
        }
      }
    },
    userActions: {
      doubleClick: handleDoubleClick,
      hotkeys: function (event) {
        // `this` is the player in this context

        event.stopPropagation();
        event.preventDefault();

        let time: number;


        if (event.which === 37) {
          time = this.currentTime() - 10;

          if (time < 0) {
            time = 0;
          }

          this.currentTime(time);

          return
        } else if (event.which === 39) {
          time = this.currentTime() + 10;

          if (time < 0) {
            time = 0;
          }

          this.currentTime(time);

          return
        }

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
      <VideoJS video_url={video_url} options={videoJsOptions} onReady={handlePlayerReady}/>

    </div>
  )
}

export default VideoPlayer

