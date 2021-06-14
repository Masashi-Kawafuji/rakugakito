import { gql } from '@apollo/client';

export const GET_ARTICLE_LIST = gql`
  query ($limit: Int!) {
    allArticles(sortBy: meta_firstPublicationDate_DESC, first: $limit) {
      edges {
        node {
          _meta {
            id
            tags
            firstPublicationDate
          }
          title
          featured_image
          excerpt
        }
      }
    }
  }
`;

export const GET_SONGS = gql`
  query ($limit: Int!) {
    allSongs(first: $limit) {
      edges {
        node {
          _meta {
            id
          }
          name
          audio {
            ... on _FileLink {
              url
            }
          }
        }
      }
    }
  }
`;
