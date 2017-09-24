import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Challenges from '../components/challenge';
import MainStudent from '../components/mainstudent.js';
import OfferPage from '../components/offers.js';

import {Route, Switch } from 'react-router-dom';
class StudentPage extends Component{

  render(){
    return(
      <div>

        <div className="row">
          <div className="col s2">
            <Navbar />
          </div>

          <div className="col s9">
              <Switch>
                    <Route exact path="/" component={MainStudent} />
                    <Route path="/student/offers" component={OfferPage} />
                    <Route path="/student/challenges" component={Challenges} />

                </Switch>
          </div>

        </div>
      </div>
    );
  }
}

export default StudentPage;
