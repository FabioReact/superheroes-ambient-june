import { useAppSelector } from '../../redux/hooks';
import HeroCard from '@components/HeroCard/HeroCard';

const Profile = () => {
  const auth = useAppSelector((state) => state.auth);
  const favoritesHeroes = useAppSelector((state) => state.heroManager);

  return (
    <section>
      <h1>Profile</h1>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
      {favoritesHeroes && (
        <ul className='flex justify-center flex-wrap gap-4'>
          {favoritesHeroes.map((hero) => (
            <li key={hero.id}>
              <HeroCard hero={hero} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Profile;
