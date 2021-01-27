import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNewsList from '../SavedNewsList/SavedNewsList';
import Footer from '../Footer/Footer';

function SavedNews(props) {
  return (
    <div className="saved-news">
          <Header
            onLogin={props.onLogin}
            isMobileMenu={props.isMobileMenu}
            loggedIn={props.loggedIn}
            name={props.name}
            onSignOut={props.onSignOut}
          />
          <SavedNewsHeader 
            myArticles={props.myArticles}
            keyword={props.keyword}
          />
          <SavedNewsList
            myArticles={props.myArticles}
            keyword={props.keyword}
            loggedIn={props.loggedIn}
            deleteSavedNews={props.deleteSavedNews}
          />
            <Footer />
        </div>
  );
}

export default SavedNews;
