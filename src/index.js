import React from 'react';
import ReactDOM from 'react-dom';


import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RecruiterPage from './containers/container_recruiter';
import StudentPage from './containers/container_student';

import ChallengePage from './containers/container_challenges';

import Dept from './containers/container_departments';

//import 'bootstrap/dist/css/bootstrap.min.css';

import 'materialize-css/dist/js/materialize.min.js';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import './mainAbu.css';




ReactDOM.render(
  <BrowserRouter>

  <div>

  <Switch>
  <Route exact path="/" component={StudentPage} />
  <Route path="/student" component={StudentPage} />
  <Route path="/recruiter" component={RecruiterPage} />
  <Route path="/challenges" component={ChallengePage} />
  <Route path="/department" component={Dept} />

  </Switch>

  </div>

  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
