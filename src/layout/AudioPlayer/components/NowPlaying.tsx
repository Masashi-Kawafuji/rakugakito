import { FC, HTMLAttributes } from 'react';

type NowPlayingProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const NowPlaying: FC<NowPlayingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <p>ちろりちろりに</p>
    </div>
  );
};

export default NowPlaying;
