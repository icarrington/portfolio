import React from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime.gif';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <div className="header-text">
        <h1>Welcome to my portfolio!</h1>
        <p>My name is Isaiah Carrington, and I am learning web development.</p>
      </div>
      <div className="head-btns">
        <Link to='/about' className="btn btn-white">
          <p className="btn-text">Know more about me</p>
        </Link>
        <Link to='/contact' className='btn btn-transparent'>Connect with me</Link>
      </div>
      <div className="splash-image">
        <img 
        src={homeAnime} 
        alt='animation' 
        className='home-anime'
        />

      </div>
    </div>
  )
}
