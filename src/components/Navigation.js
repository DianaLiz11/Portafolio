import React from 'react';
import {Link} from 'react-router-dom';
import logoDM from '../images/DM-logo.png';


const navigation = (props)=> (
  <nav>
    <div className='nav-wrapper blue-grey darken-4 margin-x'>
      <Link to='/' className='brand-logo left pink-text text- accent-3'><img className='responsive-img' src={logoDM} alt='DM'/></Link>
      <ul id="nav-mobile" className="right">
        <li><Link to='/' className='flow-text'>Acerca de mi</Link></li>
        <li><Link to='/MyWork' className='flow-text'>Mi trabajo</Link></li>
      </ul>
    </div>
  </nav>
)

export default navigation;





// <li><Link to='/Contact'>Contactame</Link></li>
