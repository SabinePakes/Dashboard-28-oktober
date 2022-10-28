import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
      <h1>Winc Student Dashboard!</h1>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default Header;
