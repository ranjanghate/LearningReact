import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1> Class Component for {this.props.name} aka {this.props.heroName} </h1>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome;
