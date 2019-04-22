// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

// Styles
import './Registration.scss';
import AuthWrapper from '../../components/Auth/AuthWrapper/AuthWrapper.jsx';
import InputText from '../../components/FormElements/InputText/InputText.jsx';
import Button from '../../components/FormElements/Button/Button.jsx';
import VideoBackground from '../../components/VideoBackground/VideoBackground.jsx';

class Registration extends Component {
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
                <span className="auth-name">Регистрация</span>
                <form>
                  <InputText placeholder="Имя" name="username" type="text" autocomplete={"off"}  />
                  <InputText placeholder="Логин" name="username" type="text" autocomplete={"off"}  />
                  <InputText placeholder="Пароль" name="password" type="password" autocomplete={"off"} />
                  <InputText placeholder="Повторите пароль" name="password" type="password" autocomplete={"off"} />
                  <Button label="Зарегистрироваться" />
                </form>
                <div className="sign-up-label">
                  Уже есть аккаунт? <Link to="/auth">Войти</Link>
                </div>
              </AuthWrapper>
            </Row>
          </Container>
        </VideoBackground>
      </div>
    );
  }
}

export default Registration;
