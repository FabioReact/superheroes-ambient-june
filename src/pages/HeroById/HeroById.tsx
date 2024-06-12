import { getHeroById } from '@api/heroes';
import HeroCard from '@components/HeroCard/HeroCard';
import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { Hero } from 'types/hero';

const HeroById = () => {
  const { id } = useParams();
  const hero = useLoaderData() as Hero;

  return (
    <section>
      <h1>Hero Name with id: {id}</h1>
      <div className='flex justify-center'>
        <HeroCard hero={hero} />
      </div>
    </section>
  );
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  return getHeroById(id!);
};

export default HeroById;
