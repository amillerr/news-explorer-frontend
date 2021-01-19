import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <nav className="footer__nav">
        <ul className="footer__links" >
          <li className="footer__list">
            <Link className="footer__link" to="/" >
              Главная
            </Link>
          </li>
          <li>
            <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className="footer__socials">
          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img className="footer__link-social" src={githubIcon} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img className="footer__link-social" src={facebookIcon} alt="Facebook" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
