import { FC } from 'react';
import { gql } from '@apollo/client';
import PageContainer from 'components/PageContainer';
import Heading from 'components/Heading';
import SongList, { SONG_NODE } from 'components/SongList';

const GET_SONGS = gql`
  ${SONG_NODE}
  query GetSongs($first: Int!) {
    allSongs {
      edges {
        ...SongNode
      }
    }
  }
`;

const Songs: FC = () => {
  return (
    <PageContainer>
      <Heading variant="h1">Songs</Heading>
    </PageContainer>
  );
};

export default Songs;
