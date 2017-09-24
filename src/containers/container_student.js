import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Skills from '../components/skills';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Challenges from '../components/StudentChallenges';

class StudentPage extends Component{

  render(){
    return(
      <div>
        <div className="row">
          <div className="col s3">
            <Navbar />
          </div>
          <div className="col s9">
              <Skills visible={true}/>
                <Challenges visible={true} />
              <AboutMe />

              <Education visible={true}/>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
