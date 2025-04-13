import React from 'react';
import ProjectBox from './ProjectBox';
import call from '../images/call.jpg';
import alert from '../images/alert.jpg';
import '../App.css';
 // Make sure this line is here

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='project-heading'>My <span>Projects</span></h1>
      <div className='projects-row'>
        <ProjectBox projectPhoto={alert} projectName="Alert Drowsy Driver" />
        <ProjectBox projectPhoto={call} projectName="Call Centre" />
      </div>
    </div>
  );
};

export default Projects;
