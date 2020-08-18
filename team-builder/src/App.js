import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import form from './form'
import teamMemberList from '.list'

function App() {

  const [teamMember, setTeamMember] = useState(teamMembersList);
  const setValue = value => {
    setTeamMember([...teamMember, value]);
    console.log(teamMember)
  }

  const submit = value => {
    setTeamMember([...teamMember]);
    setIsEdit(false);
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           
        </p>
       
          Learn React
        
      </header>
    </div>
  );
}

export default App;
