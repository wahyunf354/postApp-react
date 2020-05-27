import React from 'react';
import './IconButton.css';
import addIcon from '../../../assets/add.png';
import backIcon from '../../../assets/back.png';

const IconButton = ({ onClick, type, classCss }) => {
  return (
    <button className={classCss} onClick={onClick}>
      {
        type === "add" && <img src={addIcon} width='30' height='30' alt='add' />
      }
      {
        type === "back" && <img src={backIcon} width='30' height='30' alt='add' />
      }
    </button>
  );
};

export default IconButton;
