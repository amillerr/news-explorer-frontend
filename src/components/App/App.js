import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import MobileNav from '../MobileNav/MobileNav';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [popupLoginOpen, setPopupLoginOpen] = useState(false);
  const [popupRegisterOpen, setPopupRegisterOpen] = useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [inputError, setInputError] = React.useState({});
  const [inputValue, setInputValue] = React.useState({});

  const handleChangeValid = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
    setInputError({ ...inputError, [e.target.name]: e.target.validationMessage });
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    setInputError({});
    setIsValid(false);
    setInputValue({});
  };

  const handleLogin = () => {
    setPopupLoginOpen(!popupLoginOpen);
    setPopupRegisterOpen(false);
    setInfoTooltipOpen(false);
    setMobileNavOpen(false);
    resetForm();
  };

  const handleRegister = () => {
    setPopupRegisterOpen(!popupRegisterOpen);
    setPopupLoginOpen(false);
    resetForm();
  };

  const handleInfoTooltip = () => {
    setInfoTooltipOpen(!infoTooltipOpen);
    setPopupRegisterOpen(false);
  };

  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closePopups = () => {
    setPopupLoginOpen(false);
    setPopupRegisterOpen(false);
    setInfoTooltipOpen(false);
    setMobileNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('popup_opened')) {
        closePopups();
      }
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">

            <Main
              isMobileMenu={handleMobileNav}
              onLogin={handleLogin}
              isOpenPopup={popupLoginOpen || popupRegisterOpen || infoTooltipOpen}
            />
          </Route>
          <Route exact path="/saved-news">
            <SavedNews
              isMobileMenu={handleMobileNav}
              onLogin={handleLogin}
            />
          </Route>
        </Switch>
        <Login
          isOpen={popupLoginOpen}
          onClose={closePopups}
          onClickLink={handleRegister}
          isValid={isValid}
          onChangeValid={handleChangeValid}
          inputError={inputError}
          inputValue={inputValue}
        />
        <Register
          isOpen={popupRegisterOpen}
          onClose={closePopups}
          onClickLink={handleLogin}
          onInfoTooltip={handleInfoTooltip}
          isValid={isValid}
          onChangeValid={handleChangeValid}
          inputError={inputError}
          inputValue={inputValue}
        />
        <InfoTooltip
          isOpen={infoTooltipOpen}
          onClickLink={handleLogin}
          onClose={closePopups} />
        <MobileNav
          isOpen={mobileNavOpen}
          onLogin={handleLogin}
          onClose={closePopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
