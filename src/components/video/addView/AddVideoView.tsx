import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { gql } from "../../../__generated__/gql";

type props = {
    video_id: string | undefined
}

function AddVideoView({video_id}: props) {

    const ADD_VIDEO_VIEW = gql(`
    mutation VideoView($video_id: String!){
  	
      videoView(video_id: $video_id)
      
    }
  `)

    const [addVideoView] = useMutation(ADD_VIDEO_VIEW);

    useEffect(() => {

        const addVideoViewTimer = setTimeout(() => {

            if (video_id) {

                addVideoView({
                    variables: { video_id: video_id }
                })
            }

        }, 5000)

        return () => {
            clearTimeout(addVideoViewTimer);
        };
    }, [])


    return (
        <>test</>
    )
}

export default AddVideoView;
