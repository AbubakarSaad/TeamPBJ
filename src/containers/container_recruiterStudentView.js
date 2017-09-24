import React from 'react';
import Profile from '../components/profile';
import Skills from '../components/skills';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Challenges from '../components/StudentChallenges';

const studentView = () => {
  return (
    <div>
    <Profile />
    <Skills />
      <Challenges />


    <Education />
    </div>

  );
}

export default studentView;
