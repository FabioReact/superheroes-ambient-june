import HeroCard from '@components/HeroCard/HeroCard';
import { Loader } from '@components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHeroById } from '@api/heroes';

const HeroById = () => {
  const { id } = useParams();
  const {
    data: hero,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['getHeroById', id],
    queryFn: () => getHeroById(id!),
  });

  return (
    <section>
      <h1>Hero Name with id: {id}</h1>
      {isLoading && <Loader />}
      <div className='flex justify-center'>
        {isError && <p className='text-sm text-red-600'>Error: {error.message}</p>}
        {hero && !isError && <HeroCard hero={hero} />}
      </div>
    </section>
  );
};

export default HeroById;
