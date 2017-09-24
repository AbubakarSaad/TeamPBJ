import React, { Component } from 'react';
import angular from '../images/if_angular_1145600.png';
import nodejs from '../images/if_nodejs-512_339733.png';
import html5 from '../images/if_html5_294678.png';
import react from '../images/if_react_1296845.png';
import sql from '../images/if_Sql-runner_70664.png';
import cooporation from '../images/communication.png';
import relationship from '../images/Presentation.png';
import teamwork from '../images/teamwork.png';

class skills extends Component {
    state = { showing: false };
    render() {
        const { showing } = this.state;
        return (
            <div className="studentnav">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div>
                                    <span className="card-title">Interests</span>
                                    <div className="divider"></div>
                                    <div className="fixed-action-btn horizontal" style={{position: 'absolute', display: 'inline-block', right: 19, top: 4}}>
                                        <a className="btn-floating btn-large blue">
                                        <i className="large material-icons">mode_edit</i>
                                        </a>
                                    </div>
                                </div>
                                <div className="chipWrapper">
                                    <div className="chip" onClick={() => this.setState({ showing: !showing})}>
                                        <img src={angular} alt="angular" />
                                        Angular
                                    </div>
                                    { showing ? <div className="card">
                                        <div className="card-content">
                                        <p>  I am interested in working with Angular JS as it makes the web development process much more efficient. I will be able to pick up this skill quickly and easily as I am well familiar and experinced with similar technologies such as HTML and React due to 
                                        a 8-month co-op position that I completed as a front end developer at company X in 2015.</p>
                                        </div>
                                        </div> : null }
                                    <div className="chip">
                                        <img src={nodejs} alt="nodejs"/> Node
                                    </div>
                                    <div className="chip">
                                        <img src={html5} alt="html5"/> HTML
                                    </div>

                                    <div className="chip">
                                        <img src={sql} alt="sql"/> DataBase
                                    </div>
                                    <div className="chip">
                                        <img src={react} alt="react"/> React 
                                    </div>
                                    <div className="chip">
                                        <img src={cooporation} alt="cooporation"/> Communication
                                    </div>
                                    <div className="chip">
                                        <img src={relationship} alt="relationship"/> Presentation
                                    </div>
                                    <div className="chip">
                                        <img src={teamwork} alt="teamwork"/> Teamwork
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

export default skills;
