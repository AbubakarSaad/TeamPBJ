import React, { Component } from 'react';
import Navbar from '../components/navbar';


class StudentPage extends Component{

  render(){
    return(
       <div className="container-fluid">
                <Navbar />
            <div className="row">
              <div className="col-md-12">
                <AboutMe />
              </div>  
            </div>
            <div className="row">
              <div className="col-md-12">
                <Education />
              </div>  
            </div>            
          </div>
    );
  }
}

export default StudentPage;
