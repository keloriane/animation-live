import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './views/Home';
import './App.css';
import Border from "./components/Border/Border";
import Work from './components/Work/Work'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    const [loaded , setLoaded] = useState(false);


  return (
      <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>

        </Switch>

   
    </div>
      </Router>
  );
}

export default App;