const initialState = {
  todos: [
    { id: 1, content: "Make a React Project", isDone: false },
    { id: 2, content: "Implement Redux", isDone: false }
  ]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      let tempTodos = state.todos;
      return {
        ...state,
        todos: [...tempTodos, action.todo]
      };
    case "SET_TODO":
      let tempTodos2 = state.todos;
      for (let index = 0; index < tempTodos2.length; index++) {
        if (tempTodos2[index].id === action.id) {
          tempTodos2[index].isDone = true;
        }
      }
      return {
        ...state,
        todos: [...tempTodos2]
      };
    default:
      return state;
  }
}
