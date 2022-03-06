import React from 'react'
import { Router } from 'react-router-dom';
import Home from './components/pages';

const App = () => {
  return (
    <div>
      <Home />
      <Router>
        {/* <Home /> */}
      </Router>
    </div>
    
  );
}

export default App