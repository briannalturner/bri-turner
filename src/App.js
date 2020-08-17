import React from 'react';
import './App.css';
import './custom-theme.scss'
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      </Switch>
    </div>
  );
}

export default App;
