// Libraries
import React, {Component} from 'react';

// Styles
import './InputText.scss';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  componentDidMount() {}

  render() {
    const {placeholder, name, type} = this.props;
    const {showPassword} = this.state;
    return (<div className="input-text">
      <input type={!!showPassword ? 'text' : type} name={name} id={name} required="required"/>
      <label htmlFor={name}>{placeholder}</label>
      <div className="line"></div>
      {
        type === 'password' && (
          showPassword
          ? <i className="fa fa-eye-slash" aria-hidden="true" onClick={this.showPassword}></i>
          : <i className="fa fa-eye" aria-hidden="true" onClick={this.showPassword}></i>)
      }
    </div>);
  }
}

export default InputText;
