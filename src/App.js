import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Admin from './components/Admin';

const App = () => (
  <Router>
    <div>
      <Route path='/' component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/myaccount" component={MyAccount} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
);

export default App;
