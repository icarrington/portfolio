import React from 'react'
import { skillList } from '../../assets/skillsData'

export default function SkillCard(props) {
  return (
    <div className='skill'>
      <img src={props.skillUrl} alt="skill" />
      <p>{props.skillName}</p>      
    </div>
  )
}
