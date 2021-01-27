import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function NewsCardList(props) {
  const [articlesCount, setArticlesCount] = React.useState(3);

  const currentUser = React.useContext(CurrentUserContext);

  const handleShowNews = () => {
    setArticlesCount(articlesCount + 3)
  }


  return (
    <section className={`${props.articles.length > 0 ? "news-list" : "news-list__hidden" }`} >
        <h3 className="news-list__title">Результаты поиска</h3>
        <div className="news-list__items">
            {props.articles.slice(0, articlesCount).map((article, index) => (
                <NewsCard
                loggedIn={props.loggedIn}
                onLogin={props.onLogin}
                key={index}
                articles={props.articles}
                keyword={props.keyword}
                imageUrl={article.urlToImage}
                date={article.publishedAt}
                title={article.title}
                text={article.description}
                source={article.source.name}
                urlNews={article.url}
                _id={article._id}
                mySavedNews={props.mySavedNews}
                deleteSavedNews={props.deleteSavedNews}
                currentUser={currentUser}
                myArticles={props.myArticles}
                />
            ))}
        </div>
        {props.articles.length >= articlesCount &&
            <button className="news-list__button" onClick={handleShowNews} >Показать еще</button>}
    </section>
  )
}

export default NewsCardList
