import { FC } from 'react';
import { gql } from '@apollo/client';
import SongItem, { SONG_FIELDS } from './SongItem';

export const SONG_NODE = gql`
  ${SONG_FIELDS}
  fragment SongNode on SongConnectionEdge {
    node {
      _meta {
        id
      }
      ...SongFields
    }
  }
`;

const SongList: FC = () => {
  return <div />;
};

export default SongList;
