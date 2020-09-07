import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, Home, Dashboard } from './components';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar /><br/>
      <Switch>
        <Route path="/home" component={Home}>
          <Home />
        </Route>
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
