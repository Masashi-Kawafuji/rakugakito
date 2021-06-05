import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPauseCircle,
  faBackward,
  faForward,
} from '@fortawesome/free-solid-svg-icons';

const Controls: FC = () => {
  return (
    <div className="flex justify-evenly mx-auto w-40">
      <button type="button">
        <FontAwesomeIcon className="block text-xl" icon={faBackward} />
      </button>
      <button type="button">
        <FontAwesomeIcon className="block text-4xl" icon={faPauseCircle} />
      </button>
      <button type="button">
        <FontAwesomeIcon className="block text-xl" icon={faForward} />
      </button>
    </div>
  );
};

export default Controls;
