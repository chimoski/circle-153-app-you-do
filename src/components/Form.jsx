import { useEffect } from "react";

const Form = ({
  setInputText,
  setTodos,
  inputText,
  todos,
  setStatus,
  isEdit,
}) => {
  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    if (!inputText) return;

    if (!isEdit) {
      setTodos([
        ...todos,
        { text: inputText, id: Date.now(), completed: false },
      ]);
      setInputText("");
    } else {
      updateTodo(isEdit.completed, isEdit.id, inputText);
    }
  }

  function updateTodo(completed, id, text) {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { completed, id, text } : todo;
    });
    setTodos(newTodos);
  }

  useEffect(() => {
    if (isEdit !== null) {
      setInputText(isEdit.text);
    }
  }, [isEdit]);

  return (
    <div>
      <form style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            value={inputText}
            className="input"
            type="text"
            placeholder="enter your todo"
            onChange={handleChange}
          />
          <input
            className="input"
            type="submit"
            value="Add"
            onClick={handleAddTodo}
          />
        </div>

        <div>
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">incomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
