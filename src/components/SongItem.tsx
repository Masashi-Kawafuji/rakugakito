import { FC } from 'react';
import { gql } from '@apollo/client';
import { SongFieldsFragment } from 'types/generated/graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export const SONG_FIELDS = gql`
  fragment SongFields on Song {
    name
    audio {
      ... on _FileLink {
        url
      }
    }
  }
`;

type SongItemProps = { song: SongFieldsFragment };

const SongItem: FC<SongItemProps> = ({ song: { name, audio } }) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="relative" style={{ paddingBottom: '100%' }}>
        <p className="absolute top-1/3 text-lg font-medium">{name}</p>
        <button
          type="button"
          className="absolute bottom-0 right-0 text-primary"
        >
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="text-4xl sm:text-5xl"
          />
        </button>
      </div>
    </div>
  );
};

export default SongItem;
