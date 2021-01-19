import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsList() {
  return (
    <section className="news-list" >
      <div className="news-list__items">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
}

export default SavedNewsList
