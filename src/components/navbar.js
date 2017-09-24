import React, { Component } from 'react';



class Navbar extends Component {

    render() {
        return (
            <div>
            <ul id="slide-out" className="side-nav fixed">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="../images/if_angular_1145600.jpg" alt="office"/>
                        </div>
                        <a href="#"><img className="circle" src="../images/if_Sql-runner_70664.jpg" alt="person"/></a>
                        <a href="#!name"><span className="white-text name">John Doe</span></a>
                        <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        
        );
    }
};

export default Navbar;

