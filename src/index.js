import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router , Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import 'bootstrap/dist/css/bootstrap.min.css';


const storeWithMiddleWare = applyMiddleware(ReduxPromise,routerMiddleware(createBrowserHistory({forceRefresh:true})))(createStore);

const store = storeWithMiddleWare(reducers);

const history = syncHistoryWithStore(createBrowserHistory(), store);


ReactDOM.render(
  <Provider>
  <Router history={history}>

  <App />

  </Router>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
