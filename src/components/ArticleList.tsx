import { FC } from 'react';
import { gql } from '@apollo/client';
import { ArticleNodeFragment } from 'types/generated/graphql';
import ArticleItem, { ARTICLE_FIELDS } from './ArticleItem';

export const ARTICLE_NODE = gql`
  ${ARTICLE_FIELDS}
  fragment ArticleNode on ArticleConnectionEdge {
    node {
      ...ArticleFields
    }
  }
`;

type ArticleListProps = {
  articles: ArticleNodeFragment[];
};

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <ul className="grid grid-cols-3 gap-6">
      {articles.map(({ node }) => (
        <ArticleItem key={node._meta.id} article={node} />
      ))}
    </ul>
  );
};

export default ArticleList;
