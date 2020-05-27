import React from 'react';

const Button = ({onClick, title, classCss}) => {
  return (
    <button
    className={classCss}
    onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
