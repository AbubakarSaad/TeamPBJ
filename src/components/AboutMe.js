import React, { Component } from 'react';


class AboutMe extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div>
                                    <span className="card-title">About Me</span>
                                    <div className="divider"></div>
                                    <div className="fixed-action-btn horizontal" style={{position: 'absolute', display: 'inline-block', right: 19, top: 4}}>
                                    <a className="btn-floating btn-large blue">
                                    <i className="large material-icons">mode_edit</i>
                                    </a>
                                </div>
                                </div>
                                <div className="aboutme">
                                <p > I am a third year Computer Science student at McMaster with an interest in Artificial Intelligence and Machine Learning. I have completed a 4-month co-op work term in which developed programs in C# and Java. I am open to new opportunists and challenges to expand my knowledge and gain hands on experience.</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>     
            </div>           
        );
    }
};

export default AboutMe;

