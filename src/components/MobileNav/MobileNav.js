import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function MobileNav(props) {
  const {pathname} = useLocation();
  return (

    <section className={`popup popup__mobile-menu ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__mobile-menu_header">
        <Link
          className={`header__logo ${props.isMobileMenu && pathname === '/saved-news' && 'header__logo_dark'}`}
          to="/"
          onClick={props.onClose}>
          NewsExplorer
        </Link>
        <button
          className="popup__close-menu"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose} />
      </div>
      <div className="popup__mobile-nav">
        <Navigation
          onLogin={props.onLogin}
          onClose={props.onClose}
          loggedIn={props.loggedIn}
        />
      </div>
    </section>
  );
}
export default MobileNav;
