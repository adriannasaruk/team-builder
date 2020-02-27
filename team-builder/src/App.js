import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Map from "./Map"



function App() {

  const [teamMember, setTeamMember] = useState([{
    name:" Adrian ",
    email: " adriannasaruk@gmail.com ",
    role: " Pilot "
  }
]);

 const addNewTeam = member => {
    const newMember = {
      name : member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember ([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>MyTeam</h1>
      <Form addNewTeam ={addNewTeam} />
      <Map teamMember ={teamMember} />
    </div>
  );
}

export default App;
