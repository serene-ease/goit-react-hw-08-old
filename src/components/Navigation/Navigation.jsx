import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// import style from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink  to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
