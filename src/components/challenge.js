import React, { Component } from 'react';

class Challenge extends Component {

    render() {
        return (
            <div>
                <div className = "row bottomPad">
                    <div className="col m6 ">
                        <div className="challengeBox " id="challenge1"></div>
                    </div>
                    <div className="col m6">
                        <div className="challengeBox " id="challenge2"></div>
                    </div>
                </div>
                <div className = "row bottomPad">
                   <div className="col m6">
                        <div className="challengeBox " id="challenge3"></div>
                    </div>
                    <div className="col m6">
                        <div className="challengeBox " id="challenge4"></div>
                    </div>
                </div>
            
            </div>

        );
    }
};

export default Challenge;

