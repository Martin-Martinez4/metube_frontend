/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  Profile?: Maybe<Profile>;
  body: Scalars['String'];
  datePosted: Scalars['String'];
  id: Scalars['ID'];
  parent_id?: Maybe<Scalars['String']>;
  status?: Maybe<Like_Dislike>;
  video_id?: Maybe<Scalars['String']>;
};

export type CommentInput = {
  VideoId: Scalars['String'];
  body: Scalars['String'];
};

export type ContentInformation = {
  __typename?: 'ContentInformation';
  channelid: Scalars['String'];
  description: Scalars['String'];
  published: Scalars['String'];
  title: Scalars['String'];
};

export enum Like_Dislike {
  Dislike = 'dislike',
  Like = 'like'
}

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Scalars['Boolean'];
  createResponse: Scalars['Boolean'];
  deleteLikeDislikeComment: Scalars['Boolean'];
  deleteLikeDislikeVideo: Scalars['Boolean'];
  dislikeComment: Scalars['Boolean'];
  dislikeVideo: Scalars['Boolean'];
  likeComment: Scalars['Boolean'];
  likeVideo: Scalars['Boolean'];
  login?: Maybe<Profile>;
  register?: Maybe<Profile>;
  subscribe: Scalars['Boolean'];
  unsubscribe: Scalars['Boolean'];
  upsertVideo: Video;
  videoView: Scalars['Boolean'];
};


export type MutationCreateCommentArgs = {
  comment: CommentInput;
};


export type MutationCreateResponseArgs = {
  comment: CommentInput;
  parent_comment_id: Scalars['String'];
};


export type MutationDeleteLikeDislikeCommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationDeleteLikeDislikeVideoArgs = {
  video_id: Scalars['String'];
};


export type MutationDislikeCommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationDislikeVideoArgs = {
  video_id: Scalars['String'];
};


export type MutationLikeCommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationLikeVideoArgs = {
  video_id: Scalars['String'];
};


export type MutationLoginArgs = {
  login: LoginInput;
};


export type MutationRegisterArgs = {
  profileToRegister: RegisterInput;
};


export type MutationSubscribeArgs = {
  subscribee: Scalars['String'];
};


export type MutationUnsubscribeArgs = {
  subscribee: Scalars['String'];
};


export type MutationUpsertVideoArgs = {
  input: VideoInput;
};


export type MutationVideoViewArgs = {
  video_id: Scalars['String'];
};

export enum Privacystatus {
  Private = 'private',
  Public = 'public'
}

