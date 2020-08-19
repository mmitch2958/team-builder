import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import TeamMemberForm from './Form.js';


function App() {

  const teamMemberList =    {
    id: 1,
   name: 'mike mitchell',
   email: 'this@that.com',
   pass: 'pass',
  
}
  const [teamMember, setTeamMember] = useState();

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
          <TeamMemberForm setNewValue={setNewValue} />
          
          
           
        </p>
       
          Learn React
        
      </header>
    </div>
  );
}

export default App;
