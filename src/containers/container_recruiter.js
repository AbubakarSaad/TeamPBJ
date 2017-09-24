import React, { Component } from 'react';
import RecruiterView from '../components/component_RecruiterView';
import SearchBar from './container_recruiterSearchBar';
import SearchResults from './container_recruiterSearchResults';
import '../css/mainDan.css';
import NavBar from '../components/recruiterNavBar';
import { Route } from 'react-router-dom';
import candidatesPage from './container_CandidatePage';

class RecruiterPage extends Component{



  constructor(props){
    super(props);

    this.state = {
      results: []
    }

    this.updateResults = this.updateResults.bind(this);

  }

  updateResults(results){

    this.setState( { results} );

  }



  render(){
    const search = () => {
      return(
        <div>
        <h3>Talent Search</h3>
        <div className="row">
        <div className="form-group">
          <SearchBar update={this.updateResults}/>
        </div>
        </div>

        <div className="row">
          <SearchResults results={this.state.results}/>
        </div>
        </div>
      )
    }

    return(
      <div>
      <NavBar/>
      <RecruiterView>
      <Route exact path="/recruiter/" component={search} />
      <Route path="/recruiter/candidates" component={candidatesPage} />


      </RecruiterView>
      </div>
    );
  }
}

export default RecruiterPage;
