import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css'

export default function GoHome() {
  let navigate = useNavigate();
  let location = useLocation();
  const whiteBtn = location.pathname === '/';

  function navigateToHome() {
    navigate('/');
  }

  return (
    <button 
    className={`go-home-btn ${
      whiteBtn ? 'white-bkg' : 'gradient-bkg'
    }`}
    onClick={navigateToHome}>
      <img
      className='home-icon'
      src={whiteBtn ? homeIconBlack: homeIconWhite}
      alt="home-icon"
      />

    </button>
  )
}
