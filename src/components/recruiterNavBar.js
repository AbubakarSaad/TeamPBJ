import React from 'react';
import logo from '../images/rbclogo.png'

const rNavBar = () => {
  return(
    <nav>
    <div className="nav-wrapper ">
    <div className="container">
      <a href="/recruiter/" className="brand-logo"><img src={logo} alt="logo" height="40px" /> <span className="brand-title">| RecruiterPortal</span></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/recruiter/">Search</a></li>
        <li><a href="/recruiter/candidates">Candidates</a></li>
        <li><a href="/department">Candidates</a></li>

      </ul>
      </div>
    </div>
  </nav>
  );
}

export default rNavBar;
