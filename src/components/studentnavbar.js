import React, { Component } from 'react';
class StudentNavbar extends Component {
    
    render() {
        return (
            <nav className="navbar-fixed studentnav">
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Logout</a></li>
                </ul>
                </div>
            </nav>

        );
    }
};
    
export default StudentNavbar;