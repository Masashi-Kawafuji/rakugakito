import { FC } from 'react';

type FallbackContentProps = {
  loading: boolean;
  error: Error | undefined;
};

const FallbackContent: FC<FallbackContentProps> = ({
  loading,
  error,
  children,
}) => {
  if (loading) return <p>loading...</p>;
  if (error) return <p>The error occured.</p>;
  return <>{children}</>;
};

export default FallbackContent;
