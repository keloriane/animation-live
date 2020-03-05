import React from 'react';

import Cursor from './components/Cursor/Cursor'
import Home from './views/Home';
import './App.css';

import Work from './components/Work/Work';
import Nav from "./components/Nav/Nav";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    

  return (
    <div className="App">
      <Nav />
    <Cursor/>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>

        </Switch>

   
      </Router>
    </div>
  );
}

export default App;