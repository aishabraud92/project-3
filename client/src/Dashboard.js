import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> 64d4c984a080f4e32cb254ae3c5d4a950e67d6d0

import Dashbar from './dashboard/Dashbar.js';

import Borrowing from './dashboard/Borrowing.js';
<<<<<<< HEAD
=======

>>>>>>> 64d4c984a080f4e32cb254ae3c5d4a950e67d6d0
import Inventory from './dashboard/Inventory.js';
import Lending from './dashboard/Lending.js';

import Welcome from './Welcome.js';

class Dashboard extends Component {
  render() {
    let page = <div></div>
    if (this.props.user && this.props.user.name) {
      page = (
        <div>
<<<<<<< HEAD
=======

          <header className="App-header">
            <Link to="/lending"> Lending </Link>
            <Link to="/inventory"> Inventory </Link>
            <Link to="/borrowing"> Borrowing </Link>
          </header>
          <Inventory />
          <Needed />

>>>>>>> 64d4c984a080f4e32cb254ae3c5d4a950e67d6d0
          <Dashbar />
          <div>
            <Link to="/needed">Needed</Link>
            <div>
              <Inventory user={this.props.user} />
              <div>
                <Lending />
                <Borrowing />
              </div>
            </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> 64d4c984a080f4e32cb254ae3c5d4a950e67d6d0
        </div>
      );
    }
    else {
      page = <Welcome />
    }
    return (
      <div>
        {page}
      </div>
    );
  }
};

export default Dashboard;
