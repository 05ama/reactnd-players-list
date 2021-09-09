import React, { Component } from 'react';

class FirstName extends Component {
  updateFirstName = event => {
    this.props.firstName(event.target.value)
  };
  render() {
    return (
        <div>
            <p className="first-name">First name:
              <input 
                className ={this.props.error}
                type = 'text'
                placeholder = 'Input your first name'
                onChange={this.updateFirstName}
                />
                
            </p>
        </div>
 
    );
  }
}

export default FirstName;
