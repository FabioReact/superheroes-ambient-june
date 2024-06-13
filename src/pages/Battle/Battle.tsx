import { getHeroesByName } from '@api/heroes';
import HeroCard from '@components/HeroCard/HeroCard';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { Hero } from 'types/hero';

type SelectPlayerProps = {
  label: string;
};

const SelectPlayer = ({ label }: SelectPlayerProps) => {
  const [selected, setSelected] = useState<Hero | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: heroes, refetch } = useQuery({
    queryKey: ['getHeroesByName', inputRef.current?.value],
    queryFn: () => getHeroesByName(inputRef.current?.value || ''),
    enabled: false,
  });
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      refetch();
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label className='capitalize' htmlFor={label}>
            Select {label} Hero
          </label>
          <input type='text' id={label} name={label} ref={inputRef} />
        </fieldset>
        <button>Select</button>
      </form>
      {heroes && (
        <ul>
          {heroes.map((hero) => (
            <li
              key={hero.id}
              onClick={() => setSelected(hero)}
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

const Battle = () => {
  return (
    <section>
      <h1>Battle</h1>
      <div className='flex justify-center gap-40'>
        <SelectPlayer label='first' />
        <SelectPlayer label='second' />
      </div>
    </section>
  );
};

export default Battle;
