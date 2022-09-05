import React from "react";

const TodoList = ({ todos, setTodos, setIsEdit, filteredTodos }) => {
  function handleComplete(e, id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  function handleEdit(id) {
    const findTodo = todos.find((todo) => todo.id === id);
    setIsEdit(findTodo);
  }

  function handleDelete(idx) {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  }

  return (
    <>
      {filteredTodos?.map((todo, index) => {
        const { id, completed, text } = todo;
        return (
          <div className="todo-box" key={id}>
            <div className={`${completed ? "completed" : ""}`}>{text}</div>
            <button onClick={(e) => handleComplete(e, id, todo)}>{`${
              completed ? "completed" : "incomplete"
            }`}</button>
            <button onClick={() => handleEdit(id)} disabled={completed}>
              edit
            </button>
            <button onClick={() => handleDelete(index)} disabled={completed}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
