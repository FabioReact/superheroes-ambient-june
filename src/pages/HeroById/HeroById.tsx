import HeroCard from '@components/HeroCard/HeroCard';
import { Loader } from '@components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHeroById } from '@api/heroes';
import { useGetHeroByIdQuery } from '../../redux/services/heroesApi';

const HeroById = () => {
  const { id } = useParams();
  // const {
  //   data: hero,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ['getHeroById', id],
  //   queryFn: () => getHeroById(id!),
  // });
  const { data: hero, isLoading, isError } = useGetHeroByIdQuery(+(id || 0));

  return (
    <section>
      <h1>Hero Name with id: {id}</h1>
      {isLoading && <Loader />}
      <div className='flex justify-center'>
        {isError && <p className='text-sm text-red-600'>Error: {/*error*/}</p>}
        {hero && !isError && <HeroCard hero={hero} />}
      </div>
    </section>
  );
};

export default HeroById;
