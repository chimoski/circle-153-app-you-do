import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { filterTodos } from "./filterTodos";

const TodoList = ({ todos, setTodos, setIsEdit, status }) => {
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

  const visibleTodo = filterTodos(todos, status);

  return (
    <>
      {visibleTodo.map((todo, index) => {
        const { id, completed, text } = todo;
        return (
          <div className="todo-box" key={id}>
            <div className={`${completed ? "completed" : ""}`}>{text}</div>

            <div className="todo-btns">
              <button
                className="btn todo-btn"
                onClick={(e) => handleComplete(e, id, todo)}
              >
                <BsCheck2Square />
              </button>
              <button
                onClick={() => handleEdit(id)}
                disabled={completed}
                className="btn todo-btn"
              >
                <AiOutlineEdit />
              </button>
              <button
                onClick={() => handleDelete(index)}
                disabled={completed}
                className="btn todo-btn"
              >
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
