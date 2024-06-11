import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-blue-600' : '';
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-8'>
          <li>
            <NavLink className={getActiveClassName} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='/search'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='/heroes'>
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='/profile'>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='/register'>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='/login'>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
