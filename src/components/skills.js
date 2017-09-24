import React from 'react';
import angular from '../images/if_angular_1145600.png';
import nodejs from '../images/if_nodejs-512_339733.png';
import html5 from '../images/if_html5_294678.png';
import react from '../images/if_react_1296845.png';
import sql from '../images/if_Sql-runner_70664.png';
import security from '../images/security.png';

const skills = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Interests</h2>
                </div>
            </div>    
            <div className="row">
                <div className="col-md-12">
                    <h4> Technical </h4>
                </div>    
            </div>
            <div className="row">    
                <div className="col-md-2">
                    <h6> Angular </h6>
                    <img src={angular} style={{width:"25%"}} alt="nodejs" className="img-responsive"/>
                </div>
                <div className="col-md-2">
                     <h6> JavaScript</h6>
                    <img src={nodejs} style={{width:"25%"}} alt="nodejs" className="img-responsive"/>
                </div>
                <div className="col-md-2">
                     <h6> HTML </h6>
                    <img src={html5} style={{width:"25%"}} alt="nodejs" className="img-responsive"/>
                </div>

                <div className="col-md-2">
                     <h6> DataBase </h6>
                    <img src={sql} style={{width:"25%"}} alt="nodejs" className="img-responsive"/>
                </div>
                <div className="col-md-2">
                    <h6> Atom </h6>
                    <img src={react} style={{width:"25%"}} alt="nodejs" className="img-responsive"/>
                </div>
                <div className="col-md-2">
                    <h6> Security </h6>
                    <img src={security}  style={{width:"25%"}} alt="nodejs" className="img-responsive"/>
                </div>                
            </div>
            <div className="row" style={{marginTop:"3%"}}>
                <div className="col-md-12">
                    <h4>Interpersonal</h4>
                </div>
            </div>        
       </div>
    );
}

export default skills;
