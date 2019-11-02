import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomePage from './routes/HomePage';
import SelectByTypePage from './routes/SelectByTypePage';
import SelectByProblemPage from './routes/SelectByProblemPage';
import './App.css';

function App() {
  return (
  <Router>
    <Route path='/by-type' component={SelectByTypePage} />
    <Route path='/by-problem' component={SelectByProblemPage} />
    <Route exact path='/' component={HomePage} />
  </Router>
  );
}

export default App;
