import React, { Component } from 'react';

import pawn from '../images/introduction.png';


class ChallengePage extends Component {

    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col s12 m12">
                      <div class="card small">
                        <div class="card-image" >
                          <img src={pawn} alt="pawn"/>
                          <span class="card-title">Card Title</span>
                          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                          <p>ly.</p>
                        </div>
                      </div>
                    </div>
                  </div>
            
            </div>

        );
    }
};

export default ChallengePage;

