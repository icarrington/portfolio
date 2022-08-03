import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import GoHome from './GoHome/GoHome';

export default function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <GoHome />
      </HashRouter>
    </div>
  )
}
