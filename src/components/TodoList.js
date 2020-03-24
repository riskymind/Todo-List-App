import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">Todolist</h3>
            <TodoItem />
            <button className="btn btn-block btn-danger mt-5 text-capitalize">
                clear list
            </button>
        </ul>
    );
  }
}
