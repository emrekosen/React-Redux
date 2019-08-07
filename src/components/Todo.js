import React, { Component } from "react";
import { connect } from "react-redux";
import { finishTodoHandler, deleteTodoHandler } from "../actions";

class Todo extends Component {
  render() {
    const { body, id, isDone, onClickHandler, onClickDelete } = this.props;
    return (
      <li
        className={
          isDone
            ? "list-group-item list-group-item-success mt-2 d-flex justify-content-between align-items-center"
            : "list-group-item mt-2 d-flex justify-content-between align-items-center"
        }
        onClick={onClickHandler.bind(this, id)}
      >
        {isDone ? <strike>{body}</strike> : body}
        <i
          className="fas fa-trash-alt"
          onClick={onClickDelete.bind(this, id)}
        />
      </li>
    );
  }
}

const mapDispatchToProps = {
  onClickHandler: finishTodoHandler,
  onClickDelete: deleteTodoHandler
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
