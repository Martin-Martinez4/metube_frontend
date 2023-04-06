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
    "\nmutation Login($username: String!, $password: String!){\n  login(login:{username:$username, password: $password}){\n   username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n": types.LoginDocument,
    "\nquery Videos{\n  videos(amount: 4){\n    id\n    url\n    contentinformation{\n      title\n    }\n    thumbnail{\n      url\n    }\n    statistic{\n      views\n    }\n    profile{\n      username\n    }\n  \n  }\n}\n": types.VideosDocument,
    "\nquery Profile($username: String!){\n  profile(username: $username){\n    username\n    displayname\n    subscribers\n  \n  }\n}\n": types.ProfileDocument,
    "\n    query Video($id: ID!){\n      video(id: $id){\n        id\n        url\n        contentinformation{\n          title\n          description\n          published\n        }\n        thumbnail{\n          url\n        }\n        statistic{\n          likes\n          dislikes\n          views\n        }\n        profile{\n          username\n        }\n      \n      }\n    }\n  ": types.VideoDocument,
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
export function gql(source: "\nmutation Login($username: String!, $password: String!){\n  login(login:{username:$username, password: $password}){\n   username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n"): (typeof documents)["\nmutation Login($username: String!, $password: String!){\n  login(login:{username:$username, password: $password}){\n   username\n    displayname\n    subscribers\n    isChannel\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Videos{\n  videos(amount: 4){\n    id\n    url\n    contentinformation{\n      title\n    }\n    thumbnail{\n      url\n    }\n    statistic{\n      views\n    }\n    profile{\n      username\n    }\n  \n  }\n}\n"): (typeof documents)["\nquery Videos{\n  videos(amount: 4){\n    id\n    url\n    contentinformation{\n      title\n    }\n    thumbnail{\n      url\n    }\n    statistic{\n      views\n    }\n    profile{\n      username\n    }\n  \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Profile($username: String!){\n  profile(username: $username){\n    username\n    displayname\n    subscribers\n  \n  }\n}\n"): (typeof documents)["\nquery Profile($username: String!){\n  profile(username: $username){\n    username\n    displayname\n    subscribers\n  \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Video($id: ID!){\n      video(id: $id){\n        id\n        url\n        contentinformation{\n          title\n          description\n          published\n        }\n        thumbnail{\n          url\n        }\n        statistic{\n          likes\n          dislikes\n          views\n        }\n        profile{\n          username\n        }\n      \n      }\n    }\n  "): (typeof documents)["\n    query Video($id: ID!){\n      video(id: $id){\n        id\n        url\n        contentinformation{\n          title\n          description\n          published\n        }\n        thumbnail{\n          url\n        }\n        statistic{\n          likes\n          dislikes\n          views\n        }\n        profile{\n          username\n        }\n      \n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;