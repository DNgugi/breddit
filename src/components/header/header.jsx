import React from 'react';
import './header.css';
import Search from '../../features/search/search';

const Header = (props) => {
  
  return <header className={props.className}>
  <h3>{props.appName}</h3>
  <Search />
  </header>;
};

export default Header;
