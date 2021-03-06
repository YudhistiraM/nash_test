import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, Home, Dashboard, AddForm } from './components';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar /><br />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
        <Route path="/add" component={AddForm}>
          <AddForm />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
