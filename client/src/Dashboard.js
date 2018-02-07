import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dashbar from './dashboard/Dashbar.js';

import Borrowing from './dashboard/Borrowing.js';
import Inventory from './dashboard/Inventory.js';
import Lending from './dashboard/Lending.js';

import Welcome from './Welcome.js';

class Dashboard extends Component {
  render() {
    let page = <div></div>
    if (this.props.user && this.props.user.name) {
      page = (
        <div>
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
