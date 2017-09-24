import React from 'react';
import angular from '../images/if_angular_1145600.png';
import nodejs from '../images/if_nodejs-512_339733.png';
import html5 from '../images/if_html5_294678.png';
import react from '../images/if_react_1296845.png';
import sql from '../images/if_Sql-runner_70664.png';

const skills = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={angular} alt="nodejs" className="img-responsive"/>
            </div>
            <div className="col-md-2">
                <img src={nodejs} alt="nodejs" className="img-responsive"/>
            </div>
            <div className="col-md-2">
                <img src={html5} alt="nodejs" className="img-responsive"/>
            </div>
            <div className="col-md-2">
                <img src={react} alt="nodejs" className="img-responsive"/>
            </div>
            <div className="col-md-2">
                <img src={sql} alt="nodejs" className="img-responsive"/>
            </div>
        </div>
    );
}

export default skills;