import React from 'react';

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__icon"/>
      <p className="preloader__text">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
