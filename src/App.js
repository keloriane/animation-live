import React,{useState} from 'react';

import Home from './views/Home';
import './App.css';

function App() {
    const [loaded , setLoaded] = useState(false);


  return (
    <div className="App">
        {!loaded }
     <Home />
    </div>
  );
}

export default App;
