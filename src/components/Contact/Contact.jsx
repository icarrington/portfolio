import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import twitter from './../../assets/twitter.png';
import email from './../../assets/email.png';

export default function Contact() {
  return (
    <div className='section-container'>
      <Header heading="Connect with me" details='You can find me on social media or send me an email.' />

      <div className="social-icons-container">
        <a href="https://github.com/icarrington" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a href="https://www.linkedin.com/in/isaiah-carrington-19b91b170/" className="social-icon">
          <img src={linkedin} alt="social" />
        </a>
        <a href="https://twitter.com/IsaiahCarringt6" className="social-icon">
          <img src={twitter} alt="social" />
        </a>
        <a href="mailto:isaiah.carrington@uconn.edu" className="social-icon">
          <img src={email} alt="social" />
        </a>
      </div>

      <Footer phrase="Read more " link="about me." toAdress="/about" />

      <div className="vector-frame">
        <img src={contactVector} alt="vector" />
      </div>
    </div>
  )
}
