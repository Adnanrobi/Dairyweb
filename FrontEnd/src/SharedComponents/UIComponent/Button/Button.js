import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className='Button'>
      {props.isAdmin ? (
        <div className='red' onClick={props.onClick}>
          {props.message}
        </div>
      ) : (
        <div className='green' onClick={props.onClick}>
          {props.message}
        </div>
      )}
    </div>
  );
};

export default Button;
