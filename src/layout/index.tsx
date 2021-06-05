import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import AudioPlayer from './AudioPlayer';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col mb-24 min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default Layout;
