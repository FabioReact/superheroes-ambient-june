import { useAuthContext } from '@context/auth-context';
import { NavLink, Outlet } from 'react-router-dom';

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

const Layout = () => {
  const { connected } = useAuthContext();
  const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-blue-600' : '';

  const links = [
    { name: 'Home', path: '/', visibility: LinkVisibility.PUBLIC },
    { name: 'Search', path: '/search', visibility: LinkVisibility.PUBLIC },
    { name: 'Heroes', path: '/heroes', visibility: LinkVisibility.PUBLIC },
    { name: 'Profile', path: '/profile', visibility: LinkVisibility.AUTHENTICATED },
    { name: 'Register', path: '/register', visibility: LinkVisibility.NOT_AUTHENTICATED },
    { name: 'Login', path: '/login', visibility: LinkVisibility.NOT_AUTHENTICATED },
    { name: 'Logout', path: '/logout', visibility: LinkVisibility.AUTHENTICATED },
  ];

  return (
    <>
      <nav>
        <ul className='flex justify-center gap-8'>
          {links
            .filter(
              (link) =>
                link.visibility === LinkVisibility.PUBLIC ||
                link.visibility ===
                  (connected ? LinkVisibility.AUTHENTICATED : LinkVisibility.NOT_AUTHENTICATED),
            )
            .map((link) => (
              <li key={link.name}>
                <NavLink className={getActiveClassName} to={link.path}>
                  {link.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
