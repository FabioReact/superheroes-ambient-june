import HeroCard from '@components/HeroCard/HeroCard';
import { Loader } from '@components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useGetHeroById } from '../../hooks/useGetHeroById';

const HeroById = () => {
  const { id } = useParams();
  const { hero, isLoading, isError, error } = useGetHeroById(id!);

  return (
    <section>
      <h1>Hero Name with id: {id}</h1>
      {isLoading && <Loader />}
      <div className='flex justify-center'>
        {isError && <p className='text-sm text-red-600'>Error: {error}</p>}
        {hero && !isError && <HeroCard hero={hero} />}
      </div>
    </section>
  );
};

export default HeroById;
