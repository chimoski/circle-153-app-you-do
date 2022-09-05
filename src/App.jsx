import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      console.log(filteredTodos);
    } else if (status === "incomplete") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    } else {
      setFilteredTodos(todos);
    }
  }, [status, todos]);

  return (
    <div className="container">
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        inputText={inputText}
        todos={todos}
        setStatus={setStatus}
        isEdit={isEdit}
      />
      <TodoList
        todos={todos}
        setIsEdit={setIsEdit}
        setTodos={setTodos}
        setInputText={setInputText}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
