import React, { Component } from 'react';

const Team = ({ team }) => {
  return (
    <div className="App">
      { team.name }
    </div>
  );
};

export default Team;