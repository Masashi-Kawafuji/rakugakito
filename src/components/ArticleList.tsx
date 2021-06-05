import { FC } from 'react';
import { Article } from 'dummy-data/articles';
import ArticleItem from './ArticleItem';

type ArticleListProps = {
  articles: Article[];
};

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
