import React, { Component } from 'react';
import RecruiterView from '../components/component_RecruiterView';
import SearchBar from './container_recruiterSearchBar';
import SearchResults from './container_recruiterSearchResults';
import '../css/mainDan.css';
import NavBar from '../components/recruiterNavBar';
import { Route } from 'react-router-dom';
import candidatesPage from './container_CandidatePage';
import recruiterStudentView from './container_recruiterStudentView';

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
        <div className="row">
        <div className="col s10">
        <h4>Talent Search</h4>
        <div className="row">
        <div className="col s12">
          <SearchBar update={this.updateResults}/>
        </div>
        </div>

        <div className="row">
          <div className="col s12">
          <SearchResults results={this.state.results}/>
          </div>
        </div>
        </div>

        <div className="col s2">

        <h5>Talent Feed</h5>

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
      <Route path="/recruiter/student" component={recruiterStudentView} />


      </RecruiterView>
      </div>
    );
  }
}

export default RecruiterPage;
