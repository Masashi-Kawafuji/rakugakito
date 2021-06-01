import { FC } from 'react';

const Container: FC = ({ children }) => {
  return (
    <div className="container mx-auto px-5 max-w-screen-lg">{children}</div>
  );
};

export default Container;
