/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetVideoComments($video_id: String!) {\n  getVideoComments(video_id: $video_id) {\n    id\n    parent_id\n    body\n    status\n    likes\n    dislikes\n    responses\n    datePosted\n    \n    Profile{\n      username\n      displayname\n    }\n  }\n},\n    \n  ": types.GetVideoCommentsDocument,
    "\n\n    mutation CreateComment($body: String!, $video_id: String!){\n        createComment(comment:{body: $body, VideoId: $video_id}){\n            id\n            parent_id\n            body\n            status\n            likes\n            dislikes\n            responses\n            datePosted\n\n            Profile{\n                username\n                displayname\n            }\n        }\n    }\n": types.CreateCommentDocument,
    "\n\n    mutation LikeComment($comment_id: String!){\n      likeComment(comment_id: $comment_id)\n    }\n": types.LikeCommentDocument,
    "\n\n    mutation DislikeComment($comment_id: String!){\n      dislikeComment(comment_id: $comment_id)\n    }\n": types.DislikeCommentDocument,
    "\n\n    mutation DeleteLikeDislikeComment($comment_id: String!){\n      deleteLikeDislikeComment(comment_id: $comment_id)\n    }\n": types.DeleteLikeDislikeCommentDocument,
    "\n    query VideoLikeStatus($id: ID!){\n      getVideoLikeStatus(id: $id)\n    }\n\n": types.VideoLikeStatusDocument,
    "\n\n    mutation LikeVideo($video_id: String!){\n      likeVideo(video_id: $video_id)\n    }\n": types.LikeVideoDocument,
    "\n\n    mutation DislikeVideo($video_id: String!){\n      dislikeVideo(video_id: $video_id)\n    }\n": types.DislikeVideoDocument,
    "\n\n    mutation subscribe($subscribee: String!){\n        subscribe(subscribee: $subscribee)\n    }\n": types.SubscribeDocument,
    "\n\n    mutation unsubscribe($subscribee: String!){\n        unsubscribe(subscribee: $subscribee)\n    }\n": types.UnsubscribeDocument,
    "\nmutation Login($username: String!, $password: String!){\n  login(login:{username:$username, password: $password}){\n    username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n": types.LoginDocument,
    "\nmutation Register($username: String!, $displayname: String!, $password: String!, $password2: String!){\n  register(profileToRegister:{username: $username, displayname: $displayname, password: $password, password2:$password2}){\n    username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n": types.RegisterDocument,
    "\nquery Videos{\n  videos(amount: 4){\n    id\n    url\n    contentinformation{\n      title\n      published\n    }\n    thumbnail{\n      url\n    }\n    statistic{\n      views\n    }\n    profile{\n      username\n    }\n  \n  }\n}\n": types.VideosDocument,
    "\nquery Profile($username: String!){\n  profile(username: $username){\n    username\n    displayname\n    subscribers\n    userIsSubscribedTo\n  \n  }\n}\n": types.ProfileDocument,
    "\n    query Video($id: ID!){\n      video(id: $id){\n        id\n        url\n        contentinformation{\n          title\n          description\n          published\n        }\n        thumbnail{\n          url\n        }\n        statistic{\n          likes\n          dislikes\n          views\n          comments\n        }\n        profile{\n          username\n          userIsSubscribedTo\n          subscribers\n        }\n      \n      }\n    },\n    \n  ": types.VideoDocument,
    "\n    mutation VideoView($video_id: String!){\n  \t\n      videoView(video_id: $video_id)\n      \n    }\n  ": types.VideoViewDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetVideoComments($video_id: String!) {\n  getVideoComments(video_id: $video_id) {\n    id\n    parent_id\n    body\n    status\n    likes\n    dislikes\n    responses\n    datePosted\n    \n    Profile{\n      username\n      displayname\n    }\n  }\n},\n    \n  "): (typeof documents)["\n    query GetVideoComments($video_id: String!) {\n  getVideoComments(video_id: $video_id) {\n    id\n    parent_id\n    body\n    status\n    likes\n    dislikes\n    responses\n    datePosted\n    \n    Profile{\n      username\n      displayname\n    }\n  }\n},\n    \n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation CreateComment($body: String!, $video_id: String!){\n        createComment(comment:{body: $body, VideoId: $video_id}){\n            id\n            parent_id\n            body\n            status\n            likes\n            dislikes\n            responses\n            datePosted\n\n            Profile{\n                username\n                displayname\n            }\n        }\n    }\n"): (typeof documents)["\n\n    mutation CreateComment($body: String!, $video_id: String!){\n        createComment(comment:{body: $body, VideoId: $video_id}){\n            id\n            parent_id\n            body\n            status\n            likes\n            dislikes\n            responses\n            datePosted\n\n            Profile{\n                username\n                displayname\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation LikeComment($comment_id: String!){\n      likeComment(comment_id: $comment_id)\n    }\n"): (typeof documents)["\n\n    mutation LikeComment($comment_id: String!){\n      likeComment(comment_id: $comment_id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation DislikeComment($comment_id: String!){\n      dislikeComment(comment_id: $comment_id)\n    }\n"): (typeof documents)["\n\n    mutation DislikeComment($comment_id: String!){\n      dislikeComment(comment_id: $comment_id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation DeleteLikeDislikeComment($comment_id: String!){\n      deleteLikeDislikeComment(comment_id: $comment_id)\n    }\n"): (typeof documents)["\n\n    mutation DeleteLikeDislikeComment($comment_id: String!){\n      deleteLikeDislikeComment(comment_id: $comment_id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query VideoLikeStatus($id: ID!){\n      getVideoLikeStatus(id: $id)\n    }\n\n"): (typeof documents)["\n    query VideoLikeStatus($id: ID!){\n      getVideoLikeStatus(id: $id)\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation LikeVideo($video_id: String!){\n      likeVideo(video_id: $video_id)\n    }\n"): (typeof documents)["\n\n    mutation LikeVideo($video_id: String!){\n      likeVideo(video_id: $video_id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation DislikeVideo($video_id: String!){\n      dislikeVideo(video_id: $video_id)\n    }\n"): (typeof documents)["\n\n    mutation DislikeVideo($video_id: String!){\n      dislikeVideo(video_id: $video_id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation subscribe($subscribee: String!){\n        subscribe(subscribee: $subscribee)\n    }\n"): (typeof documents)["\n\n    mutation subscribe($subscribee: String!){\n        subscribe(subscribee: $subscribee)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n    mutation unsubscribe($subscribee: String!){\n        unsubscribe(subscribee: $subscribee)\n    }\n"): (typeof documents)["\n\n    mutation unsubscribe($subscribee: String!){\n        unsubscribe(subscribee: $subscribee)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Login($username: String!, $password: String!){\n  login(login:{username:$username, password: $password}){\n    username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n"): (typeof documents)["\nmutation Login($username: String!, $password: String!){\n  login(login:{username:$username, password: $password}){\n    username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Register($username: String!, $displayname: String!, $password: String!, $password2: String!){\n  register(profileToRegister:{username: $username, displayname: $displayname, password: $password, password2:$password2}){\n    username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n"): (typeof documents)["\nmutation Register($username: String!, $displayname: String!, $password: String!, $password2: String!){\n  register(profileToRegister:{username: $username, displayname: $displayname, password: $password, password2:$password2}){\n    username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Videos{\n  videos(amount: 4){\n    id\n    url\n    contentinformation{\n      title\n      published\n    }\n    thumbnail{\n      url\n    }\n    statistic{\n      views\n    }\n    profile{\n      username\n    }\n  \n  }\n}\n"): (typeof documents)["\nquery Videos{\n  videos(amount: 4){\n    id\n    url\n    contentinformation{\n      title\n      published\n    }\n    thumbnail{\n      url\n    }\n    statistic{\n      views\n    }\n    profile{\n      username\n    }\n  \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Profile($username: String!){\n  profile(username: $username){\n    username\n    displayname\n    subscribers\n    userIsSubscribedTo\n  \n  }\n}\n"): (typeof documents)["\nquery Profile($username: String!){\n  profile(username: $username){\n    username\n    displayname\n    subscribers\n    userIsSubscribedTo\n  \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Video($id: ID!){\n      video(id: $id){\n        id\n        url\n        contentinformation{\n          title\n          description\n          published\n        }\n        thumbnail{\n          url\n        }\n        statistic{\n          likes\n          dislikes\n          views\n          comments\n        }\n        profile{\n          username\n          userIsSubscribedTo\n          subscribers\n        }\n      \n      }\n    },\n    \n  "): (typeof documents)["\n    query Video($id: ID!){\n      video(id: $id){\n        id\n        url\n        contentinformation{\n          title\n          description\n          published\n        }\n        thumbnail{\n          url\n        }\n        statistic{\n          likes\n          dislikes\n          views\n          comments\n        }\n        profile{\n          username\n          userIsSubscribedTo\n          subscribers\n        }\n      \n      }\n    },\n    \n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation VideoView($video_id: String!){\n  \t\n      videoView(video_id: $video_id)\n      \n    }\n  "): (typeof documents)["\n    mutation VideoView($video_id: String!){\n  \t\n      videoView(video_id: $video_id)\n      \n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;