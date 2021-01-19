import React from 'react';
import noResultIcon from '../../images/no-result.svg';

function MainNoResults() {
  return (
    <div className="no-result">
      <img className="no-result__icon" src={noResultIcon} alt="No Result" />
      <h2 className="no-result__title">Ничего не найдено</h2>
      <p className="no-result__text">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default MainNoResults;
