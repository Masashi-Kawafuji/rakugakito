import { FC } from 'react';
import Container from 'components/Container';
import hero from 'assets/images/hero.png';

const Home: FC = () => {
  return (
    <>
      <Container>
        <div className="pt-6 h-64 sm:h-72 md:h-80 lg:h-96">
          <div
            className="flex flex-col justify-center px-5 box-border bg-cover bg-center bg-no-repeat h-full text-center rounded"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              Welcome to 落餓鬼党 Official Web Site!
            </h1>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
