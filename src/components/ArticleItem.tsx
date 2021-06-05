import { FC, HTMLAttributes } from 'react';
import { Article } from 'dummy-data/articles';

type ArticleItemProps = {
  article: Article;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const ArticleItem: FC<ArticleItemProps> = ({
  article: { title, publishedAt, category, body },
  className,
}) => {
  return <div className={className} />;
};

export default ArticleItem;
