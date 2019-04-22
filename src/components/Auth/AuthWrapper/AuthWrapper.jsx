// Libraries
import React, { Component } from 'react';

// Styles
import './AuthWrapper.scss';

class AuthWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    const { children } = this.props;
    return (
      <div id="AuthWrapper">
        <div className="auth-inner">
          { children }
        </div>
      </div>
    );
  }
}

export default AuthWrapper;
