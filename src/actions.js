export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    todo
  };
}

export function setTodo(id) {
  return {
    type: "SET_TODO",
    id
  };
}
