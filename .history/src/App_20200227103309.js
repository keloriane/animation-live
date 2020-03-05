import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './views/Home';
import './App.css';
import Border from "./components/Border/Border";
import Work from './components/Work/Work';

import {Router, Link , Switch, Route} from 'react-router-dom';

function App() {
    const [loaded , setLoaded] = useState(false);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/" component={Home}/>
          <Route  path="/work" component={Work}/>

        </Switch>
      </Router>

   
    </div>
  );
}

export default App;