import { ADD_TODO, DELETE_TODO, FINISH_TODO } from "../constants";

export const addTodoHandler = data => (dispatch, getState) => {
  let tempState = { ...getState().todoList };
  let tempTodos = [...tempState.todos, data];
  let newState = { ...tempState, todos: tempTodos };

  dispatch({ type: ADD_TODO, payload: newState });
};

export const finishTodoHandler = id => (dispatch, getState) => {
  let tempTodos2 = getState().todoList.todos;
  for (let index = 0; index < tempTodos2.length; index++) {
    if (tempTodos2[index].id === id) {
      tempTodos2[index].isDone = true;
    }
  }
  dispatch({
    type: FINISH_TODO,
    payload: { ...getState(), todos: tempTodos2 }
  });
};

export const deleteTodoHandler = id => (dispatch, getState) => {
  let tempState = { ...getState().todoList };
  let tempTodos = tempState.todos.filter(todo => todo.id !== id);
  let newState = { ...tempState, todos: tempTodos };
  dispatch({
    type: DELETE_TODO,
    payload: newState
  });
};
