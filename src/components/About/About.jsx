import React from 'react';
import './About.css';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png'
import Footer from '../Footer/Footer';
import profile from './../../assets/IMG_4939.JPG';

export default function About() {
  return (
    <div className='section-container'>
      <Header
      heading="About Me"
      details=""
      />

      <div className="about-main">
        <div className="about-main-left">
          <h3 className="about-sub-head">Education</h3>
          <p className="about-details">I attended University of Connecticut for undergraduate and graduate school where I studied Materials Science & Engineering. I graduated in 2020 with a Bachelors degree and achieved my Masters degree in December 2021.</p>
          <h3 className="about-sub-head">Interests</h3>
          <p className="about-details">I am interested in science and technology. I enjoy listening to music and making beats and can play the guitar, piano, and drums. I also enjoy playing video games and developing games and web apps.</p>
        </div>

        <div className="about-main-right">
          <img src={profile} alt="Profile" className="profile" />
        </div>
      </div>

      <Footer
      phrase="Check out my "
      link="projects!"
      toAdress="/projects"
      />
      <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about" />
      </div>
    </div>
  )
}
