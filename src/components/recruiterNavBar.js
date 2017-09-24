import React from 'react';

const rNavBar = () => {
  return(
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">RBC</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Search</a></li>
        <li><a href="#">Candidates</a></li>
        <li><a href="#">Teams</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default rNavBar;
