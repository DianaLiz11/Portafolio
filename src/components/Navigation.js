import React from 'react';
import {Link} from 'react-router-dom';

const navigation = (props)=> (
  <nav>
    <div class="nav-wrapper">
      <Link exact to="/" class="brand-logo">{props.title}</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link exact to="/">Inicio</Link></li>
        <li><Link to="/AboutMe">acerca de mi</Link></li>
        <li><Link to="/Contact">Contactame</Link></li>
      </ul>
    </div>
  </nav>
)


export default navigation;
