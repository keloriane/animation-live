import React from 'react';

import Cursor from './components/Cursor/Cursor'
import Home from './views/Home';
import './App.css';

import Work from './components/Work/Work'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    

  return (
    <div className="App">
    <Cursor/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>

        </Switch>

   
      </Router>
    </div>
  );
}

export default App;