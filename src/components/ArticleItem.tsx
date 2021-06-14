import { FC } from 'react';
import { Article } from 'types/graphql';

type ArticleItemProps = { article: Article };

const ArticleItem: FC<ArticleItemProps> = ({
  article: {
    _meta: { tags, firstPublicationDate },
    title,
    featured_image,
    excerpt,
  },
}) => {
  return (
    <div>
      <ul>
        <li>{tags}</li>
        <li>{firstPublicationDate}</li>
        <li>{title}</li>
        <li>{featured_image.url}</li>
        <li>{excerpt}</li>
      </ul>
    </div>
  );
};

export default ArticleItem;
