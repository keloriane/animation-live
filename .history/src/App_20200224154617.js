import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Home from './views/Home';
import './App.css';
import Border from "./components/Border/Border";

function App() {
    const [loaded , setLoaded] = useState(false);


  return (
    <div className="App">
        <div className="sociale">
        <FontAwesomeIcon icon="coffee" />
            <i className="fab fa-facebook"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>

        </div>
        {!loaded }
     <Home />
    </div>
  );
}

export default App;
