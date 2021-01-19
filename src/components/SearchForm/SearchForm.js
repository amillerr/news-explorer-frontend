import React from 'react';

function handleChange(e) {
}

function SearchForm(props) {
  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={props.onSubmit}
      >
        <h1 className="search__form_title">Что творится в мире?</h1>
          <p className="search__form_subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className="search__form_container">
          <input
            className="search__form_input"
            placeholder="Введите тему новости"
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            className="search__form_button">
            Искать
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
