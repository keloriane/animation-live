import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faGithub,faLinkedin } from '@fortawesome/fontawesome-svg-core'
import Home from './views/Home';
import './App.css';
import Border from "./components/Border/Border";

function App() {
    const [loaded , setLoaded] = useState(false);


  return (
    <div className="App">
        <div className="sociale">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
       

        </div>
        {!loaded }
     <Home />
    </div>
  );
}

export default App;
