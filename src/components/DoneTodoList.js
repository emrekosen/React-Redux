import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class DoneTodoList extends Component {
  render() {
    const { todos } = this.props.todoList;
    return (
      <div className="container">
        <ul className="list-group">
          {todos.map(todo => {
            if (todo.isDone) {
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
export default connect(mapStateToProps)(DoneTodoList);
