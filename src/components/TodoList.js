import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todolist</h3>
        {items.map(item => {
          return <TodoItem key={item.id} title={item.title} />;
        })}
        <button
          className="btn btn-block btn-danger mt-5 text-capitalize"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
