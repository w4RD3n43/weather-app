import React, { useContext, useState } from 'react';
import glassImage from '../asset/glass.png';
import { AppContext } from '../context/appcontext';

const Header = () => {
  
  const { changeHandler, clickHandler} = useContext(AppContext)
  
  return (
    <div className='header'>
      <input className='input' type='text' placeholder='Search your City'  onChange={changeHandler} />
      
      <button className='btn-1' onClick={clickHandler}>
      <img src={glassImage} alt='Search' className='image'  />
      </button>
    </div>
  );
}

export default Header;
