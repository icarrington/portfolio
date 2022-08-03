import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png';
import { skillList } from '../../assets/skillsData';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <div className='section-container'>
      <Header
      heading="My Skills"
      details="Here are the various languages and libraries that I've worked with in the past."
      />

      <div className="skill-card-container">
        {
          skillList.map(skill => {
            return <SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl} />
          })
        }
      </div>

      <Footer phrase="" link="Connect with Me" toAdress="/contact" />

      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills vector" className="skills-vector" />
      </div>
    </div>
  )
}
