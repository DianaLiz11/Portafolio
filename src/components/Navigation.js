import React from 'react';
import {Link} from 'react-router-dom';



const navigation = (props)=> (
  <nav>
    <div className='nav-wrapper pink accent-3'>
      <Link to='/' className='brand-logo left'>{props.title}</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to='/' className='flow-text'>Acerca de mi</Link></li>
        <li><Link to='/MyWork' className='flow-text'>Mi trabajo</Link></li>
      </ul>
    </div>
  </nav>
)

export default navigation;





// <li><Link to='/Contact'>Contactame</Link></li>
