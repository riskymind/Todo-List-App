import React, { Component } from "react";

export class TodoInput extends Component {
  render() {
      const {item, handleChange, handleSubmit} = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" />
              </div>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-block btn-primary mt-3" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
