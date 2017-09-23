import React, { Component } from 'react';
import Navbar from '../components/navbar';


class StudentPage extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <div className="col-9 col-sm-10 col-md-10 col-lg-11 col-xl-11">
              <h2>Hello There</h2>
              <p>Test test test test test test test </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
