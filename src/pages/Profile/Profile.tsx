import { useAuthContext } from '@context/auth-context';

const Profile = () => {
  const context = useAuthContext();
  return (
    <section>
      <h1>Profile</h1>
      <pre>{JSON.stringify(context, null, 2)}</pre>
    </section>
  );
};

export default Profile;
