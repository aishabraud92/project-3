import React, { Component } from 'react';
import Lending from './lending';
import Borrowing from './borrowing'

class All extends Component {
  componentWillMount() {
      if (this.props.user) {
        this.props.GetAllItems();
      }
    }

    render() {
      const { User, items } = this.props;
      if (!user) {
        return (
          <div> Welcome </div>
        );
      }
      return (
        <div className="main-component">
          <div className="container">
            <form className="form-inline">
              <label htmlFor="title" className="control-label">
                <h4>Available</h4></label>
              <input type="text" className="form-control input-sm pull-right" placeholder="Search" />
            </form>
            <div className="row">
              { lendList && isLending.length > 0 && lending.map(item =>
                (<div key={`lending-${item.id}`} className="col-xs-12 col-sm-6 col-md-4">
                    </div>
                      </div>
                    </a>
                  </div>
                </div>))}
                </div>
            <hr />
              <form className="form-inline">
                <label htmlFor="title" className="control-label">
                  <h4>Lending</h4></label>
                <input type="text" className="form-control input-sm pull-right" placeholder="Search" />
              </form>
            <div className="row">
          { borrowList && isBorrowing.length > 0 && isBorrowing.map(item =>
      (<div key={`Items-${item.id}`} className="col-xs-12 col-sm-6 col-md-4">
        <div>
          <li className="pull-right">
            <ul className="list-inline text-center">
              <li>
                <ul className="list-unstyled">
                  </ul>
                    </li>
                      </ul>
                        </li>
                          </ul>
                          <div className="text-center">
                            </div>
                              </div>
                            </a>
                          </div>))}

                        </div>
                      </div>
                    );
                  }
                }




export default All;
