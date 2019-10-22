import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueIndex from "./components/LeagueIndex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Basic Soccer App</p>
        <img src={logo} className="App-logo" alt="logo" />
        <LeagueIndex />
      </header>
    </div>
  );
}

export default App;
