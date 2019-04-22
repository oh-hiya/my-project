// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

// Styles
import './Auth.scss';
import AuthWrapper from '../../components/Auth/AuthWrapper/AuthWrapper.jsx';
import InputText from '../../components/FormElements/InputText/InputText.jsx';
import Button from '../../components/FormElements/Button/Button.jsx';
import VideoBackground from '../../components/VideoBackground/VideoBackground.jsx';

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
        <VideoBackground>
          <Container>
            <Row className="justify-content-center">
              <AuthWrapper>
                <img className="logo" src="./img/logo.png" alt=""/>
                <span className="auth-name">Авторизация</span>
                <form>
                  <InputText placeholder="Логин" name="username" type="text" autocomplete={"off"}  />
                  <InputText placeholder="Пароль" name="password" type="password" autocomplete={"off"} />
                  <Button label="Войти" />
                </form>
                <div className="sign-up-label">
                  Нет аккаунта? <Link to="/">Зарегистрироваться</Link>
                </div>
              </AuthWrapper>
            </Row>
          </Container>
        </VideoBackground>
      </div>
    );
  }
}

export default Auth;
