import React from 'react';
import './projects.scss'

const Projects = () => {
  return (
    <div className="project-section">
        <div className="project-container">
            <div className="project-menu">
                <h3>Projects</h3>
                <ul className='menu-list'>
                    <li>All</li>
                    <li>Commercial</li>
                    <li>Residential</li>
                    <li>Other</li>
                </ul>
            </div>
            <div className="project-carrusel"></div>
        </div>
    </div>
  )
}

export default Projects