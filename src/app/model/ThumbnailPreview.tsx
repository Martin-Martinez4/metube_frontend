import { VideoPreview } from "./video"

export type ThumbnailPreviewProps = {

    width?: string,
    id: string,
    url: string,
    duration?: number,
    title?: string,
    channelname?: string,
    views?: number,
    thumbnail?: string,
    profile_id?: string,
    published_date?: string,
}
  
export type ThumbnailPreviewSmallProps = {

    width?: string,
    video: VideoPreview
}
  

