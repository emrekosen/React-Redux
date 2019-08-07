import { combineReducers } from "redux";
import todoListReducer from "./todoReducer";

const todoAppReducers = combineReducers({
  todoList: todoListReducer
});

export default todoAppReducers;
