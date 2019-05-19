import React from 'react';
import Projects from '../components/Projects';
import '../App.css';

const Home = () => (
  <div className = 'container'>
    <h4 className='teal-text text-lighten-2'>Mis proyectos</h4>
    <p>Durante mi preparación en Laboratoria, he realizado varios proyectos
    que han contribuido a mi desarrollo profesional y me han permitido
    obtener nuevos conocimientos.</p>
    <p>A continuación te presento algunos de estos proyectos en los
    que he participado.</p>
    <div className="divider"></div>
    <Projects />
  </div>
);

export default Home;
