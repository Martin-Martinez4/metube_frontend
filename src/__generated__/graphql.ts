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

export type ContentInformation = {
  __typename?: 'ContentInformation';
  channelid: Scalars['String'];
  description: Scalars['String'];
  published: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  upsertVideo: Video;
};


export type MutationUpsertVideoArgs = {
  input: VideoInput;
};

export enum Privacystatus {
  Private = 'private',
  Public = 'public'
}

export type Profile = {
  __typename?: 'Profile';
  displayname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isChannel?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
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

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = { __typename?: 'Query', videos?: Array<{ __typename?: 'Video', id: string, url: string, contentinformation?: { __typename?: 'ContentInformation', title: string } | null, thumbnail?: { __typename?: 'Thumbnail', url: string } | null, statistic?: { __typename?: 'Statistic', views: number } | null, profile?: { __typename?: 'Profile', id: string, username: string } | null } | null> | null };

export type VideoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideoQuery = { __typename?: 'Query', video?: { __typename?: 'Video', id: string, url: string, contentinformation?: { __typename?: 'ContentInformation', title: string, description: string, published: string } | null, thumbnail?: { __typename?: 'Thumbnail', url: string } | null, statistic?: { __typename?: 'Statistic', likes: number, dislikes: number, views: number } | null, profile?: { __typename?: 'Profile', id: string, username: string } | null } | null };


export const VideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"contentinformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<VideosQuery, VideosQueryVariables>;
export const VideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Video"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"contentinformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<VideoQuery, VideoQueryVariables>;