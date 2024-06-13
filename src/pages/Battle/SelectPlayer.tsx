import { getHeroesByName } from '@api/heroes';
import HeroCard from '@components/HeroCard/HeroCard';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, useRef, useState } from 'react';
import { Hero } from 'types/hero';

type SelectPlayerProps = {
  label: string;
  onSelectHero: Dispatch<React.SetStateAction<Hero | null>>;
};

const SelectPlayer = ({ label, onSelectHero }: SelectPlayerProps) => {
  const [selected, setSelected] = useState<Hero | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: heroes, refetch } = useQuery({
    queryKey: ['getHeroesByName', label, inputRef.current?.value],
    queryFn: () => getHeroesByName(inputRef.current?.value || ''),
    enabled: !!inputRef.current?.value,
  });

  const onSelectHandler = (hero: Hero) => {
    setSelected(hero);
    onSelectHero(hero);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      refetch();
    }
  };

  return (
    <div className='flex flex-col items-center'>
      {!selected && (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center'>
          <fieldset className='flex flex-col items-center mb-2'>
            <label className='capitalize' htmlFor={label}>
              Select {label} Hero
            </label>
            <input type='text' id={label} name={label} ref={inputRef} />
          </fieldset>
          <button>Select</button>
        </form>
      )}
      {selected && (
        <button className='mx-auto' onClick={() => setSelected(null)}>
          Reset
        </button>
      )}
      {heroes && !selected && (
        <ul>
          {heroes.map((hero) => (
            <li
              key={hero.id}
              onClick={() => onSelectHandler(hero)}
              className='cursor-pointer border border-b border-black rounded px-2 py-1 my-1 hover:bg-slate-100 '>
              <span className='text-gray-700'>#{hero.id}</span> - {hero.name}
            </li>
          ))}
        </ul>
      )}
      {selected && <HeroCard hero={selected} />}
    </div>
  );
};

export default SelectPlayer;
