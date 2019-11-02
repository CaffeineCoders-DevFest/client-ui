import React from 'react';
import {
  Router,
  Route
} from "react-router-dom";
import HomePage from './routes/HomePage';
import SelectByTypePage from './routes/SelectByTypePage';
import SelectByProblemPage from './routes/SelectByProblemPage';
import history from './history';
import './App.css';

function App() {
  return (
  <Router history={history}>
    <Route path='/by-type' component={SelectByTypePage} />
    <Route path='/by-problem' component={SelectByProblemPage} />
    <Route exact path='/' component={HomePage} />
  </Router>
  );
}

export default App;
