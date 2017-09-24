import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Skills from '../components/skills';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';

class StudentPage extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <div className="col-9 flex-md-las">
              <Skills />
              <AboutMe />
              <Education /> 
            </div>            
          </div>
        </div>
    );
  }
}

export default StudentPage;
