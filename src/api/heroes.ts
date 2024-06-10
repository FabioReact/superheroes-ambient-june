import { Hero } from '../types/hero';

const getHeroes = async (): Promise<Hero[]> => {
  const response = await fetch('http://localhost:4000/heroes');
  const data = await response.json();
  return data;
};

const getHeroesByLetter = async (letter: string): Promise<Hero[]> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=^${letter}`);
  const data = await response.json();
  return data;
};

export { getHeroes, getHeroesByLetter };
