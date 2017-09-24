import React from 'react';
import ReactDOM from 'react-dom';


import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router , Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import RecruiterPage from './containers/container_recruiter';
import StudentPage from './containers/container_student';


import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';


const storeWithMiddleWare = applyMiddleware(routerMiddleware(createBrowserHistory({forceRefresh:true})))(createStore);

const store = storeWithMiddleWare(reducers);

const history = syncHistoryWithStore(createBrowserHistory(), store);


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>

  <div>

  <Switch>
  <Route exact path="/" component={StudentPage} />
  <Route path="/student" component={StudentPage} />
  <Route path="/recruiter" component={RecruiterPage} />
  </Switch>

  </div>

  </Router>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
