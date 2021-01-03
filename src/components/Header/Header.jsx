import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ onLogin, loggedIn }) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/saved-news' && 'header__dark'}`}>
      <Link to='/' className={`header__logo ${location.pathname === '/saved-news' && 'header__logo_dark'}`}>NewsExplorer</Link>
      <Navigation
        onLogin={onLogin}
        loggedIn={loggedIn}
      />
    </header>
  )
}

export default Header;
