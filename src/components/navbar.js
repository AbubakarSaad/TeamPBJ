import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import darkblue from '../images/alittledarkblue.png';



class Navbar extends Component {

    render() {
        return (
            <div>
            <ul id="slide-out" className="side-nav fixed">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={darkblue} alt="office"/>
                        </div>
                        <div className="row">
                            <div className="col s4">
                                <a href="#"><img className="circle" src={avatar} alt="person"/></a>
                            </div>
                            <div className="col s6">
                                <a href="#!name"><span className="white-text name">John Doe</span></a>
                                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>Techncail</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>About Me</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>Education</a></li>
            </ul>

            </div>
        
        );
    }
};

export default Navbar;

