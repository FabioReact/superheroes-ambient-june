import { Loader } from '@components/Loader/Loader';

type WaitingProps = {
  loading: boolean;
  children: React.ReactNode;
};

const Waiting = ({ loading, children }: WaitingProps) => {
  if (loading) {
    return <Loader />;
  }
  return children;
};

export default Waiting;
