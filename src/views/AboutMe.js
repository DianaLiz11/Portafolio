import React from 'react';
import diana from '../images/diana.jpg';
import iReact from '../images/react.png';
import iCss from '../images/css3.png';
import iHtml from '../images/html-5.png';
import iJavascript from '../images/javascript.png';
import iBootstrap from '../images/bootstrap.png';
import iFirebase from '../images/firebase.png';
import iNodejs from '../images/nodejs.png';
import iMaterialize from '../images/materialize.jpg';

const AboutMe = () => (
  <div className = 'container'>
    <div className='row'>
      <div className='col s4'>
        <img className='z-depth-3 circle responsive-img' src={diana} alt='Diana' />
      </div>
      <div className='col s8'></div>
        <h4 className='teal-text text-lighten-2'>Diana Muñoz</h4>
        <h6 className='pink-text text-darken-2'>Front End Developer</h6>
        <p>Convencida de que no existen los imposibles, soy una persona con un
          gran interés en superarme y crecer cada día, siempre decidida a cumplir
          mis metas y objetivos.</p>
        <p>Estudie la Licenciatura en informática y además realicé un bootcamp en
          Laboratoria Coding con la especialidad de <strong>Front End Developer</strong>.
          Estoy consciente que todo va cambiando día a día, por lo cual siempre
          busco aprender cosas nuevas.</p>
        <p>En el ámbito profesional he trabajado en diferentes áreas, de las
          cuales me he llevado grandes aprendizajes y me han permitido desarrollar
          cualidades como la capacidad de análisis y la adaptabilidad a
          diferentes ambientes de trabajo, así como a diferentes circunstancias.</p>
        <p>Si te interesa conocer un poco más de mi trayectoria profesional,
          te invito a descargar mi cv aqui.</p>
    </div>
    <div className="divider"></div>
    <div className='row'>
      <div className='col s12'>
        <blockquote><h5>Ofrezco mis servicios en tecnologías como:</h5></blockquote>
        <table className="responsive-table">
            <tbody>
              <tr>
                <td><img src={iJavascript} alt='JavaScript'/></td>
                <td>JavaScript</td>
                <td><img src={iReact} alt='React'/></td>
                <td>React</td>
                <td><img src={iHtml} alt='HTML 5'/></td>
                <td>HTML 5</td>
              </tr>
              <tr>
                <td><img src={iCss} alt='CSS 3'/></td>
                <td>CSS 3</td>
                <td><img src={iBootstrap} alt='Bootstrap'/></td>
                <td>Bootstrap</td>
                <td><img src={iMaterialize} alt='Materialize'/></td>
                <td>Materialize</td>
              </tr>
              <tr>
                <td><img src={iFirebase} alt='Firebase'/></td>
                <td>Firebase</td>
                <td><img src={iNodejs} alt='Nodejs'/></td>
                <td>Nodejs</td>
                <td></td>
                <td></td>
              </tr>

            </tbody>
          </table>
          <p>Estas tecnologías son las que he manejado, sin embargo siempre
            estare dispuesta a aprender nuevas herramientas.</p>
      </div>
    </div>

  </div>
);

export default AboutMe;
