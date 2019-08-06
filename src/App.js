import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import todoApp from "./reducers";
import "./App.css";

class App extends React.Component {
  // deleteTodo = id => {
  //   let tempTodos = this.state.todos;
  //   for (let index = 0; index < tempTodos.length; index++) {
  //     if (tempTodos[index].id === id) {
  //       tempTodos[index].isDone = true;
  //     }
  //   }
  //   this.setState({
  //     ...this.state,
  //     todos: [...tempTodos]
  //   });
  // };

  // addTodo = todo => {
  //   let tempTodos = this.state.todos;
  //   this.setState({
  //     ...this.state,
  //     todos: [...tempTodos, todo]
  //   });
  // };

  render() {
    const store = createStore(todoApp, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <AddTodo addTodo={this.addTodo} />
            <TodoList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
