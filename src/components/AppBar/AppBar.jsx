import { Navigation } from '../Navigation/Navigation';
import  UserMenu  from '../UserMenu/UserMenu';
import { NavigationAuth } from '../NavigationAuth/NavigationAuth';
import { useAuth } from '../../hooks/useAuth'
// import style from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavigationAuth />}
    </header>
  );
};