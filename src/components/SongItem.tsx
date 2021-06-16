import { FC } from 'react';
import { gql } from '@apollo/client';

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

const SongItem: FC = () => {
  return <div />;
};

export default SongItem;
