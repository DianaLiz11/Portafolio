import React from 'react';
import diana from '../images/diana.jpg';

const AboutMe = () => (
  <div className = 'container'>
    <div className='row'>
      <div className='col s4'>
        <img className='z-depth-3 circle responsive-img' src={diana} alt='Diana' />
      </div>
      <div className='col s8'></div>
        <h4 className='teal-text text-lighten-2'>Diana Muñoz</h4>
        <h6 className='pink-text text-lighten-2'>Licenciada en Informática</h6>
        <p>Además de haber estudiado la Licenciatura, realice un bootcamp en
          Laboratoria con la especialidad de <strong>Front End Developer</strong>. Estoy consciente
          que todo va cambiando día a día, por lo cual siempre busco aprender
          cosas nuevas.</p>
        <p>En el ámbito profesional he trabajado en diferentes áreas, de las
          cuales me he llevado grandes aprendizajes.</p>
    </div>
  </div>
);

export default AboutMe;
