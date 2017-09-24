import React from 'react';
import angular from '../images/if_angular_1145600.png';
import nodejs from '../images/if_nodejs-512_339733.png';
import html5 from '../images/if_html5_294678.png';
import react from '../images/if_react_1296845.png';
import sql from '../images/if_Sql-runner_70664.png';

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
                                    <img src={angular} alt="Contact Person" />
                                    Angular
                                </div>
                                <div className="chip">
                                    <img src={nodejs} alt="nodejs"/> JavaScript
                                </div>
                                <div className="chip">
                                    <img src={html5} alt="nodejs"/> HTML
                                </div>

                                <div className="chip">
                                    <img src={sql} alt="nodejs"/> DataBase
                                </div>
                                <div className="chip">
                                    <img src={react} alt="nodejs"/> React 
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
