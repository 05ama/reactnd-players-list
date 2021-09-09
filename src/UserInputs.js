import React, { Component } from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import UserName from './UserName';
import Submit from './SubmitButton';

class UserInputs extends Component {

  user =""
  firstNameError = "";
  lastNameError = "";
  userNameError = "";
  submit =true;
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    gamesPlayed:0
  }

  submitClick = ()=>{
    this.props.updateCurrentUsers(this.state);
  }

  updateFirstName = (name)=>{
    this.setState(()=>({firstName: name}))
  }

  updateLastName = (name)=>{
    this.setState(()=>({lastName: name}))
  }

  updateUserName = (name)=>{
    this.setState(()=>({userName: name}));
    this.user = name;
  }

  render() {
    let U = this.props.currentUsers.filter( user => user.userName === (this.user))
    if(U.length > 0)
    {
      this.firstNameError = "error";
      this.lastNameError = "error";
      this.userNameError = "error";
      this.submit =true;
    }else if(this.state.firstName === "" || this.state.lastName === "" ){
      this.firstNameError = "";
      this.lastNameError = "";
      this.userNameError = ""
      this.submit =true;
    }else if(this.user === "" ){
      this.firstNameError = "";
      this.lastNameError = "";
      this.userNameError = "error";
      this.submit =true;
    }else{
      this.firstNameError = "";
      this.lastNameError = "";
      this.userNameError = "";
      this.submit =false;
    }
    
    return (
      <div>
        <FirstName firstName = {this.updateFirstName} error = {this.firstNameError}/>
        <LastName  lastName = {this.updateLastName} error = {this.lastNameError}/>
        <UserName  userName = {this.updateUserName} error = {this.userNameError}/>
        <Submit submit ={this.submit} submitClick={this.submitClick}/>
      </div>
    );
  }
}

export default UserInputs;
