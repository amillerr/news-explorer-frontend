import React from 'react';
import noResultIcon from '../../images/no-result.svg';

function NoResults(props) {
  return (
    <div className={`${props.isNoResult ? "no-result" : "no-result__hidden"}`}>
      <img className="no-result__icon" src={noResultIcon} alt="No Result" />
      <h2 className="no-result__title">Ничего не найдено</h2>
      <p className="no-result__text">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default NoResults;
