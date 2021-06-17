import { FC } from 'react';
import { gql } from '@apollo/client';
import { useGetArticleListQuery } from 'types/generated/graphql';
import PageContainer from 'components/PageContainer';
import Heading from 'components/Heading';
import FallbackContent from 'components/FallbackContent';
import ArticleList, { ARTICLE_NODE } from 'components/ArticleList';

const GET_ARTICLE_LIST = gql`
  ${ARTICLE_NODE}
  query GetArticleList($first: Int) {
    allArticles(sortBy: meta_firstPublicationDate_DESC, first: $first) {
      edges {
        ...ArticleNode
      }
    }
  }
`;

const News: FC = () => {
  const { loading, error, data } = useGetArticleListQuery();

  return (
    <PageContainer>
      <Heading variant="h1">News</Heading>
      <FallbackContent loading={loading} error={error}>
        {data && <ArticleList articles={data.allArticles.edges} />}
      </FallbackContent>
    </PageContainer>
  );
};

export default News;
