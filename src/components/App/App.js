import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../MainPage';
import ContactUs from '../ContactUs';
import NoMatch from '../NoMatch';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/contact-us" component={ContactUs} exact />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
