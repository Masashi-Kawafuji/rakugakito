import { FC, createElement } from 'react';

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3';
};

type HeadingStyle = Record<'fontSize' | 'marginBottom' | 'fontWeight', string>;

function getHeadingStyle(variant: HeadingProps['variant']): HeadingStyle {
  switch (variant) {
    case 'h1':
      return {
        fontSize: 'text-4xl',
        marginBottom: 'mb-6',
        fontWeight: 'font-bold',
      };
    case 'h2':
      return {
        fontSize: 'text-3xl',
        marginBottom: 'mb-4',
        fontWeight: 'font-bold',
      };
    case 'h3':
      return {
        fontSize: 'text-2xl',
        marginBottom: 'mb-n2',
        fontWeight: 'font-bold',
      };
    default:
      return {
        fontSize: '',
        marginBottom: '',
        fontWeight: 'font-bold',
      };
  }
}

const Heading: FC<HeadingProps> = ({ variant, children }) => {
  const className = Object.values(getHeadingStyle(variant)).join(' ');

  return createElement(variant, { className }, children);
};

export default Heading;
