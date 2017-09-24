import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Challenge from '../components/challenge';

class Challenges extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
            
            <Navbar />
            <div className = "col-md-10">
                <Challenge />
            </div>
        
        </div>
      </div>
    );
  }
}

export default Challenges;
