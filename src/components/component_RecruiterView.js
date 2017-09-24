import React from 'react';


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
