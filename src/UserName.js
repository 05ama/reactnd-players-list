import React, { Component } from 'react';


class UserName extends Component {

  updateUserName = event => {
    this.props.userName(event.target.value)
  };

  render() {
    return (
        <div>
            <p className="user-name"> User name:
              <input 
                className ={this.props.error}
                type = 'text'
                placeholder = 'Input your user name'
                onChange={this.updateUserName}/>
            </p>
        </div>
 
    );
  }
}

export default UserName;
