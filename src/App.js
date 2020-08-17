import React from 'react';
import './App.css';
import './custom-theme.scss'
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route exact path="/portfolio" render={ () => <Portfolio /> } />
        <Route exact path="/about" render={ () => <About /> } />
      </Switch>
    </div>
  );
}

export default App;
