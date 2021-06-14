import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLE_LIST } from 'utils/graphql/queries';
import { Query, QueryAllArticlesArgs } from 'types/graphql';
import PageContainer from 'components/PageContainer';
import Heading from 'components/Heading';
import ArticleList from 'components/ArticleList';

const News: FC = () => {
  const { loading, error, data } = useQuery<
    Pick<Query, 'allArticles'>,
    QueryAllArticlesArgs
  >(GET_ARTICLE_LIST, {
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
        <ArticleList
          articles={data?.allArticles.edges.map((edge) => edge.node) || []}
        />
      )}
    </PageContainer>
  );
};

export default News;
