import React, { Component } from 'react';
import maclogo from '../images/mcmaster_logo2.png';


class Education extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div>
                                    <span className="card-title">Education</span>
                                    <div className="divider"></div>
                                    <div className="fixed-action-btn horizontal" style={{position: 'absolute', display: 'inline-block', right: 19, top: 4}}>
                                    <a className="btn-floating btn-large blue">
                                    <i className="large material-icons">mode_edit</i>
                                    </a>
                                </div>
                                </div>
                                <div className="row education">
                                    <div className="col s3">
                                        <img src={maclogo} alt="mcmaster" />
                                    </div>
                                    <div className="col s9">  
                                        <div className="edumac">  
                                            <p>McMaster University</p>
                                            <p>Computer Science</p>
                                            <p>Class of 2019 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>   
            </div>             
        );
    }
};

export default Education;

