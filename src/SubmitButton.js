import React, { Component } from 'react';


class Submit extends Component {

  render() {
    return (
      <div>
      <button className="submit" disabled={this.props.submit} onClick={this.props.submitClick}>
              Submit
          </button>
    </div>
 
    );
  }
}

export default Submit;
