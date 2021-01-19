import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  const {pathname} = useLocation();

  return (
    <header className={`header ${pathname === '/saved-news' && 'header__dark'}`}>
      <Link to='/' className={`header__logo ${pathname === '/saved-news' && 'header__logo_dark'}`}>
        NewsExplorer
      </Link>
      <Navigation onLogin={props.onLogin} isMobileMenu={props.isMobileMenu}
      />
      <button className={`${pathname === '/' && 'header__mobile-menu header__mobile-menu_light'} ${pathname === '/saved-news' && 'header__mobile-menu header__mobile-menu_dark'} ${props.isOpenPopup && 'header__mobile-menu_hidden'} `} onClick={props.isMobileMenu}
      />
    </header>
  );
}

export default Header;