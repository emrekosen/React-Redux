import React, { Component } from "react";
import { connect } from "react-redux";
import { setTodo } from "../actions";

class Todo extends Component {
  render() {
    const { body, isDone, onClickDelete } = this.props;
    return (
      <div className="list-group-item">
        <li onClick={onClickDelete}>
          {isDone ? <strike>{body}</strike> : body}
        </li>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickDelete: () => {
      dispatch(setTodo(ownProps.id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
