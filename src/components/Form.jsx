import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Form = ({
  setInputText,
  setTodos,
  inputText,
  todos,
  setStatus,
  status,
  isEdit,
}) => {
  const inputRef = useRef();
  const [openSelect, setOpenSelect] = useState(false);
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
    setInputText("");
  }

  function handleSelected(e) {
    e.preventDefault();
    setOpenSelect((p) => !p);
    setStatus(e.target.dataset.value);
  }

  useEffect(() => {
    if (isEdit !== null) {
      setInputText(isEdit.text);
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div>
      <form className="form">
        <div>
          <input
            value={inputText}
            className="input input-text"
            type="text"
            placeholder="enter your todo"
            onChange={handleChange}
            ref={inputRef}
          />
          <input
            className="input input-btn btn"
            type="submit"
            value="Add"
            onClick={handleAddTodo}
          />
        </div>

        <div>
          <div className="select">
            <div className={`select-header ${openSelect ? "rotate" : ""}`}>
              <p>{status}</p>
              <button
                className="btn arrow-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenSelect((p) => !p);
                }}
              >
                <IoIosArrowDown />
              </button>
            </div>
            <ul className={`select-container ${openSelect ? "" : "hide"}`}>
              <li data-value="All" onClick={handleSelected}>
                All
              </li>
              <li data-value="Completed" onClick={handleSelected}>
                Completed
              </li>
              <li data-value="Incomplete" onClick={handleSelected}>
                Incomplete
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
