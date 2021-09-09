import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const players = {
  users: [
    {"firstName": "Osama",
     "lastNAme": "Mohsen",
     "userName": "OM",
     "gamesPlayed":0},
     {"firstName": "Nada",
     "lastNAme": "Emad",
     "userName": "NE",
     "gamesPlayed":0},
     {"firstName": "Aysel",
     "lastNAme": "Osama",
     "userName": "AO",
     "gamesPlayed":1}
  ]
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div>
            <p className="first-name">First name:
              <input 
                type = 'text'
                placeholder = 'Input your first name'/>
            </p>
        </div>
        <div>
            <p className="last-name">Last name:
              <input 
                type = 'text'
                placeholder = 'Input your last name'/>
            </p>
        </div>
        <div>
            <p className="user-name">User name:
              <input 
                type = 'text'
                placeholder = 'Input your user name'/>
            </p>
        </div>
        <div>
          <button className="submit">
                  Submit
              </button>
        </div>
        <div>
          <h2 className="submitted"> Submitted Players </h2>
        </div>
        <div>
          <ol className="users-list">
            {players.users.map(user=><li key={user.userName}>{user.userName + " number of games played: " + user.gamesPlayed}</li>)}
          </ol>
        </div>
        <div>
          <button className="toggle">
                Hide the Number of Games Played
              </button>
        </div>
      </div>
    );
  }
}

export default App;
