import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

const Layout = () => {
  const connected = useAppSelector((state) => state.auth.connected);
  const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-blue-600' : '';

  const links = [
    { name: 'Home', path: '/', visibility: LinkVisibility.PUBLIC },
    { name: 'Battle', path: '/battle', visibility: LinkVisibility.PUBLIC },
    { name: 'Search', path: '/search', visibility: LinkVisibility.PUBLIC },
    { name: 'Heroes', path: '/heroes', visibility: LinkVisibility.PUBLIC },
    { name: 'Add Hero', path: '/add-hero', visibility: LinkVisibility.AUTHENTICATED },
    { name: 'Profile', path: '/profile', visibility: LinkVisibility.AUTHENTICATED },
    { name: 'Counter', path: '/counter', visibility: LinkVisibility.PUBLIC },
    { name: 'Optimizations', path: '/optimizations', visibility: LinkVisibility.PUBLIC },
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
