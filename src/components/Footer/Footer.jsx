import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(props) {
  return (
    <div className='footer'>
      {props.phrase}
      <Link to={props.toAdress} className="footer-link"
      >{props.link}</Link>
    </div>
  )
}
