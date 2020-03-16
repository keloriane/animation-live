import React from 'react';

import Cursor from './components/Cursor/Cursor'
import Home from './views/Home';
import './App.css';

import Work from './components/Work/Work';
import Nav from "./components/Nav/Nav";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About/About';

function App() {
    

  return (
    <div className="App">
      <Cursor/>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>

   
      </Router>
    </div>
  );
}

export default App;