import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from 'components/Container';
import Menu from './components/Menu';

const Header: FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="px-5 lg:px-12 py-3 text-center border-b border-gray-200">
        <div className="relative">
          <Link to="/">落餓鬼党</Link>
          <div className="hidden sm:block absolute top-0 right-0">
            <ul className="flex">
              <li className="ml-8">
                <FontAwesomeIcon className="text-lighten" icon={faTwitter} />
              </li>
              <li className="ml-8">
                <FontAwesomeIcon className="text-lighten" icon={faYoutube} />
              </li>
              <li className="ml-8">
                <FontAwesomeIcon className="text-lighten" icon={faEnvelope} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Container>
        <div className="hidden sm:block">
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
