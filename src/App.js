import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/signin" component={ Signin } exact />
      </Switch>
    </Router>
  );
}

export default App;
