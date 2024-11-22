import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';


function App() {
  return (
 
    <Router>
      <AppWrapper /> {/* Main app content in AppWrapper */}
    </Router>

  );
}

export default App;
