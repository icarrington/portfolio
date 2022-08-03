import React from 'react'
import './Projects.css'

export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <div className="img-container">
        <a href={props.projectUrl} className="project-external-link">
          <img src={props.imageUrl} alt="project" className="project-image" />
        </a>
      </div>

      <div className="project-details-container">
        <h2 className="project-heading">{props.projectName}</h2>
        <p className="project-details">{props.projectDescription}</p>
      </div>
    </div>
  )
}
