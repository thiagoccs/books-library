import React from "react";
import logo from '../../images/logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className='logo'>
      <img alt='logo' src={logo} className='logo-img' />
      <p><strong>Thiago</strong>Book</p>
    </div>
  );
}