import React from 'react';
import logo from '../../../Resources/Images/Logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo__container'>
        <img className='logo__image' src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Logo;
