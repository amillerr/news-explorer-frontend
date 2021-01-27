import React from 'react';

function SearchForm(props) {
  const [inputValue, setInputValue] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  function handleChange(e) {
    setInputValue(e.target.value.trim());
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) {
      setInputError("Нужно ввести ключевое слово");
    } else {
      props.onSearchNews(inputValue);
    }
  }
  function handleFocus() {
    setInputError('');
  }

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit}
        noValidate>
        <h1 className="search__form_title">Что творится в мире?</h1>
          <p className="search__form_subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className="search__form_container">
          <input
            type="text"
            className={`search__form_input ${inputError && "search__form_input-error"}`}
            required
            placeholder="Введите тему новости"
            onChange={handleChange}
            value={inputValue || inputError}
            onFocus={handleFocus}
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
