export function filterTodos(todos, select) {
  return todos.filter((todo) => {
    if (select.toLowerCase() === "all") {
      return true;
    } else if (select.toLowerCase() === "incomplete") {
      return !todo.completed;
    } else if (select.toLowerCase() === "completed") {
      return todo.completed;
    }
  });
}
