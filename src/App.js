import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import todoAppReducers from "./reducers/index";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DoneTodoList from "./components/DoneTodoList";

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
    const store = createStore(
      todoAppReducers,
      {},
      compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );

    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/done" component={DoneTodoList} />
          </Switch>
          <div className="container" />
        </Router>
      </Provider>
    );
  }
}

export default App;
