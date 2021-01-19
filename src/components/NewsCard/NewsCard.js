import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NewsCard() {
  const location = useLocation();

  return (
    <div className="news-card">
      <button className={`news-card__button type="button"
        ${location.pathname === '/' && ' news-card__button-save'} 
        ${location.pathname === '/saved-news' && 'news-card__button-trash'}`}
      />
        <span className="news-card__tooltip" >Убрать из сохранённых</span>
      {location.pathname === '/saved-news' && <p className="news-card__tag">Природа</p> }
      <img className="news-card__image" alt="props" src="https://img.vz.ru/upimg/soc/soc_1080343.jpg" />
      <Link className="news-card__link" to="/" >
        <p className="news-card__date">16 января, 2021</p>
        <h3 className="news-card__title">Общество: Пользователи WhatsApp отстояли интимность своей переписки</h3>
        <p className="news-card__text">WhatsApp временно отказался от новой политики приватности, согласно которой данные клиентов передавались бы компании Facebook. На такое решение администрацию мессенджера вынудили пользователи, которые пригрозили массовым исходом - они доверяли WhatsApp, но не…</p>
        <p className="news-card__source">VZ.RU</p>
      </Link>
    </div>
  );
}

export default NewsCard;