export type Profile = {
  __typename?: 'Profile';
  displayname?: Maybe<Scalars['String']>;
  isChannel?: Maybe<Scalars['Boolean']>;
  subscribers?: Maybe<Scalars['Int']>;
  userIsSubscribedTo?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCommentResponses: Array<Maybe<Comment>>;
  getMentions: Array<Maybe<Comment>>;
  getVideoComments: Array<Maybe<Comment>>;
  getVideoLikeStatus?: Maybe<Like_Dislike>;
  profile?: Maybe<Profile>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type QueryGetCommentResponsesArgs = {
  comment_id: Scalars['String'];
};


export type QueryGetVideoCommentsArgs = {
  video_id: Scalars['String'];
};


export type QueryGetVideoLikeStatusArgs = {
  id: Scalars['ID'];
};


export type QueryProfileArgs = {
  username: Scalars['String'];
};


export type QueryProfilesArgs = {
  amount: Scalars['Int'];
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};


export type QueryVideosArgs = {
  amount?: InputMaybe<Scalars['Int']>;
};

export type Statistic = {
  __typename?: 'Statistic';
  comments: Scalars['Int'];
  dislikes: Scalars['Int'];
  favorites?: Maybe<Scalars['Int']>;
  likes: Scalars['Int'];
  views: Scalars['Int'];
};

export type Status = {
  __typename?: 'Status';
  privacystatus: Privacystatus;
  uploadstatus: Uploadstatus;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  url: Scalars['String'];
};

export enum Uploadstatus {
  Complete = 'complete',
  Error = 'error',
  Processing = 'processing'
}

export type Video = {
  __typename?: 'Video';
  categoryid: Scalars['String'];
  contentinformation?: Maybe<ContentInformation>;
  duration: Scalars['Int'];
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
  profile_id: Scalars['ID'];
  statistic?: Maybe<Statistic>;
  status?: Maybe<Status>;
  thumbnail?: Maybe<Thumbnail>;
  url: Scalars['String'];
};

export type VideoInput = {
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterInput = {
  displayname: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};

export type GetVideoCommentsQueryVariables = Exact<{
  video_id: Scalars['String'];
}>;


export type GetVideoCommentsQuery = { __typename?: 'Query', getVideoComments: Array<{ __typename?: 'Comment', id: string, parent_id?: string | null, body: string, status?: Like_Dislike | null, Profile?: { __typename?: 'Profile', username: string, displayname?: string | null } | null } | null> };

export type VideoLikeStatusQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideoLikeStatusQuery = { __typename?: 'Query', getVideoLikeStatus?: Like_Dislike | null };

export type LikeVideoMutationVariables = Exact<{
  video_id: Scalars['String'];
}>;


export type LikeVideoMutation = { __typename?: 'Mutation', likeVideo: boolean };

export type DislikeVideoMutationVariables = Exact<{
  video_id: Scalars['String'];
}>;


export type DislikeVideoMutation = { __typename?: 'Mutation', dislikeVideo: boolean };

export type SubscribeMutationVariables = Exact<{
  subscribee: Scalars['String'];
}>;


export type SubscribeMutation = { __typename?: 'Mutation', subscribe: boolean };

export type UnsubscribeMutationVariables = Exact<{
  subscribee: Scalars['String'];
}>;


export type UnsubscribeMutation = { __typename?: 'Mutation', unsubscribe: boolean };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Profile', username: string, displayname?: string | null, subscribers?: number | null, isChannel?: boolean | null } | null };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  displayname: Scalars['String'];
  password: Scalars['String'];
  password2: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'Profile', username: string, displayname?: string | null, subscribers?: number | null, isChannel?: boolean | null } | null };

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { __typename?: 'Query', videos?: Array<{ __typename?: 'Video', id: string, url: string, contentinformation?: { __typename?: 'ContentInformation', title: string } | null, thumbnail?: { __typename?: 'Thumbnail', url: string } | null, statistic?: { __typename?: 'Statistic', views: number } | null, profile?: { __typename?: 'Profile', username: string } | null } | null> | null };

export type ProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', username: string, displayname?: string | null, subscribers?: number | null, userIsSubscribedTo?: boolean | null } | null };

export type VideoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideoQuery = { __typename?: 'Query', video?: { __typename?: 'Video', id: string, url: string, contentinformation?: { __typename?: 'ContentInformation', title: string, description: string, published: string } | null, thumbnail?: { __typename?: 'Thumbnail', url: string } | null, statistic?: { __typename?: 'Statistic', likes: number, dislikes: number, views: number, comments: number } | null, profile?: { __typename?: 'Profile', username: string, userIsSubscribedTo?: boolean | null } | null } | null };


export const GetVideoCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVideoComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"video_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getVideoComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"video_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"video_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parent_id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}}]}}]}}]}}]} as unknown as DocumentNode<GetVideoCommentsQuery, GetVideoCommentsQueryVariables>;
export const VideoLikeStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VideoLikeStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getVideoLikeStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<VideoLikeStatusQuery, VideoLikeStatusQueryVariables>;
export const LikeVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"video_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"video_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"video_id"}}}]}]}}]} as unknown as DocumentNode<LikeVideoMutation, LikeVideoMutationVariables>;
export const DislikeVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DislikeVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"video_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dislikeVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"video_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"video_id"}}}]}]}}]} as unknown as DocumentNode<DislikeVideoMutation, DislikeVideoMutationVariables>;
export const SubscribeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"subscribe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscribee"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscribee"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscribee"}}}]}]}}]} as unknown as DocumentNode<SubscribeMutation, SubscribeMutationVariables>;
export const UnsubscribeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unsubscribe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscribee"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsubscribe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscribee"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscribee"}}}]}]}}]} as unknown as DocumentNode<UnsubscribeMutation, UnsubscribeMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"subscribers"}},{"kind":"Field","name":{"kind":"Name","value":"isChannel"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileToRegister"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"displayname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password2"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"subscribers"}},{"kind":"Field","name":{"kind":"Name","value":"isChannel"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const VideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"contentinformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<VideosQuery, VideosQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"subscribers"}},{"kind":"Field","name":{"kind":"Name","value":"userIsSubscribedTo"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const VideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Video"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"contentinformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userIsSubscribedTo"}}]}}]}}]}}]} as unknown as DocumentNode<VideoQuery, VideoQueryVariables>;