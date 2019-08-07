import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodoHandler } from "../actions";

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

  onClickAdd = (data, e) => {
    const { onClickHandler } = this.props;
    e.preventDefault();
    if (data.content.length > 0) {
      onClickHandler(data);
      this.setState({
        ...this.state,
        todo: ""
      });
    }
  };

  render() {
    return (
      <div>
        <form className="form-inline justify-content-center">
          <div className="form-group mt-3 mb-2">
            <input
              type="text"
              className="form-control mr-2"
              name="todo"
              value={this.state.todo}
              onChange={this.changeHandler}
            />
            <button
              className="btn btn-primary"
              onClick={this.onClickAdd.bind(this, {
                id: uniqid(),
                content: this.state.todo,
                isDone: false
              })}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onClickHandler: addTodoHandler
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
