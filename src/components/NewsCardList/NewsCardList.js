import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <section className="news-list" >
      <h3 className="news-list__title">Результаты поиска</h3>
      <div className="news-list__items">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button className="news-list__button">Показать еще</button>
    </section>
  );
}

export default NewsCardList
