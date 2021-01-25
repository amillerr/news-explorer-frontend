import React from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const keywordsArray = props.myArticles.map(item => item.keyword);
  const keywords = [...new Set(keywordsArray)]

  const articlesCount = (number) => {
    if (number === 1) {
      return "сохраненная статья";
    } else if (number > 1 && number < 5) {
      return "сохраненные статьи";
    } else if (number >= 5) {
      return "сохраненных статей";
    } else if (number === 0) {
      return "сохраненных статей"
    }
  }

  const keywordsCount = (number) => {
    if (number <= 1) {
      return "По ключевому слову: ";
    } else if (number >= 2) {
      return "По ключевым словам: ";
    }
  }
  const otherKeywordsCount = (number) => {
    if (number <= 0) {
      return ''
    } else if (number === 1) {
      return '-ому другому'
    } else if (number >= 2 && number <= 4) {
      return '-м другим'
    } else if (number === 7 || number === 8) {
      return '-ми другим'
    } else {
      return '-ти другим'
    }
  }
  const keywordUppercase = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const keywordFirst = keywordUppercase(keywords[0])
  const keywordSecond = keywordUppercase(keywords[1])

  return (
    <div className="saved-news-header">
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <h2 className="saved-news-header__subtitle">{`${currentUser}, у вас ${props.myArticles.length === 0 ? "нет" : props.myArticles.length} ${articlesCount(props.myArticles.length)}`}</h2>
      {props.myArticles.length !== 0 &&
      <p className="saved-news-header__tags">{keywordsCount(keywords.length)}
        {keywords.length <= 1 ?
          <span className="saved-news-header__tags_bold">{keywordFirst}</span>
          : <>
            <span
              className="saved-news-header__tags_bold">{keywordFirst}, {keywordSecond}</span>
            <span
              className={`${keywords.length > 2 ? "saved-news-header__tags_bold" : "saved-news-header__tags-hidden"}`}> и&#8201;{keywords.length - 2}{otherKeywordsCount(keywords.length - 2)}</span></>
        }
      </p>
      }
    </div>
  );
}

export default SavedNewsHeader;
