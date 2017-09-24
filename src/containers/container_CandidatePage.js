import React, { Component } from 'react';
import statusData from '../data/studentStatus';

class candidatePage extends Component {

  constructor(props){
    super(props);

    this.state = { search: '' }
  }

  renderCandidates(){

    return statusData.map(obj => {

      if(obj.lastname.toLowerCase().includes(this.state.search) || obj.firstname.toLowerCase().includes(this.state.search) || obj.position.toLowerCase().includes(this.state.search) || obj.team.toLowerCase().includes(this.state.search) || obj.phone.toLowerCase().includes(this.state.search)
    || obj.onsite.toLowerCase().includes(this.state.search) || obj.offer.toLowerCase().includes(this.state.search)){
        return(
          <tr>
            <td>{obj.lastname}, {obj.firstname}</td>
            <td>{obj.position}</td>
            <td>{obj.team}</td>
            <td>{obj.phone}</td>
            <td>{obj.onsite === "Request"? (<a href="#" className="btn">{obj.onsite}</a>) : obj.onsite}</td>
            <td>{obj.offer === "Send"? (<a href="#" className="btn">{obj.offer}</a>) : obj.offer}</td>
            <td><button className="btn-flat">X</button></td>
          </tr>

        );
      }else{
        return null;
      }

    })

  }

  render(){
  return(
    <div>
    <h3>Candidate Follow Up</h3>
    <div className="row">
    <div className="col s12 input-field">
    <input id="candidateSearch" type="text" onChange={e=>{ this.setState({ search: e.target.value.toLowerCase() }) }}/>
    <label htmlFor="candidateSearch" >Search</label>
    </div>
    </div>
    <table className="responsive-table bordered centered">
        <thead>
          <tr>
              <th>Full Name</th>
              <th>Position</th>
              <th>Team</th>
              <th>Phone Interview</th>
              <th>OnSite Interview</th>
              <th>Offer</th>
              <th>Rejection</th>
          </tr>
        </thead>

        <tbody>

          {this.renderCandidates()}
        </tbody>
      </table>
    </div>
  )
}
}

export default candidatePage;
