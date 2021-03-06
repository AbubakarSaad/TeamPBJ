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
          <img alt="profile-img" height="100px" style={{ 'margin-top': '50px', 'padding-left':'10px' }}  src={obj.image} />
        </div>
          <div className="card-stacked">
          <div className="card-content" style={{width: '100%'}}>
          <span className="card-title" ><a href="/recruiter/student">{obj.lastname}, {obj.firstname}</a> <span className="score">{obj.score}</span></span>
            <p>{obj.program} - {obj.school}</p>
            <p>{this.renderWork(obj.experience)}</p>
            <br />


          </div>

          <div className="card-action">
          {this.renderSkills(obj.skills)}
          <button className="btn btn-primary activator" style={{float: 'right'}}>Connect</button>
        </div>
          </div>



          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Request Initial Interview<i className="material-icons right">close</i></span>
            <form>
            <input name="id" value={obj.id} style={{ display: 'none' }} readOnly/>
            <div className="row">

             <div className="col s6 input-field">

              <input type="text" id="url" name="url"/>
              <label htmlFor="url">Job URL</label>
              </div>


              <div className="col s6 input-field">
              <input type="text" id="team" name="team"/>
              <label htmlFor="team">Department/Team</label>


             </div>



            </div>

            <button className="btn btn-primary score" onClick={e=> {e.preventDefault()}}>Submit</button>
            </form>

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
