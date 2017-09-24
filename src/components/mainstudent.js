import React, { Component } from 'react';
import Skills from '../components/skills';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Challenges from '../components/StudentChallenges';

class MainStudent extends Component{

    render() {
        return (
            <div>
              <Skills />
              <Challenges />
              <AboutMe />
              <Education />
            </div>
        )
    }

}

export default MainStudent;