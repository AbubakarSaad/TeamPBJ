import React from 'react';
import './css/recruiterPage.css';

const recruiterHomePage = (props) => {
  return(
    <div className="recruiterView">
      <div className="container">
      {props.children}
      </div>
    </div>
  );
}

export default recruiterHomePage;
