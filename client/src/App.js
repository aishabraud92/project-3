import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// import welcome page, root, renders if not logged in, redirects to Dashboard if logged in
import Welcome from './Welcome.js';

// import layout
import Flash from './layout/Flash.js';
import Footer from './layout/Footer.js';
import Nav from './layout/Nav.js';

// import auth
import Login from './auth/Login.js';
import Signup from './auth/Signup.js';

import Dashboard from './Dashboard.js';
// import dashboard
import Borrowing from './dashboard/Borrowing.js';
import Inventory from './dashboard/Inventory.js';
import Lending from './dashboard/Lending.js';
import Needed from './dashboard/Needed.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    // If there is a token in localStorage
    let token = localStorage.getItem('mernToken');
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      });
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token);
        this.setState({
          token: response.data.token,
          user: response.data.user
        });
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log('cdm', err);
        this.setState({
          token: '',
          user: null
        });
      })
    }
  }

  setFlash = (t, msg) => {
    this.setState({
      flash: msg,
      flashType: t
    });
  }

  cancelFlash = () => {
    this.setState({
      flash: '',
      flashType: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav user={this.state.user} updateUser={this.getUser} />
            <div className="space">
              <Flash flashType={this.state.flashType} flash={this.state.flash} setFlash={this.setFlash} cancelFlash={this.cancelFlash} />
              <Route path="/" component={
                () => (<Welcome user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/dashboard" component={
                () => (<Dashboard user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/dashboard/borrowing" component={
                () => (<Borrowing user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/dashboard/inventory" component={
                () => (<Inventory user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/dashboard/lending" component={
                () => (<Lending user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/needed" component={
                () => (<Needed user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/login" component={
                () => (<Login user={this.state.user} setFlash={this.setFlash} updateUser={this.getUser} />)} />
              <Route path="/signup" component={
                () => (<Signup user={this.state.user} setFlash={this.setFlash} updateUser={this.getUser} />)} />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
};

export default App;
