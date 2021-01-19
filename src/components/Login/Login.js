import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  return (
    <PopupWithForm
      name='login'
      title='Вход'
      btnText='Войти'
      linkText='Зарегистироваться'
      isOpen={props.isOpen}
      onClose={props.onClose}
      isValid={props.isValid}
      onClickLink={props.onClickLink}>
    <div className='popup__field'>
      <label className="popup__label">Email</label>
        <input
          className="popup__input popup__input_email"
          name="email"
          type="email"
          value={props.inputValue.email || ''}
          onChange={props.onChangeValid}
          placeholder="Введите почту"
          minLength="6"
          maxLength="30"
          required
        />
        <span className="popup__input-error">{props.inputError.email}</span>
    </div>
      <div className="popup__field">
        <p className="popup__label">Пароль</p>
        <input
          name="password"
          type="password"
          className="popup__input popup__input_password"
          placeholder="Введите пароль"
          minLength="6"
          maxLength="30"
          required
          onChange={props.onChangeValid}
          value={props.inputValue.password || ''}
        />
        <span className="popup__input-error">{props.inputError.password}</span>
      </div>
      <span className="popup__submit-error"/>
    </PopupWithForm>

  );
}

export default Login;
