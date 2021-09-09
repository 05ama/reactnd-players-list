import React, { Component } from 'react';


class LastName extends Component {

  updateLastName = event => {
    this.props.lastName(event.target.value)
  };

  render() {
    return (
        <div>
            <p className="last-name">Last name:
              <input
                className ={this.props.error} 
                type = 'text'
                placeholder = 'Input your last name'
                onChange={this.updateLastName}
                />
            </p>
        </div>
 
    );
  }
}

export default LastName;
