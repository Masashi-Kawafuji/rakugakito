import { FC, HTMLAttributes } from 'react';

type ContainerProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`container mx-auto px-5 max-w-screen-lg ${className}`}>
      {children}
    </div>
  );
};

export default Container;
