import React from 'react';
import './header.css';

const Header = (props) => {
  return <header className={props.className}>
  <h3>{props.appName}</h3>
  <input type='text' />
  </header>;
};

export default Header;
