import { FC } from 'react';
import { Article } from 'types/graphql';
import ArticleItem from './ArticleItem';

type ArticleListProps = { articles: Article[] };

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <ul>
      {articles?.map((article) => (
        <ArticleItem key={article._meta.id} article={article} />
      ))}
    </ul>
  );
};

export default ArticleList;
