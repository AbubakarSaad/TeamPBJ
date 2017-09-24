import React, { Component } from 'react';
import Skills from '../components/skills';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Challenges from '../components/StudentChallenges';

class MainStudent extends Component{

    render() {
        return (
            <div>
              <Skills visible={true}/>
              <Challenges visible={true}/>
              <AboutMe />
              <Education visible={true}/>
            </div>
        )
    }

}

export default MainStudent;