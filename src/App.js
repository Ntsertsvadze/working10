import React from 'react';
import './App.css';
import profilePic from './unnamed.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hello! Welcome to My  page.</h1>
        <p>
          I am a traveling lion.
        </p>
        <a href='#'>more</a>
      </header>
    </div>
  );
}

export default App;

