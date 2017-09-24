import React from 'react';
import angular from '../images/if_angular_1145600.png';
import nodejs from '../images/if_nodejs-512_339733.png';
import html5 from '../images/if_html5_294678.png';
import react from '../images/if_react_1296845.png';
import sql from '../images/if_Sql-runner_70664.png';
import cooporation from '../images/communication.png';
import relationship from '../images/Presentation.png';
import teamwork from '../images/teamwork.png';

const skills = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Interests</span>
                            <div className="divider"></div>
                            <div className="chipWrapper">
                                <div className="chip">
                                    <img src={angular} alt="angular" />
                                    Angular
                                </div>
                                <div className="chip">
                                    <img src={nodejs} alt="nodejs"/> JavaScript
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

export default skills;
