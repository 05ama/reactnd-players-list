import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInputs from './UserInputs';


/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  buttontext = "Hide the Number of Games Played";
  HIDE = false;
state  = {
  players: [ ]
}
  updateCurrentUsers = (user)=>{
    this.state.players.push(user);
    this.setState(()=>({players:this.state.players}))
  }

toggle = ()=>{
  if (this.buttontext === "Hide the Number of Games Played")
  {
    this.buttontext = "Show the Number of Games Played"
    this.HIDE = true;
  }else{
    this.buttontext = "Hide the Number of Games Played"
    this.HIDE = false;
  }
  this.setState(()=>({players:this.state.players}))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserInputs currentUsers={this.state.players} updateCurrentUsers ={this.updateCurrentUsers}/>
        <div>
          <h2 className="submitted"> Submitted Players </h2>
        </div>
        <div>
          <ol className="users-list">
            {this.state.players.map(user=><li key={user.userName}>{this.HIDE?user.userName +" number of games played: */":user.userName + " number of games played: " + user.gamesPlayed}</li>)}
          </ol>
        </div>
        <div>
          <button className="toggle" onClick={this.toggle}>
                {this.buttontext}
              </button>
        </div>
      </div>
    );
  }
}

export default App;
