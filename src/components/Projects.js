import React from 'react';
import {ProjectsList} from '../data/projectsData';

const Projects = () => {
  let projects = ProjectsList.map((project) => {
    return (
      <div className='col s12 l6' key={project.id}>
      <div className='card' key={project.id}>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={project.urlImage} alt={project.name}/>
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>{project.name}<i className='material-icons right'>more_vert</i></span>
          <p><a href={project.urlGit} target='_blank' rel='noopener noreferrer'>Link del proyecto en github</a></p>
          <p><a href={project.urlDeploy} target='_blank' rel='noopener noreferrer'>Link Demo</a></p>
        </div>
        <div className="card-reveal light-blue lighten-5">
          <span className='card-title pink-text text-accent-3'>{project.name}<i className='material-icons right'>close</i></span>
          <p>{project.description}</p>
        </div>
      </div>
      </div>
    );
  });

  return (
    <div className='row'>
      {projects}
    </div>
  );
}

export default Projects;
