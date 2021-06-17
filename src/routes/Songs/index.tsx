import { FC } from 'react';
import { gql } from '@apollo/client';
import { useGetSongsQuery } from 'types/generated/graphql';
import PageContainer from 'components/PageContainer';
import Heading from 'components/Heading';
import FallbackContent from 'components/FallbackContent';
import SongList, { SONG_NODE } from 'components/SongList';

const GET_SONGS = gql`
  ${SONG_NODE}
  query GetSongs($first: Int) {
    allSongs(first: $first) {
      edges {
        ...SongNode
      }
    }
  }
`;

const Songs: FC = () => {
  const { loading, error, data } = useGetSongsQuery();

  return (
    <PageContainer>
      <Heading variant="h1">Songs</Heading>
      <FallbackContent loading={loading} error={error}>
        {data && <SongList songs={data.allSongs.edges} />}
      </FallbackContent>
    </PageContainer>
  );
};

export default Songs;
