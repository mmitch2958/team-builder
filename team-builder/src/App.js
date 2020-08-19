import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from './Form.js';
import teamMemberList from './list.js';

function App() {

  const [teamMember, setTeamMember] = useState(teamMembersList);

  const setNewValue = value => {
    const newMember = {
      id: Date.now,
      name: value.name,
      email: value.email,
      pass: value.pass,
    }
    setTeamMember([...teamMember, newMember]);
  }

  // const submit = value => {
  //   setTeamMember([...teamMember]);
  //   setIsEdit(false);
  // }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <teamMemberForm setNewValue={setNewValue}/>
          <TeamMember teamMember={teamMember} />
          <Team value ={teamMember}/>
           
        </p>
       
          Learn React
        
      </header>
    </div>
  );
}

export default App;
