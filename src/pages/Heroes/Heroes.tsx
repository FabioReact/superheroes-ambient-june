import { getHeroesByLetter } from '@api/heroes';
import HeroCard from '../../components/HeroCard/HeroCard';
import LetterListElement from './LetterListElement';
import { arrayOfLetters } from './utils';
import { Link, LoaderFunctionArgs, useLoaderData, useSearchParams } from 'react-router-dom';
import { Hero } from 'types/hero';

const Heroes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLetter = searchParams.get('startBy') || 'a';
  const heroes = useLoaderData() as Hero[];

  const onSelectLetter = async (letter: string) => {
    setSearchParams({
      startBy: letter,
    });
  };

  return (
    <section>
      <h1 className='text-center'>Heroes</h1>
      <ul className='flex justify-center gap-2 my-4'>
        {arrayOfLetters.map((letter) => (
          <LetterListElement
            key={letter}
            selected={letter === initialLetter}
            onClick={() => onSelectLetter(letter)}>
            {letter}
          </LetterListElement>
        ))}
      </ul>
      <ul className='flex flex-wrap justify-center gap-4'>
        {heroes?.map((hero) => (
          <li key={hero.id}>
            <Link to={`${hero.id}`}>
              <HeroCard hero={hero} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const heroesLoader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('startBy') || 'a';
  return getHeroesByLetter(searchTerm);
};

export default Heroes;
