import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from './components/Projects/Project.js';
import Contact from './components/Contact/Contact.js';
import About from './components/About/About.js';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App (){

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </div>
        <Footer />
      </BrowserRouter>
    );
}

export default App;