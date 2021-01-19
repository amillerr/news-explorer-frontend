import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
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
      />
      <SearchForm />
      <NoResult />
      <NewsCardList />
      <About />
      <Footer />
    </div>
  );
}

export default Main;
