import React, { Component } from 'react';
import RecruiterView from '../components/component_RecruiterView';
import SearchBar from './container_recruiterSearchBar';
import SearchResults from './container_recruiterSearchResults';
import '../css/mainDan.css';

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
    return(
      <div>

      <RecruiterView>
        <h3 className="display-4">Recruiter Page</h3>
        <div className="row">
        <div className="form-group">
          <SearchBar update={this.updateResults}/>
        </div>
        </div>

        <div className="row">
          <SearchResults results={this.state.results}/>
        </div>

      </RecruiterView>
      </div>
    );
  }
}

export default RecruiterPage;
