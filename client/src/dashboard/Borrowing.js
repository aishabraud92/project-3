import React, { Component } from 'react';
import { AddItem } from '../../actions/index';



class isBorrowed extends Component {
  constructor() {
    super();
    this.state = {
      item: {
        name: '',
        description: '',

      },

    };
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onFieldChanged(event) {
    const { item } = this.state;
    item[event.target.name] = event.target.value;
    this.setState({ item });
  }

  addItem(event) {
    event.preventDefault();
    const { item } = this.state;
    this.props.isBorrowed(item);
  }


  render() {
    const isBorrowed = this.props;
    return (
        <div className="header">
          <button type="button" className="close" name="Borrowing" onClick={onHide}>×</button>
          <h3 id="AddItem">Add Item</h3>
        </div>
        <div className="body">
          <form onSubmit={this.isBorrowed}>
            <div className="form-group">
              <label="addNameInput">Name</label>
              <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={this.onFieldChanged} />
            </div>
            <div className="form-group">
              <label htmlFor="addDescriptionInput">Description</label>
              <input type="text" className="form-control" name="description" placeholder="Enter description" onChange={this.onFieldChanged} />
            </div>
            </ul>
            <button type="submit" className="btn btn-default" onChange={this.isBorrowed}>Add</button>
            <span> { error } </span>
          </form>
        </div>
    );
  }
}


export default Borrowing;
