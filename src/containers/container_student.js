import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Skills from '../components/skills';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';

class StudentPage extends Component{

  render(){
    return(
      <div>
        <div className="row">
          <div className="col s3">
            <Navbar />
          </div>
          <div className="col s9">
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
