import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LoginPage from './login/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
