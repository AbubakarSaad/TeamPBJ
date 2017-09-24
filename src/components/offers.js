import React, { Component } from 'react';
import logo from '../images/RBC.png';

class Offers extends Component {
    
    
    render() {
        return (
            <div className = "container">
                <div className="row">
                    <div className="col s12 m12">
                        <h2 className="header">Offers</h2>
                        <div className="card horizontal">
                          <div className="card-image">
                            <img src={logo} alt="RBC" height="180px"/>
                          </div>
                          <div className="card-stacked">

                            <div className="card-content">
                                <div className="row">
                                    <div className="col s8">
                                        
                                        <p className = "bold">Technical System Analyst</p>
                                        <ul>
                                            <li>Create and review technical design documents related to small projects and understanding how the design will be used in the code development process</li>
                                            <li></li>
                                        </ul>
            
                                    </div>
                                    <div className="col s4 progressBarDone">
                                        <div className="status">Interview Booked</div><br/>
                                        <span className=""><i className=" material-icons">check</i> 
                                            
                                        </span>
                                        <span><i className="material-icons current">2</i></span>
                                        <span><i className="material-icons">3</i></span>
                                        <span><i className="material-icons">4</i></span>
                                    </div>
                                </div>
                            </div>
                            <div className=" card-action action1">
                                <div className = "chip">
                                    Java
                                </div>
                                <div className = "chip">
                                    Maven
                                </div>
                                <div className = "chip">
                                    Spring Framework
                                </div>
            
                                <a href="#">Calendar</a>
                            </div>
            
                          </div>
                        </div>
                      </div>
                </div>
                
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card horizontal">
                          <div className="card-image">
                            <img src={logo} alt="RBC" height="180px"/>
                          </div>
                          <div className="card-stacked">

                            <div className="card-content">
                                <div className="row">
                                    <div className="col s8">
                                        
                                        <p className = "bold">Software Developer</p>
                                        <ul>
                                            <li>Reviewing current systems</li>
                                            <li>Working closely with analysts, designers and staff</li>
                                            <li>Presenting ideas for system improvements, including cost proposals</li>
                                        </ul>
            
                                    </div>
                                    <div className="col s4 progressBarDone">
                                        <div className="status">Offer Provided</div><br/>
                                        <span className=""><i className=" material-icons">check</i> 
                                            
                                        </span>
                                        <span><i className="material-icons">check</i></span>
                                        <span><i className="material-icons current">3</i></span>
                                        <span><i className="material-icons">4</i></span>
                                    </div>
                                </div>
                            </div>
                            <div className=" card-action action1">
                                <div className = "chip">
                                    Java
                                </div>
                                <div className = "chip">
                                    C++
                                </div>
                                <div className = "chip">
                                    Spring Framework
                                </div>
                                <div className = "chip">
                                    DevOps
                                </div>
                                <a href="#">Offer</a>
                            </div>
            
                          </div>
                        </div>
                      </div>
                </div>
            </div>           
        );
    }
};

export default Offers;

