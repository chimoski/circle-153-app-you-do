import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [status, setStatus] = useState("all");

	function handleEdit(e, id, text) {
		e.preventDefault();
		setTodos(todos.filter((todo) => todo.id !== id));
		// setIsEdit(true);
		setInputText(text);
	}

	return (
		<div className='container'>
			<Form
				setInputText={setInputText}
				setTodos={setTodos}
				inputText={inputText}
				todos={todos}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				handleEdit={handleEdit}
				setStatus={setStatus}
				status={status}
				setFilteredTodos={setFilteredTodos}
				filteredTodos={filteredTodos}
			/>
			<TodoList
				todos={todos}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				setTodos={setTodos}
				setInputText={setInputText}
				handleEdit={handleEdit}
				setFilteredTodos={setFilteredTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
};

export default App;
