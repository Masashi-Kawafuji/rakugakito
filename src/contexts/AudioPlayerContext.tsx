import { FC, createContext, useState, Dispatch, SetStateAction } from 'react';
import { SongFieldsFragment } from 'types/generated/graphql';

type AudioPlayerContextValue = {
  audio: HTMLAudioElement;
  currentSong: SongFieldsFragment | undefined;
  setCurrentSong: Dispatch<SetStateAction<SongFieldsFragment | undefined>>;
};

const initialValue: AudioPlayerContextValue = {
  audio: new Audio(),
  currentSong: undefined,
  setCurrentSong: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

const AudioPlayerContext = createContext<AudioPlayerContextValue>(initialValue);

export const AudioPlayerProvider: FC = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<SongFieldsFragment>();

  return (
    <AudioPlayerContext.Provider
      value={{
        audio: new Audio(currentSong?.audio.url),
        currentSong,
        setCurrentSong,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerContext;
