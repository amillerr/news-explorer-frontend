import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {
  const {pathname} = useLocation();

  return (
    <nav className={`nav ${!props.isMobileMenu && 'nav__mobile'}`}>
      <Link
        className={`nav__link ${pathname === '/' && 'nav__link_active'} ${props.isMobileMenu && pathname === '/saved-news' && 'nav__link_dark'}`} to="/" onClick={props.onClose} >
        Главная
      </Link>
      <Link
        className={`nav__link ${props.isMobileMenu && pathname === '/saved-news' && 'nav__link_dark nav__link_active_dark'}`} to="/saved-news" onClick={props.onClose}>
        Сохранённые статьи
      </Link>
      <button
        className={`nav__button-auth ${props.isMobileMenu && pathname === '/saved-news' && 'nav__button-auth_dark'}`} onClick={props.onLogin}
        type="button"
        aria-label="Авторизация">
        Авторизоваться
      </button>
    </nav>
  );
}

export default Navigation;
