import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function SavedNewsList(props) {
  return (
    <section className="news-list" >
      <div className="news-list__items">
        {props.myArticles.map((article, index) => {
          return (
            <NewsCard
              key={index}
              keyword={article.keyword}
              title={article.title}
              text={article.text}
              date={article.date}
              source={article.source}
              imageUrl={article.image}
              urlNews={article.link}
              _id={article._id}
              deleteSavedNews={props.deleteSavedNews}
              myArticles={props.myArticles}
              loggedIn={props.loggedIn}
            />)
          })
        }
      </div>
    </section>
  );
}

export default SavedNewsList
