import React from 'react';
import {Link} from 'react-router-dom';



const navigation = (props)=> (
  <nav>
    <div className='nav-wrapper blue-grey darken-4'>
      <Link to='/' className='brand-logo left pink-text text- accent-3'>{props.title}</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to='/' className='flow-text'>Acerca de mi</Link></li>
        <li><Link to='/MyWork' className='flow-text'>Mi trabajo</Link></li>
      </ul>
    </div>
  </nav>
)

export default navigation;





// <li><Link to='/Contact'>Contactame</Link></li>
