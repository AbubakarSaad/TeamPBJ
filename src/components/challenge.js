import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Challenge extends Component {

    handleClick = () => {
        this.props.history.push('/challenges/challenge');
    };

    render() {
        return (
            <div className ="studentnav">
                <div className = "row bottomPad">
                    <div className="col s12 m6">
                        <div className="challengeBox " id="challenge1"></div>
                    </div>
                    <div className="col s12 m6">
                        <div className="challengeBox " id="challenge2" onClick={this.handleClick}></div>
                    </div>
                </div>
                <div className = "row bottomPad">
                   <div className="col s12 m6">
                        <div className="challengeBox " id="challenge3"></div>
                    </div>
                    <div className="col s12 m6">
                        <div className="challengeBox " id="challenge4"></div>
                    </div>
                </div>
            
            </div>

        );
    }
};

export default withRouter(Challenge);

