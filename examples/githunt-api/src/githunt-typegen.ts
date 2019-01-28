/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 *
 * For better typings, you should provide configuration for how to lookup
 * the types. See the documentation for "typegenAutoConfig"
 */
import { GraphQLResolveInfo } from "graphql";

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

interface NexusGenEnums {
  FeedType: "HOT" | "NEW" | "TOP";
  VoteType: "CANCEL" | "DOWN" | "UP";
  CacheControlScope: "PRIVATE" | "PUBLIC";
}

export interface NexusGenRootTypes {
  Comment: {
    // root types
    content: string; // String!
    id: number; // Int!
    postedBy?: NexusGenRootTypes["User"] | null; // User
    repoName: string; // String!
  };
  Entry: {
    // root types
    commentCount: number; // Int!
    comments: NexusGenRootTypes["Comment"][]; // [Comment!]!
    createdAt: number; // Float!
    id: number; // Int!
    postedBy?: NexusGenRootTypes["User"] | null; // User
    repository: NexusGenRootTypes["Repository"]; // Repository!
    score: number; // Int!
    vote: NexusGenRootTypes["Vote"]; // Vote!
  };
  Mutation: {
    // root types
    submitComment: NexusGenRootTypes["Comment"]; // Comment!
    submitRepository: NexusGenRootTypes["Entry"]; // Entry!
    vote: NexusGenRootTypes["Entry"]; // Entry!
  };
  Query: {
    // root types
    currentUser: NexusGenRootTypes["User"]; // User!
    entry?: NexusGenRootTypes["Entry"] | null; // Entry
  };
  Repository: {
    // root types
    description?: string | null; // String
    full_name: string; // String!
    html_url: string; // String!
    name: string; // String!
    open_issues_count?: number | null; // Int
    owner?: NexusGenRootTypes["User"] | null; // User
    stargazers_count: number; // Int!
  };
  User: {
    // root types
    avatar_url: string; // String!
    html_url: string; // String!
    login: string; // String!
  };
  Vote: {
    // root types
    vote_value: number; // Int!
  };
}

export interface NexusGenReturnTypes {
  Comment: {
    // return type
    content: string; // String!
    createdAt: number; // Float!
    id: number; // Int!
    postedBy: NexusGenRootTypes["User"] | null; // User
    repoName: string; // String!
  };
  Entry: {
    // return type
    commentCount: number; // Int!
    comments: NexusGenRootTypes["Comment"][]; // [Comment!]!
    createdAt: number; // Float!
    hotScore: number; // Float!
    id: number; // Int!
    postedBy: NexusGenRootTypes["User"] | null; // User
    repository: NexusGenRootTypes["Repository"]; // Repository!
    score: number; // Int!
    vote: NexusGenRootTypes["Vote"]; // Vote!
  };
  Mutation: {
    // return type
    submitComment: NexusGenRootTypes["Comment"]; // Comment!
    submitRepository: NexusGenRootTypes["Entry"]; // Entry!
    vote: NexusGenRootTypes["Entry"]; // Entry!
  };
  Query: {
    // return type
    currentUser: NexusGenRootTypes["User"]; // User!
    entry: NexusGenRootTypes["Entry"] | null; // Entry
    feed: NexusGenRootTypes["Entry"][]; // [Entry!]!
  };
  Repository: {
    // return type
    description: string | null; // String
    full_name: string; // String!
    html_url: string; // String!
    name: string; // String!
    open_issues_count: number | null; // Int
    owner: NexusGenRootTypes["User"] | null; // User
    stargazers_count: number; // Int!
  };
  User: {
    // return type
    avatar_url: string; // String!
    html_url: string; // String!
    login: string; // String!
  };
  Vote: {
    // return type
    vote_value: number; // Int!
  };
}

export interface NexusGenArgTypes {
  Entry: {
    comments: {
      // args
      limit?: number | null; // Int
      offset?: number | null; // Int
    };
  };
  Mutation: {
    submitComment: {
      // args
      commentContent: string; // String!
      repoFullName: string; // String!
    };
    submitRepository: {
      // args
      repoFullName: string; // String!
    };
    vote: {
      // args
      repoFullName: string; // String!
      type: NexusGenEnums["VoteType"]; // VoteType!
    };
  };
  Query: {
    entry: {
      // args
      repoFullName: string; // String!
    };
    feed: {
      // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      type: NexusGenEnums["FeedType"]; // FeedType!
    };
  };
}

interface NexusGenAbstractResolveSourceTypes {}

interface NexusGenAbstractResolveReturnTypes {}

export type NexusGenObjectNames =
  | "Comment"
  | "Entry"
  | "Mutation"
  | "Query"
  | "Repository"
  | "User"
  | "Vote";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "CacheControlScope" | "FeedType" | "VoteType";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: unknown;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  returnTypes: NexusGenReturnTypes;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["enumNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveRoot: NexusGenAbstractResolveSourceTypes;
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

export type Gen = NexusGenTypes;

type MaybePromise<T> = PromiseLike<T> | T;
type SourceType<
  TypeName
> = TypeName extends keyof NexusGenAbstractResolveSourceTypes
  ? NexusGenAbstractResolveSourceTypes[TypeName]
  : never;
type RootType<TypeName> = TypeName extends keyof NexusGenRootTypes
  ? NexusGenRootTypes[TypeName]
  : never;
type ArgType<TypeName, FieldName> = TypeName extends keyof NexusGenArgTypes
  ? FieldName extends keyof NexusGenArgTypes[TypeName]
    ? NexusGenArgTypes[TypeName][FieldName]
    : {}
  : {};

export type NexusResolver<
  TypeName extends keyof NexusGenReturnTypes,
  FieldName extends keyof NexusGenReturnTypes[TypeName]
> = (
  root: RootType<TypeName>,
  args: ArgType<TypeName, FieldName>,
  context: NexusGenTypes["context"],
  info: GraphQLResolveInfo
) => MaybePromise<NexusGenReturnTypes[TypeName][FieldName]>;

export type NexusAbstractTypeResolver<
  TypeName extends keyof NexusGenAbstractResolveReturnTypes
> = (
  root: SourceType<TypeName>,
  context: NexusGenTypes["context"],
  info: GraphQLResolveInfo
) => MaybePromise<NexusGenAbstractResolveReturnTypes[TypeName]>;
