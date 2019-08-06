import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

var uniqid = require("uniqid");

class AddTodo extends Component {
  state = {
    todo: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // onClickAdd = e => {
  //   e.preventDefault();
  //   const { addTodo } = this.props;
  //   let todo = this.state.todo;
  //   if (todo.length > 0) {
  //     addTodo({ id: uniqid(), content: todo, isDone: false });
  //     this.setState({
  //       ...this.state,
  //       todo: ""
  //     });
  //   }
  // };

  render() {
    const { onClickAdd } = this.props;
    return (
      <div>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="todo"
              value={this.state.todo}
              onChange={this.changeHandler}
            />
            <button
              className="btn btn-primary w-100"
              onClick={onClickAdd.bind(this, this.state.todo)}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickAdd: (text, e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uniqid(), content: text, isDone: false }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
