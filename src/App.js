import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueIndex from "./components/LeagueIndex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeagueIndex />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Basic Soccer App
        </p>
      </header>
    </div>
  );
}

export default App;
