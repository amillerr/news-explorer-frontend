import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Main(props) {
  return (
    <div className="main">
      <Header
        onLogin={props.onLogin}
        isMobileMenu={props.isMobileMenu}
        isOpenPopup={props.isOpenPopup}
        name={props.name}
        loggedIn={props.loggedIn}
        onSignOut={props.onSignOut}
      />
      <SearchForm
        onSearchNews={props.onSearchNews}
      />
      <Preloader
        isPreloader={props.isPreloader}
      />
      <NoResult
        isNoResult={props.isNoResult}
      />
      <NewsCardList
        loggedIn={props.loggedIn}
        onLogin={props.onLogin}
        articles={props.articles}
        myArticles={props.myArticles}
        keyword={props.keyword}
        mySavedNews={props.mySavedNews}
        deleteSavedNews={props.deleteSavedNews}
      />
      <About />
      <Footer />
    </div>
  );
}

export default Main;
