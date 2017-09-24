import React from 'react';
import avatar from '../images/avatar.png';
import score from '../images/score.png';
import check from '../images/if_sign-check_299110.png';

const profile = () => {
  return (
    <div>
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                    <div className="row">
                        <div className="col s4">
                          <img className="circle" src={avatar} alt="person" width="100%"/>
                        </div>
                        <div className="col s6">
                        <div className="profile">
                        <div className="profileBody">
                        <h4>Jane Doe</h4>
                        <h4>jdandturk@gmail.com</h4>


                        </div>
                        <div className="chip chipstatus">
                            <img src={check} alt="check"/> Available
                        </div>
                        <hr />
                        <div className="profileText">
                        <br />
                        <p > I am a third year Computer Science student at McMaster with an interest in Artificial Intelligence and Machine Learning. I have completed a 4-month co-op work term in which developed programs in C# and Java. I am open to new opportunists and challenges to expand my knowledge and gain hands on experience.</p>
                        </div>
                        </div>
                        </div>
                        <div className="col s2">

                                <img src={score} alt="score" width="100%"/>

                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default profile;
