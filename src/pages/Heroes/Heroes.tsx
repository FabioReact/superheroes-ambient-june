import { useState } from 'react';
import { getHeroesByLetter } from '@api/heroes';
import { Loader } from '../../components/Loader/Loader';
import HeroCard from '../../components/HeroCard/HeroCard';
import LetterListElement from './LetterListElement';
import { arrayOfLetters } from './utils';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('a');
  const {
    data: heroes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['getHeroesByLetter', selectedLetter],
    queryFn: () => getHeroesByLetter(selectedLetter),
  });

  const onSelectLetter = async (letter: string) => {
    setSelectedLetter(letter);
    refetch();
  };

  return (
    <section>
      <h1 className='text-center'>Heroes</h1>
      <ul className='flex justify-center gap-2 my-4'>
        {arrayOfLetters.map((letter) => (
          <LetterListElement
            key={letter}
            selected={letter === selectedLetter}
            onClick={() => onSelectLetter(letter)}>
            {letter}
          </LetterListElement>
        ))}
      </ul>
      {isLoading && <Loader />}
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

export default Heroes;
