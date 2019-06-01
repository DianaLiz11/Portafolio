import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import MyWork from './views/MyWork';
import AboutMe from './views/AboutMe';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navigation title ="DM" />
          </header>
          <main>
            <Route exact path="/" component={AboutMe}/>
            <Route path="/MyWork" component={MyWork}/>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



// <Route exact path="/" render={()=> <Home title = "Mis proyectos" />}/>
// <Route path="/AboutMe" render={()=> <AboutMe title = "Acerca de mi" />}/>
// <Route path="/Contact" render={()=> <Contact title = "Contactame" />}/>

// <Route path="/Contact" render={()=> <Contact />}/>
