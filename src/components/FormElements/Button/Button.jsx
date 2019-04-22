// Libraries
import React, { Component } from 'react';

// Styles
import './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    const { label } = this.props;
    return (
      <button className="button-oh">{ label }</button>
    );
  }
}

export default Button;
