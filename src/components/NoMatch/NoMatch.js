import React, { Component } from 'react';
import './NoMatch.scss';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div className="noMatch">
        <h1>Pages Not Found</h1>
        <h2>Enter another path!!!</h2>
      </div>
    );
  }
}

export default NoMatch;
