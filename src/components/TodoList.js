import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { fetchTodosHandler } from "../actions";

class TodoList extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos("https://jsonplaceholder.typicode.com/todos");
  }

  render() {
    const { todos } = this.props.todoList;
    return (
      <div className="container">
        <AddTodo />
        <ul className="list-group">
          {todos.map(todo => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  body={todo.content}
                  isDone={todo.isDone}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todoList }) => {
  return {
    todoList: todoList
  };
};

const mapDispatchToProps = {
  fetchTodos: fetchTodosHandler
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
