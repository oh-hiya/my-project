// Libraries
import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap';

// Styles
import './Auth.scss';
import AuthWrapper from '../../components/Auth/AuthWrapper/AuthWrapper.jsx';
import InputText from '../../components/FormElements/InputText/InputText.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page" id="Auth">
        <Container>
          <Row className="justify-content-center">
            <AuthWrapper>
              <img className="logo" src="./img/logo.png" alt=""/>
              <span className="auth-name">Авторизация</span>
              <form>
                <InputText placeholder="Email" name="username" type="text" />
                <InputText placeholder="Password" name="password" type="password" />
              </form>
            </AuthWrapper>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Auth;
