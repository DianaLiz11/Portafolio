import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">DM</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Inicio</a></li>
            <li><a href="#">Acerca de mi</a></li>
            <li><a href="#">Contactame</a></li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
  );
}

export default App;
