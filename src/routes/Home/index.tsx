import { FC } from 'react';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Divider from 'components/Divider';
import ArticleList from 'components/ArticleList';
import hero from 'assets/images/hero.png';

const Home: FC = () => {
  return (
    <>
      <section>
        <div
          className="flex flex-col relative h-80 sm:h-96 lg:h-screen justify-center px-5 box-border  bg-cover bg-center bg-no-repeat text-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="z-10 absolute top-0 right-0 left-0 bottom-0 bg-gray-900 bg-opacity-10" />
          <h1 className="z-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
            Welcome to 落餓鬼党 Official Web Site!
          </h1>
        </div>
      </section>
      <Container>
        <section className="mt-6">
          <Heading variant="h2">News</Heading>
        </section>
        <Divider />
        <section>
          <Heading variant="h2">Songs</Heading>
        </section>
      </Container>
    </>
  );
};

export default Home;
