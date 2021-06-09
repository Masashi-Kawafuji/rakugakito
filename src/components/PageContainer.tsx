import { FC } from 'react';
import Container from './Container';

const PageContainer: FC = ({ children }) => (
  <Container className="mt-10">{children}</Container>
);

export default PageContainer;
