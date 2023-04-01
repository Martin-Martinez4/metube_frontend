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
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCommentResponses: Array<Maybe<Comment>>;
  getMentions: Array<Maybe<Comment>>;
  getVideoComments: Array<Maybe<Comment>>;
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

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { __typename?: 'Query', videos?: Array<{ __typename?: 'Video', id: string, url: string, contentinformation?: { __typename?: 'ContentInformation', title: string } | null, thumbnail?: { __typename?: 'Thumbnail', url: string } | null, statistic?: { __typename?: 'Statistic', views: number } | null, profile?: { __typename?: 'Profile', username: string } | null } | null> | null };

export type ProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', username: string, displayname?: string | null, subscribers?: number | null } | null };

export type VideoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideoQuery = { __typename?: 'Query', video?: { __typename?: 'Video', id: string, url: string, contentinformation?: { __typename?: 'ContentInformation', title: string, description: string, published: string } | null, thumbnail?: { __typename?: 'Thumbnail', url: string } | null, statistic?: { __typename?: 'Statistic', likes: number, dislikes: number, views: number } | null, profile?: { __typename?: 'Profile', username: string } | null } | null };


export const VideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"contentinformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<VideosQuery, VideosQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayname"}},{"kind":"Field","name":{"kind":"Name","value":"subscribers"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const VideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Video"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"contentinformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<VideoQuery, VideoQueryVariables>;