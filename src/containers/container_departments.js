import React, { Component } from 'react';
import Depart from '../components/department';

class Department extends Component{

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
            <div className = "col s12">

                <Depart />
            </div>
        
        </div>
      </div>
    );
  }
}

export default Department;
