import { Hero } from '../types/hero';

const getHeroes = async (): Promise<Hero[]> => {
  const response = await fetch('http://localhost:4000/heroes');
  const data = await response.json();
  return data;
};

const getHeroesByLetter = async (
  letter: string,
  options?: {
    signal?: AbortSignal;
  },
): Promise<Hero[]> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=^${letter}`, {
    signal: options?.signal,
  });
  const data = await response.json();
  return data;
};

const getHeroesByName = async (name: string): Promise<Array<Hero>> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=${name}`);
  if (!response.ok) throw new Error('Not a valid response');
  return response.json();
};

export { getHeroes, getHeroesByLetter, getHeroesByName };
