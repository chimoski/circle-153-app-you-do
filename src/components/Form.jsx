import React, { useEffect } from "react";

const Form = ({
	setInputText,
	setTodos,
	inputText,
	todos,
	status,
	setStatus,
	setFilteredTodos,
	filteredTodos,
}) => {
	function handleChange(e) {
		setInputText(e.target.value);
	}

	function handleAddTodo(e) {
		e.preventDefault();
		if (!inputText) return;
		else {
			setTodos([
				...todos,
				{ text: inputText, id: Date.now(), completed: false },
			]);
			setInputText("");
		}

		// if (isEdit) {
		// 	todos.map;
		// }
	}

	useEffect(() => {
		if (status === "completed") {
			setFilteredTodos(todos.filter((todo) => todo.completed === true));
		} else if (status === "incomplete") {
			setFilteredTodos(todos.filter((todo) => todo.completed === false));
		} else {
			setFilteredTodos(todos);
		}
	}, [status, JSON.stringify(todos)]);

	return (
		<div>
			<form style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<input
						value={inputText}
						className='input'
						type='text'
						placeholder='enter your todo'
						onChange={handleChange}
					/>
					<input
						className='input'
						type='submit'
						value='Add'
						onClick={handleAddTodo}
					/>
				</div>

				<div>
					<select onChange={(e) => setStatus(e.target.value)}>
						<option value='all'>All</option>
						<option value='completed'>Completed</option>
						<option value='incomplete'>incomplete</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Form;
