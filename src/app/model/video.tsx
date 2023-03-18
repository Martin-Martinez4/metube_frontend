
export type ContentInformation = {

    title: string,
    description: string,
    published: string,
    channel_id: string,
}
export type Profile = {
    id: string,
    username: string,
    displayname: string,
    isChannel: boolean,
}

export type Statistic = {
    likes: number,
    dislikes: number,
    views: number,
    favorites: number,
    comments: number,
}
export type Status = {
    
    uploadstatus: string,
    privacystatus: string,
    
}
export type Thumbnail = {
    url: string,
}




// title={contentinformation.title} channelname={profile.username} views={statistic.views} thumbnail={thumbnail.url} profile_id={profile.id}
export type VideoPreview = {
    id: string,
    url: string,
    categoryid: string,
    duration: number,
    profile_id: string,
    contentinformation: ContentInformation,
    thumbnail: Thumbnail,
    statistic: Statistic,
    status: Status,
    profile: Profile,


}



