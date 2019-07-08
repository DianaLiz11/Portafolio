import React from 'react';

const sectionFooter = (props)=> (
  <footer className="page-footer blue-grey darken-4">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="pink-text text- accent-3">Contactame</h5>
          <p className="grey-text text-lighten-4">Si te interesa mi trabajo o simplemente quieres contactarme, me puedes encontrar en los medios siguientes:</p>
        </div>
        <div className='col l4 offset-l2 s12'>
          <table className=''>
            <tbody>
              <tr>
                <td><i className='fab fa-github'></i></td>
                <td><a className='cyan-text text-lighten-4' href='https://github.com/DianaLiz11/' target='_blank' rel='noopener noreferrer'>DianaLiz11</a></td>
              </tr>
              <tr>
                <td><i className='fab fa-linkedin'></i></td>
                <td><a className='cyan-text text-lighten-4' href='https://www.linkedin.com/in/diana-lizbeth-mu%C3%B1oz-p%C3%A9rez/' target='_blank' rel='noopener noreferrer'>diana-lizbeth-muñoz-perez</a></td>
              </tr>
              <tr>
                <td><i className='fab fa-google'></i></td>
                <td><a className='cyan-text text-lighten-4' href='mailto:dianamunoz86@gmail.com'>dianamunoz86@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
          © Diana Lizbeth Muñoz Pérez
        <span className='grey-text text-lighten-4 right'>Front End Developer</span>
      </div>
    </div>
  </footer>
)

export default sectionFooter;
