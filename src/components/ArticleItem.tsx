import { FC } from 'react';
import { gql } from '@apollo/client';
import { DateTime } from 'luxon';
import { ArticleFieldsFragment } from 'types/generated/graphql';

export const ARTICLE_FIELDS = gql`
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

type ArticleItemProps = {
  article: ArticleFieldsFragment;
};
// type ArticleItemProps = { article: Article };

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
        <li>{DateTime.fromISO(firstPublicationDate).toFormat('yyyy.MM.dd')}</li>
        <li>{title}</li>
        <li>{featured_image.url}</li>
        <li>{excerpt}</li>
      </ul>
    </div>
  );
};

export default ArticleItem;
