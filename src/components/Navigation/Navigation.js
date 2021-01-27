import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoutLight from '../../images/logout-light.svg'
import logoutDark from '../../images/logout-dark.svg'


function Navigation(props) {
  const {pathname} = useLocation();

  return (
    <nav className={`nav ${!props.isMobileMenu && 'nav__mobile'}`}>
    <Link
        className={`nav__link ${pathname === '/' && 'nav__link_active'} ${props.isMobileMenu && pathname === '/saved-news' && 'nav__link_dark'}`}
        to="/"
        onClick={props.onClose} >
        Главная</Link>
    <Link
        className={`${props.loggedIn ? 'nav__link' : 'nav__block-hidden'} ${props.isMobileMenu && pathname === '/saved-news' && 'nav__link_dark nav__link_active_dark'}`}
        to="/saved-news"
        onClick={props.onClose}>
        Сохранённые статьи</Link>
    <button
        className={`nav__button-auth ${props.isMobileMenu && pathname === '/saved-news' && 'nav__button-auth_dark'}`}
        onClick={!props.loggedIn ? props.onLogin : props.onSignOut }
        type="button"
        aria-label="Авторизация">
        {`${props.loggedIn ? props.name : 'Авторизоваться'}`}
        {props.loggedIn && <img className="nav__button-logout" src={pathname === '/saved-news' ? logoutDark : logoutLight } alt="Выход" />}
        </button>
</nav>
  )
}

export default Navigation;
