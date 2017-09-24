import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import pawn from '../images/pawn.png';
import knight from '../images/knight.png';
import rook from '../images/rook.png';
import rookIcon from '../images/rookIcon.png';

class ChallengePage extends Component {
    handleClick = () => {
        this.props.history.push('/challenges');
    };


    render() {
        return (
            <div className="container challengePage  middleLine">
                <div className="row">
                    <div className="topBar">
                        <div className="col s3" onClick={this.handleClick}><i className="material-icons">arrow_back</i></div>
                        <div className="col s3 offset-s6">
                    </div>
                            <div className="chip right">
                                <img src={rookIcon} alt="Current Rank" width="20px"/>
                                Current Rank
                            </div>
                        </div>
                    
                    <div className = "col s12 ">
                        <h4> Challenges - JAVA </h4>
                    </div>
                    <div className="col s12">
                      <div className="card">
                        <div className="card-image" >
                            <img className = "activator" src={pawn} alt="pawn"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons"></i></a>
                        </div>
                        <div className="card-content">
                            <h6>The Pawn's Beginning</h6>
                            <div className="progressBar">
                                <span><i className="material-icons">check</i></span>
                                <span><i className="material-icons">check</i></span>
                                <span><i className="material-icons">check</i></span>
                            </div>
            
                        </div>
            
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>hello.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                <br/><br/><br/>
            
                <div className="row">
                    <div className="col s12">
                      <div className="card">
                        <div className="card-image" >
                            <img className = "activator" src={knight} alt="knight"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light red activator"><i className="material-icons"></i></a>
                        </div>
                        <div className="card-content">
                            <h6>The Knight's Revenge</h6>
                           <div className="progressBar">
                                <span><i className="material-icons">check</i></span>
                                <span><i className="material-icons">check</i></span>
                                <span><i className="material-icons greenColor">3</i></span>
                            </div>
                        </div>
            
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>hello.</p>

                        </div>
                      </div>
                    </div>
                  </div>
            <br/><br/><br/>
            
                <div className="row">
                    <div className="col s12">
                      <div className="card">
                        <div className="card-image" >
                            <img className = "" src={rook} alt="rook"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a>
                        </div>
                        <div className="card-content">
                            <h6>The Master Rook</h6>
                           <div className="progressBar">
                                <span><i className="material-icons lock">lock</i></span>
                                <span><i className="material-icons lock ">lock</i></span>
                                <span><i className="material-icons lock">lock</i></span>
                            </div>
                        </div>
            
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>hello.</p>

                        </div>
                      </div>
                    </div>
                  </div>
            
            </div>

        );
    }
};

export default withRouter(ChallengePage);

