import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Challenge from '../components/challenge';
import ChallengePage from '../components/challengePage';

import {Route, Switch } from 'react-router-dom';
class Challenges extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
            <div className = "col s3">
                <Navbar />
            </div>
            <div className = "col s9">
                <Switch>
                    <Route exact path="/challenges/" component={Challenge} />
                    <Route path="/challenges/challenge" component={ChallengePage} />
                </Switch>    
           
            </div>
        
        </div>
      </div>
    );
  }
}

export default Challenges;
