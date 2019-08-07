import { ADD_TODO, DELETE_TODO, FINISH_TODO } from "../constants";

const initialState = {
  todos: [{ id: "3123asd", content: "hello world", isDone: false }]
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return action.payload || false;

    case FINISH_TODO:
      return action.payload || false;

    case DELETE_TODO:
      return action.payload || false;

    default:
      return state;
  }
}
