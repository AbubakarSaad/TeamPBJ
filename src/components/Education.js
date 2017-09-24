import React, { Component } from 'react';
import mcmasterlogo from '../images/mcmasterlogo.png';


class Education extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3> Education </h3>
                        <div className="row"> 
                            <div className="col-md-3 col">
                                <img className="img-responsive" style={{width:"50%"}} src={mcmasterlogo}/>
                            </div>
                            <div className="col-md-9" style={{marginLeft:"-14%"}}>    
                                <p>McMaster University<br />
                                Computer Science <br />
                                Class of 2019 </p>
                            </div>
                        </div>    
                    </div>
                 </div>            
            </div>
        );
    }
};

export default Education;

