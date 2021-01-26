import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import MobileNav from '../MobileNav/MobileNav';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { setToken, getToken, removeToken } from '../../utils/token';
import * as mainApi from '../../utils/MainApi';
import * as newsApi from '../../utils/NewsApi';

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const [isValid, setIsValid] = React.useState(false);
  const [inputError, setInputError] = React.useState({});
  const [inputValue, setInputValue] = React.useState({});
  const [submitError, setSubmitError] = React.useState('');

  const [preloader, setPreloader] = React.useState(false);
  const [noResult, setNoResult] = React.useState(false);

  const [articles, setArticles] = React.useState([]);
  const [myArticles, setMyArticles] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');


  const handleChangeValid = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
    setInputError({ ...inputError, [e.target.name]: e.target.validationMessage });
    setInputValue({ ...inputValue, [e.target.name]: e.target.value.trim() });
  }
  const resetForm = () => {
    setInputError({});
    setIsValid(false);
    setInputValue({});
    setSubmitError('');
  }

  const handleSignIn = () => {
    setLoginOpen(!loginOpen);
    setRegisterOpen(false)
    setInfoTooltipOpen(false)
    setMobileNavOpen(false)
    resetForm()
  }
  const handleSignUp = () => {
    setRegisterOpen(!registerOpen);
    setLoginOpen(false);
    resetForm()
  }
  const handleInfoTooltip = () => {
    setInfoTooltipOpen(!infoTooltipOpen);
    setRegisterOpen(false);
  }
  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  }
  const closePopups = () => {
    setLoginOpen(false)
    setRegisterOpen(false)
    setInfoTooltipOpen(false)
    setMobileNavOpen(false)
  }

  const getUserInfo = (res) => {
    mainApi.checkToken(res.token)
      .then((res) => {
        setCurrentUser(res.name)
      })
  }

  const handleRegister = (email, password, name) => {
    mainApi.register(email, password, name)
      .then((res) => {
        if (res) {
          handleInfoTooltip()
        }
      })
      .catch((err) => {
        console.log(err.status)
        if (err.status === 409) {
          setSubmitError('Пользователь с таким email уже существует');
        } else if (err.status === 400) {
          setSubmitError('Hе корректно заполнено одно из полей');
        }
        else {
          setSubmitError('Что-то пошло не так! Попробуйте ещё раз.');
        }
      })
  }
  const handleLogin = (email, password) => {
    mainApi.authorize(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setToken(res.token);
          getUserInfo(res)
          history.push('/')
          closePopups();
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setSubmitError('Пользователь с таким email не найден')
        } else if (err.status === 400) {
          setSubmitError('Неправильные почта или пароль')
        } else {
          setSubmitError('Что-то пошло не так! Попробуйте ещё раз.');
        }

      })
  }

  const tokenCheck = () => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    Promise.all([mainApi.checkToken(jwt), mainApi.getMyArticles(jwt)])

      .then(([res, myArticles]) => {
        if (res) {
          setCurrentUser(res.name)
          setLoggedIn(true);
          setMyArticles(myArticles.reverse(), jwt)
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          console.log('Переданный токен некорректен');
        } else if (err.status === 400) {
          console.log('Токен не передан или передан не в том формате');
        }
      });
  }

  const handleSearchNews = (keyword) => {
    setArticles([])
    setPreloader(true)
    setNoResult(false)
    newsApi.getNewsArticle(keyword)
      .then((res) => {
        if (res) {
          localStorage.setItem('articles', JSON.stringify(res.articles));
          localStorage.setItem('keyword', keyword);
          setArticles(res.articles)
          setKeyword(keyword);
        }
        if (res.articles.length === 0) {
          setNoResult(true)
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloader(false)
      })

  }

  function handleSaveNews({ keyword, title, text, date, source, link, image }) {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    return mainApi.saveArticle({ keyword, title, text, date, source, link, image }, jwt)
      .then((res) => {
        setMyArticles([...myArticles, res,]);
      })
      .catch((err) => console.log('Request Error - ' + err))
  }


  const handleArticleDelete = () => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    const myArticlesId = myArticles.find((item) => {
      return item
    })
    mainApi.deleteArticle(myArticlesId._id, jwt)
      .then(() => {
        setMyArticles(myArticles.filter((c) => c._id !== myArticlesId._id));
      })
      .catch((err) => console.log('Ошибка удаления карточки : ', err))

  }

  const articlesCheck = () => {
    const articles = JSON.parse(localStorage.getItem('articles'));
    setArticles(articles || []);
  }
  const keywordCheck = () => {
    setKeyword(localStorage.getItem('keyword'));
  }

  React.useEffect(() => {
    tokenCheck();
    articlesCheck();
    keywordCheck();
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopups();
      }
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        closePopups();
      }
    });
  }, []);

  const onSignOut = () => {
    removeToken()
    localStorage.removeItem('articles');
    localStorage.removeItem('keyword');
    history.push('/');
    setLoggedIn(false);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">

            <Main
              isMobileMenu={handleMobileNav}
              onLogin={handleSignIn}
              isOpenPopup={loginOpen || registerOpen || infoTooltipOpen}
              loggedIn={loggedIn}
              name={currentUser}
              onSignOut={onSignOut}
              onSearchNews={handleSearchNews}
              isPreloader={preloader}
              isNoResult={noResult}
              articles={articles}
              keyword={keyword}
              mySavedNews={handleSaveNews}
              deleteSavedNews={handleArticleDelete}
              myArticles={myArticles}
            />
          </Route>
          <ProtectedRoute exact path="/saved-news" 
            loggedIn={loggedIn} 
            component={SavedNews}
            isMobileMenu={handleMobileNav}
            onLogin={handleSignIn}
            name={currentUser}
            onSignOut={onSignOut}
            myArticles={myArticles}
            articles={articles}
            keyword={keyword}
            deleteSavedNews={handleArticleDelete}>
          </ProtectedRoute>
        </Switch>
        <Route path="*">
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/saved-news" /> }
        </Route>
        <Login
          isOpen={loginOpen}
          onClose={closePopups}
          onClickLink={handleSignUp}
          isValid={isValid}
          onChangeValid={handleChangeValid}
          inputError={inputError}
          inputValue={inputValue}
          submitError={submitError}
          onLogin={handleLogin}
        />
        <Register
          isOpen={registerOpen}
          onClose={closePopups}
          onClickLink={handleSignIn}
          isValid={isValid}
          onChangeValid={handleChangeValid}
          inputError={inputError}
          inputValue={inputValue}
          submitError={submitError}
          onRegister={handleRegister}
        />
        <InfoTooltip
          isOpen={infoTooltipOpen}
          onClickLink={handleSignIn}
          onClose={closePopups} />
        <MobileNav
          isOpen={mobileNavOpen}
          onLogin={handleSignIn}
          onClose={closePopups}
          loggedIn={loggedIn}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
