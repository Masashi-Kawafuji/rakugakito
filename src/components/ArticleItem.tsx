import { FC } from 'react';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
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

const ArticleItem: FC<ArticleItemProps> = ({
  article: {
    _meta: { id, tags, firstPublicationDate },
    title,
    featured_image,
    excerpt,
  },
}) => {
  return (
    <li className="bg-white rounded-md shadow">
      <Link to={`/news/${id}`}>
        <img
          src={featured_image.url}
          alt={featured_image.alt}
          className="rounded-md"
        />
        <div className="px-4 pt-2 pb-4">
          <p className="text-sm">
            {tags.map((tag) => (
              <span className="text-primary font-medium">{tag}</span>
            ))}
            <span className="text-lighten">
              ・{DateTime.fromISO(firstPublicationDate).toFormat('yyyy-LL-dd')}
            </span>
          </p>
          <dl>
            <dt className="text-xl font-bold">{title}</dt>
            <dd className="text-lighten">{excerpt}</dd>
          </dl>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;
