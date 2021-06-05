import { FC, createElement } from 'react';

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3';
};

type HeadingStyle = Record<'fontSize' | 'marginBottom' | 'fontWeight', string>;

const Heading: FC<HeadingProps> = ({ variant, children }) => {
  let headingStyle: HeadingStyle;

  switch (variant) {
    case 'h1':
      headingStyle = {
        fontSize: 'text-4xl',
        marginBottom: 'mb-6',
        fontWeight: 'font-bold',
      };
      break;
    case 'h2':
      headingStyle = {
        fontSize: 'text-3xl',
        marginBottom: 'mb-4',
        fontWeight: 'font-bold',
      };
      break;
    case 'h3':
      headingStyle = {
        fontSize: 'text-2xl',
        marginBottom: 'mb-n2',
        fontWeight: 'font-bold',
      };
      break;
    default:
      headingStyle = {
        fontSize: '',
        marginBottom: '',
        fontWeight: 'font-bold',
      };
  }

  const className = Object.values(headingStyle).join(' ');

  return createElement(variant, { className }, children);
};

export default Heading;
