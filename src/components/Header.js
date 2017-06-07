import React from 'react';

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='head-text'>REACT / REDUX WEATHER APP</h1>
      <p className='directions'>
        Enter your city or zip to get a 5 day forecast,
        click on individual days for more info.
        Type in the input again for a new search
      </p>
    </div>
  );
};

export default Header;
