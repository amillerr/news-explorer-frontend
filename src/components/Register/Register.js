import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onInfoTooltip(true);
  }
  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      btnText="Зарегистрироваться"
      linkText="Войти"
      isOpen={props.isOpen}
      onClose={props.onClose}
      isValid={props.isValid}
      onClickLink={props.onClickLink}
      onSubmit={handleSubmit}
    >
      <div className="popup__field">
        <label className="popup__label">Email</label>
          <input
            name="email"
            type="email"
            className="popup__input popup__input_email"
            placeholder="Введите почту"
            required
            onChange={props.onChangeValid}
            value={props.inputValue.email || ''}
          />
          <span className="popup__input-error">{props.inputError.email}</span>
      </div>
      <div className="popup__field">
      <label className="popup__label">Пароль</label>
          <input
            name="password"
            type="password"
            className="popup__input popup__input_password"
            placeholder="Введите пароль"
            minLength="8"
            maxLength="30"
            required
            onChange={props.onChangeValid}
            value={props.inputValue.password || ''}
          />
          <span className="popup__input-error">{props.inputError.password}</span>
      </div>
      <div className="popup__field">
        <label className="popup__label">Имя</label>
          <input
            name="name"
            type="text"
            className="popup__input popup__input_name"
            placeholder="Введите своё имя"
            required
            minLength="2"
            maxLength="40"
            onChange={props.onChangeValid}
            value={props.inputValue.name || ''}
          />
          <span className="popup__input-error">{props.inputError.name}</span>
      </div>
         <span className="popup__submit-error"/>
    </PopupWithForm>
  );
}
export default Register;
