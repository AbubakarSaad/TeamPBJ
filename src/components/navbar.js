import React, { Component } from 'react';


class Navbar extends Component {

    render() {
        return (
            <div className="col-3 flex-first flex-md-unordered bg-faded px-0">
                <nav className="nav flex-column">
                    <a className="nav-item nav-link" href="#">Dashboard</a>
                    <a className="nav-item nav-link" href="#">Users</a>
                    <a className="nav-item nav-link" href="#">Tasks</a>
                </nav>
            </div>
        );
    }
};

export default Navbar;

