import { FC } from 'react';
import { gql } from '@apollo/client';
import {
  ArticleNodeFragment,
  useGetArticleListQuery,
} from 'types/generated/graphql';
import PageContainer from 'components/PageContainer';
import Heading from 'components/Heading';
import ArticleList, { ARTICLE_NODES } from 'components/ArticleList';

const GET_ARTICLE_LIST = gql`
  ${ARTICLE_NODES}
  query GetArticleList($first: Int!) {
    allArticles(sortBy: meta_firstPublicationDate_DESC, first: $first) {
      edges {
        ...ArticleNode
      }
    }
  }
`;

const News: FC = () => {
  const { loading, error, data } = useGetArticleListQuery({
    variables: {
      first: 3,
    },
  });

  return (
    <PageContainer>
      <Heading variant="h1">News</Heading>
      {loading ? (
        'loading...'
      ) : (
        <ArticleList articles={data?.allArticles.edges || []} />
      )}
    </PageContainer>
  );
};

export default News;
