import { ADD_TODO, DELETE_TODO, FINISH_TODO, FETCH_TODOS } from "../constants";

const initialState = {
  todos: []
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return action.payload || false;

    case FINISH_TODO:
      return action.payload || false;

    case DELETE_TODO:
      return action.payload || false;

    case FETCH_TODOS:
      return action.payload || false;

    default:
      return state;
  }
}
