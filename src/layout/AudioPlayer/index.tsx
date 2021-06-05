import { FC } from 'react';
import NowPlaying from './components/NowPlaying';
import Controls from './components/Controls';
import Progress from './components/Progress';

const AudioPlayer: FC = () => {
  return (
    <div className="">
      <div className="fixed right-0 left-0 bottom-0 z-30 pt-4 px-5 bg-white border-t border-gray-200">
        <div className="relative">
          <NowPlaying className="absolute top-0 left-0" />
          <Controls />
          <Progress />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
