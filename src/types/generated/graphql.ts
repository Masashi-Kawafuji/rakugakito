import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Article = _Document & _Linkable & {
  __typename?: 'Article';
  title: Maybe<Scalars['String']>;
  featured_image: Maybe<Scalars['Json']>;
  excerpt: Maybe<Scalars['String']>;
  body: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ArticleConnectionConnection = {
  __typename?: 'ArticleConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ArticleConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ArticleConnectionEdge = {
  __typename?: 'ArticleConnectionEdge';
  /** The item at the end of the edge. */
  node: Article;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};




export type Meta = {
  __typename?: 'Meta';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The language of the document. */
  lang: Scalars['String'];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate: Maybe<Scalars['DateTime']>;
  /** The last publication date of the document. */
  lastPublicationDate: Maybe<Scalars['DateTime']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allArticles: ArticleConnectionConnection;
  allSongs: SongConnectionConnection;
};


export type Query_AllDocumentsArgs = {
  sortBy?: Maybe<SortDocumentsBy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllArticlesArgs = {
  sortBy?: Maybe<SortArticley>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereArticle>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllSongsArgs = {
  sortBy?: Maybe<SortSongy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereSong>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
};

export type Song = _Document & _Linkable & {
  __typename?: 'Song';
  name: Maybe<Scalars['String']>;
  audio: Maybe<_Linkable>;
  _meta: Meta;
  _linkType: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type SongConnectionConnection = {
  __typename?: 'SongConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Maybe<Array<Maybe<SongConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type SongConnectionEdge = {
  __typename?: 'SongConnectionEdge';
  /** The item at the end of the edge. */
  node: Song;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum SortArticley {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortSongy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type WhereArticle = {
  title?: Maybe<Scalars['String']>;
  title_fulltext?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  excerpt_fulltext?: Maybe<Scalars['String']>;
  /** body */
  body_fulltext?: Maybe<Scalars['String']>;
};

export type WhereSong = {
  name?: Maybe<Scalars['String']>;
  name_fulltext?: Maybe<Scalars['String']>;
  /** audio */
  audio?: Maybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  url: Scalars['String'];
  target: Maybe<Scalars['String']>;
  _linkType: Maybe<Scalars['String']>;
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType: Maybe<Scalars['String']>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType: Maybe<Scalars['String']>;
};

/** A prismic link */
export type _Linkable = {
  _linkType: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};

export type ArticleFieldsFragment = (
  { __typename?: 'Article' }
  & Pick<Article, 'title' | 'featured_image' | 'excerpt'>
  & { _meta: (
    { __typename?: 'Meta' }
    & Pick<Meta, 'id' | 'tags' | 'firstPublicationDate'>
  ) }
);

export type ArticleNodeFragment = (
  { __typename?: 'ArticleConnectionEdge' }
  & { node: (
    { __typename?: 'Article' }
    & ArticleFieldsFragment
  ) }
);

export type SongFieldsFragment = (
  { __typename?: 'Song' }
  & Pick<Song, 'name'>
  & { audio: Maybe<{ __typename?: 'Article' } | { __typename?: 'Song' } | { __typename?: '_ExternalLink' } | (
    { __typename?: '_FileLink' }
    & Pick<_FileLink, 'url'>
  ) | { __typename?: '_ImageLink' }> }
);

export type SongNodeFragment = (
  { __typename?: 'SongConnectionEdge' }
  & { node: (
    { __typename?: 'Song' }
    & { _meta: (
      { __typename?: 'Meta' }
      & Pick<Meta, 'id'>
    ) }
    & SongFieldsFragment
  ) }
);

export type GetArticleListQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetArticleListQuery = (
  { __typename?: 'Query' }
  & { allArticles: (
    { __typename?: 'ArticleConnectionConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'ArticleConnectionEdge' }
      & ArticleNodeFragment
    )>>> }
  ) }
);

export type GetSongsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetSongsQuery = (
  { __typename?: 'Query' }
  & { allSongs: (
    { __typename?: 'SongConnectionConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'SongConnectionEdge' }
      & SongNodeFragment
    )>>> }
  ) }
);

export const ArticleFieldsFragmentDoc = gql`
    fragment ArticleFields on Article {
  _meta {
    id
    tags
    firstPublicationDate
  }
  title
  featured_image
  excerpt
}
    `;
export const ArticleNodeFragmentDoc = gql`
    fragment ArticleNode on ArticleConnectionEdge {
  node {
    ...ArticleFields
  }
}
    ${ArticleFieldsFragmentDoc}`;
export const SongFieldsFragmentDoc = gql`
    fragment SongFields on Song {
  name
  audio {
    ... on _FileLink {
      url
    }
  }
}
    `;
export const SongNodeFragmentDoc = gql`
    fragment SongNode on SongConnectionEdge {
  node {
    _meta {
      id
    }
    ...SongFields
  }
}
    ${SongFieldsFragmentDoc}`;
export const GetArticleListDocument = gql`
    query GetArticleList($first: Int) {
  allArticles(sortBy: meta_firstPublicationDate_DESC, first: $first) {
    edges {
      ...ArticleNode
    }
  }
}
    ${ArticleNodeFragmentDoc}`;

/**
 * __useGetArticleListQuery__
 *
 * To run a query within a React component, call `useGetArticleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleListQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetArticleListQuery(baseOptions?: Apollo.QueryHookOptions<GetArticleListQuery, GetArticleListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleListQuery, GetArticleListQueryVariables>(GetArticleListDocument, options);
      }
export function useGetArticleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleListQuery, GetArticleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleListQuery, GetArticleListQueryVariables>(GetArticleListDocument, options);
        }
export type GetArticleListQueryHookResult = ReturnType<typeof useGetArticleListQuery>;
export type GetArticleListLazyQueryHookResult = ReturnType<typeof useGetArticleListLazyQuery>;
export type GetArticleListQueryResult = Apollo.QueryResult<GetArticleListQuery, GetArticleListQueryVariables>;
export const GetSongsDocument = gql`
    query GetSongs($first: Int) {
  allSongs(first: $first) {
    edges {
      ...SongNode
    }
  }
}
    ${SongNodeFragmentDoc}`;

/**
 * __useGetSongsQuery__
 *
 * To run a query within a React component, call `useGetSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetSongsQuery(baseOptions?: Apollo.QueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
      }
export function useGetSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
        }
export type GetSongsQueryHookResult = ReturnType<typeof useGetSongsQuery>;
export type GetSongsLazyQueryHookResult = ReturnType<typeof useGetSongsLazyQuery>;
export type GetSongsQueryResult = Apollo.QueryResult<GetSongsQuery, GetSongsQueryVariables>;