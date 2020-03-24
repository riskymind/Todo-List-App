import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import * as uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid.v4(),
    item: "",
    editItem: ""
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.item === "") {
      return;
    } else {
      const newItem = {
        id: this.state.id,
        title: this.state.item
      };

      const updatedItem = [...this.state.items, newItem];
      this.setState({
        items: updatedItem,
        item: "",
        id: uuid.v4(),
        editItem: false
      });
    }
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItem
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
