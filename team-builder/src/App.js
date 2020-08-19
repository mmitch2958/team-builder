import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import TeamMemberForm from './Form.js';


function App() {

   
  const [teamMember, setTeamMember] = useState([
    {
    id: 1,
   name: 'mike mitchell',
   email: 'this@that.com',
   pass: 'pass',
    }
  ]);

  const setNewValue = value => {
    const newMember = {
      id: Date.now(),
      name: value.name,
      email: value.email,
      pass: value.pass,
    }
    setTeamMember([...teamMember, newMember]);
  }

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TeamMemberForm setNewValue={setNewValue} />       
           {/* <teamMemberList /> */}
        </p>
       <div>
          {teamMember.map(member=> {
              return (
            <div key = {member.id}> 
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.pass}</p>
            </div>
          
              )
          })
          
          }
          
       </div>
          Learn React
        
      </header>
    </div>
  );
}

export default App;
