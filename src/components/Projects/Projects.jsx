import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Projects.css'
import { projectsData } from './../../assets/projectsData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className='section-container'>
        <Header heading="My Projects" details="Here are a few cool things I've worked on. Check them out!" />

        <div className="project-cards-container">
          {
            projectsData.map(project => {
              return <ProjectCard 
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              />
            })
          }
        </div>

        <Footer phrase="Check out " link="my skills!" toAdress='/skills' />
    </div>
  )
}
