import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import useLocalStorage from "./utils/useLocalStorage";

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [inputText, setInputText] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const [status, setStatus] = useState("All");

  return (
    <div className="todoApp">
      <div className="container">
        <Form
          setInputText={setInputText}
          setTodos={setTodos}
          inputText={inputText}
          todos={todos}
          setStatus={setStatus}
          status={status}
          isEdit={isEdit}
        />
        <TodoList
          todos={todos}
          setIsEdit={setIsEdit}
          setTodos={setTodos}
          setInputText={setInputText}
          status={status}
        />
      </div>
    </div>
  );
};

export default App;

// useEffect(() => {
//   const todoLists = JSON.parse(localStorage.getItem("todos"));
//   if (todoLists) {
//     setTodos(todoLists);
//   }
// }, []);

// useEffect(() => {
//   if (status.toLowerCase() === "completed") {
//     setFilteredTodos(todos.filter((todo) => todo.completed === true));
//   } else if (status.toLowerCase() === "incomplete") {
//     setFilteredTodos(todos.filter((todo) => todo.completed === false));
//   } else {
//     setFilteredTodos(todos);
//   }
//   localStorage.setItem("todos", JSON.stringify(todos));
// }, [status, todos]);
