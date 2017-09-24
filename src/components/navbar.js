import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import blue from '../images/blue.png';
import check from '../images/if_sign-check_299110.png';
import score from '../images/score.png';


class Navbar extends Component {

    render() {


        return (
            <div>
            <ul id="slide-out" className="side-nav fixed">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={blue} alt="office"/>
                        </div>
                        <div className="row">
                            <div className="col s4">
                                <a href="#"><img className="circle" src={avatar} alt="person"/></a>
                            </div>
                            <div className="col s8">
                                <a href="#!name"><span className="white-text name">Jane Smith</span></a>
                                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                                <div>
                                <div className="chip chipstatus2" >
                                    <img src={check} alt="check"/> Available
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li><a href="/"><i className="material-icons">android</i>Profile</a></li>
                <li><a href="/student/offers"><i className="material-icons">assignment_ind</i>Applications</a></li>
                <li><a href="/student/challenges"><i className="material-icons">school</i>Challenges</a></li>

                <li><a href="/department"><i className="material-icons">domain</i>Departments</a></li>
                <div className="scoreblock valign-wrapper valign center-block">
                    <div className="row">
                        <img src={score} alt="score" />
                        <p className="center scoretext"><b>Score</b></p>
                    </div>
                </div>
            </ul>

            </div>

        );
    }
};

export default Navbar;
