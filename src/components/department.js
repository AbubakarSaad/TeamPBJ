import React, { Component } from 'react';

import we4 from '../images/we4.jpg';

import we2 from '../images/we2.jpg';

import we3 from '../images/we3.jpg';
import NavBar from '../components/recruiterNavBar';


class department extends Component {

    render() {
        return (
            <div >
                <NavBar />
                <div className="row">
                    <div className="col s12">
                        <h4> Department of Technology and Operations </h4>    
                        <br />
                        <h5> Function: </h5>
                    <p> An operations department is responsible for running your business successfully. It has the ultimate accountability for profit and loss, and seeks to maximize return on investment for the shareholders. The members of this department are ultimately responsible for the success of your business, and as such, maintain considerable power in your company. While the operations department is responsible for the bottom line, it also oversees the other departments in your organization, as well as the development of your employees and customers. </p>
                    
                    <br />
                    <h5> Work Environment: </h5>
                    <p> T&O department at RBC had a open skeptic, no wall, environment.People enjoy coming to work and feel appreciated, acknowledged and rewarded. Signs of fear, domination, bullying, sexual harassment and intimidation are absent. Creativity, productivity and thinking outside the box flourish.Everyone communicates in a cards-on-the-table manner, solving difficulties in a positive way. They don’t play nasty revenge games when given difficult feedback. Instead, they view feedback as an opportunity for growth.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <img src={we4} />
                    </div> 
                
                   <div className="col s6">
                        <img src={we3} style={{width:"50%"}} />
                    </div>                         
                </div>   


        </div>
        
        );
    }
};

export default department;

