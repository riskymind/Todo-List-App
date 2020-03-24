import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h5>{title}</h5>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fa fa-edit"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fa fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
