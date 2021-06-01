import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from 'components/Container';
import Menu from './components/Menu';

const Header: FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="p-3 text-center border-b border-gray-200">
        <Link to="/">落餓鬼党</Link>
        <ul className="flex float-right">
          <li className="mr-8">
            <FontAwesomeIcon className="text-lighten" icon={faTwitter} />
          </li>
          <li className="mr-8">
            <FontAwesomeIcon className="text-lighten" icon={faEnvelope} />
          </li>
        </ul>
      </div>
      <Container>
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
