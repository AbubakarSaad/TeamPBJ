import React, { Component } from 'react';

import rookIcon from '../images/rookIcon.png';
import knight from '../images/knight2.png';
import kira from '../images/kira.jpg';
class StudentChallenges extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div>
                                    <div className="card-title">Assessment</div>
                                    <div className="divider"></div>
                                    {this.props.visible ? (<div className="fixed-action-btn horizontal" style={{position: 'absolute', display: 'inline-block', right: 19, top: 4}}>
                                 <span id ="currentRank"><img src={rookIcon} alt = "Assessment" height="56px"/></span>
                                </div>) : ''}
                                </div>
                                <div className="aboutme">
                                    <p>Technical : Level 3 - Rook</p>

                                    <div>
                                        <div className="card horizontal">
                                            <div className="card-image">

                                                    <img src={knight} alt="Challenge" height="115px"/>
                                            </div>
                                            <div className="card-stacked">

                                                <div className="card-content">
                                                    <div className="row progressBarDone">
                                                        <h6>The Knight's Revenge </h6>
                                                            
                                                                 <span><i className="material-icons">check</i></span>
                                                                 <span><i className="material-icons">check</i></span>
                                                                 <span><i className="gold material-icons">3</i></span>
                                                           
                                                    </div>
                                                </div>
                                            </div>
                                          
                                        </div>
                                    </div>
                                    <p>Behavioural Assessment</p>
                                   
                                    <div>
                                        <div className="card horizontal">
                                            <div className="card-image">
                                                    <img src={kira} alt="Challenge" height="115px"/>
                                            </div>
                                            <div className="card-stacked">

                                                <div className="card-content">
                                                    <div className="row progressBarDone">
                                                        <h6>Behavioural Interview </h6>
                                                            
                                                                 <span><i className="material-icons">check</i></span>
                                                                 
                                                           
                                                    </div>
                                                </div>
                                            </div>
                                          
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

export default StudentChallenges;
