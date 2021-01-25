import React from 'react';

function InfoTooltip(props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__tooltip">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose} >
        </button>
        <p className="popup__title popup__tooltip_title">Пользователь успешно зарегистрирован!</p>
        <button onClick={props.onClickLink} className="popup__tooltip_link">Войти</button>
      </div>
    </section>
  );
}
export default InfoTooltip;
