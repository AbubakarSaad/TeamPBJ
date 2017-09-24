import React, { Component } from 'react';

class SearchResults extends Component{

  renderWork(work){
    return work.map((obj,index) => {
      return (
        <span>{obj.name} {work.length-1 === index ? "" : " | "} </span>
      )
    })
  }

  renderSkills(skills){
    return skills.map(obj => {
      return(
        <div className="chip">
          {obj.skill}
        </div>
      );
    })
  }

  renderResults(results){

    return results.map(obj => {
      return(
        <div className="card horizontal" key={obj.name}>
        <div className="card-image">
          <img alt="profile-img" height='100%' src="https://lorempixel.com/100/190/nature/6" />
        </div>
          <div className="card-stacked">
          <div className="card-content" style={{width: '100%'}}>
          <span className="card-title" >{obj.lastname}, {obj.firstname} <span className="score">445</span></span>
            <p>{obj.program} - {obj.school}</p>
            <p>{this.renderWork(obj.experience)}</p>
            <br />
            {this.renderSkills(obj.skills)}

          </div>

          <div className="card-action">
          <button className="btn btn-primary activator" style={{float: 'right'}}>Connect</button>
        </div>
          </div>



          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">x</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>



      </div>
      );
    })

  }

  render(){
    return(
      <div>
  {this.renderResults(this.props.results)}
      </div>
    )
  }
}

export default SearchResults;
