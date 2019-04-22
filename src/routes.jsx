// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import HomePage from './pages/HomePage/HomePage.jsx';
import Auth from './pages/Auth/Auth.jsx';

const CustomRoute = ({ component: Component, custom, ...rest }) => (
  <div>
    {!!custom && <Header />}
    <Route {...rest} render={props => (
      <Component {...props} />
    )} />
    {!!custom && <Footer />}
    </div>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
          <CustomRoute exact path="/" component={HomePage} custom={true} />
          <CustomRoute path="/auth" component={Auth} custom={false} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
