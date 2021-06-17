import { FC } from 'react';
import { gql } from '@apollo/client';
import { SongNodeFragment } from 'types/generated/graphql';
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

type SongListProps = {
  songs: SongNodeFragment[];
};

const SongList: FC<SongListProps> = ({ songs }) => {
  return (
    <ul className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-6">
      {songs.map(({ node }) => (
        <li key={node._meta.id}>
          <SongItem song={node} />
        </li>
      ))}
    </ul>
  );
};

export default SongList;
