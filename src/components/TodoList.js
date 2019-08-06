import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import setTodo from "../actions";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="list-group">
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              body={todo.content}
              isDone={todo.isDone}
              deleteTodo={this.props.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps)(TodoList);
