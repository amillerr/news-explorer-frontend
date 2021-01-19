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
        isMobileMenu={props.isMobileMenu} />
      <SavedNewsHeader />
      <SavedNewsList />
      <Footer />
    </div>
  );
}

export default SavedNews;
