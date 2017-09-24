import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Skills from '../components/skills';

class StudentPage extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <div className="col-9 flex-md-las">
              <Skills />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
