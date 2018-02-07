import React, { Component } from 'react';
import axios from 'axios';

class AddItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        itemName: ''
      }
    }

    handleItemNameChange = (e) => {
      this.setState({itemName: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.itemName + " submitted from form.");
      axios.post('/items/dashboard/inventory', {
        itemName: this.state.itemName,
        userId: this.props.user.id
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input name="itemName"
                  placeholder="Add an item..."
                  value={this.state.itemName}
                  onChange={this.handleItemNameChange} />
          <input type="submit" value="Add to Inventory" className="btn-primary" />
        </form>
      );
    }
  };

  export default AddItem;
