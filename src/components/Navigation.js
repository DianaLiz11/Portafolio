import React from 'react';
import {Link} from 'react-router-dom';



const navigation = (props)=> (
  <nav>
    <div className='nav-wrapper pink accent-4'>
      <Link exact to='/' className='brand-logo left'>{props.title}</Link>
      <ul id="nav-mobile" className="right">
        <li><Link exact to='/'>Inicio</Link></li>
        <li><Link to='/AboutMe'>acerca de mi</Link></li>
        <li><Link to='/Contact'>Contactame</Link></li>
      </ul>
    </div>
  </nav>
)

export default navigation;
