import { Loader } from '@components/Loader/Loader';

type WaitingProps = {
  loading: boolean;
};

const Waiting = ({ loading }: WaitingProps) => {
  // const [loading, setLoading] = useState(false);
  // si le state est faux, le loader ne s'affiche pas
  // si vrai j'affiche
  if (loading) {
    return <Loader />;
  }
  return <div>True</div>;
};

export default Waiting;
