import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navigation title ="DM" />
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/AboutMe" component={AboutMe}/>
          <Route path="/Contact" render={()=> <Contact />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



// <Route exact path="/" render={()=> <Home title = "Mis proyectos" />}/>
// <Route path="/AboutMe" render={()=> <AboutMe title = "Acerca de mi" />}/>
// <Route path="/Contact" render={()=> <Contact title = "Contactame" />}/>
