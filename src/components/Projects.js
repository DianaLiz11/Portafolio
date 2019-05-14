import React from 'react';
import {ProjectsList} from '../data/projectsData';

const Projects = () => {
  let projects = ProjectsList.map((project) => {
    return (
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={project.urlImage} alt={project.name}/>
        </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{project.name}<i className='material-icons right'>more_vert</i></span>
        <p><a href={project.urlGit}>Link del proyecto en github</a></p>
        <p><a href={project.urlDeploy}>Link Demo</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{project.name}<i className='material-icons right'>close</i></span>
        <p>{project.description}</p>
      </div>
    </div>
    );
  });

  return (
    <div className='container'>
      <div>
        {projects}
      </div>
    </div>
  );
}

export default Projects;
