import './Team.scss';
import React from 'react';
const Team = React.forwardRef((props, ref) => {
  return (
    <div className="teamhai" ref={ref}>
    <section className='leaderteam'>
    <span>Meet our</span>
    <h2>Leaders</h2>
    <p>Leadership is not about being in charge. It is about taking care of those in your charge -- Simon Sinek</p>
    
    <div className="cards">
      <div className="card">
        <img src="teamtwo.jpeg" alt="Bhupinder"/>
        <div className="card-content">
          <h3>Bhupinder Singh Salaria</h3>
          <p>Head of Department</p>
          
        </div>
      </div>
      <div className="card">
        <img src="teamthree.jpeg" alt="Mitali"/>
        <div className="card-content">
          <h3>Mitali Rajput</h3>
          <p>Designer & Developer</p>
         
        </div>
      </div>
      <div className="card">
        <img src="teamone.jpeg" alt="Sushma"/>
        <div className="card-content">
          <h3>Sushma Rani</h3>
          <p>Examination Head</p>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  );
});
Team.displayName = 'Team';
export default Team;

