import React from "react";

const TodoList = ({
	todos,
	setTodos,
	handleEdit,
	setFilteredTodos,
	filteredTodos,
}) => {
	function handleComplete(e, id) {
		e.preventDefault();
		setFilteredTodos(
			filteredTodos.map((todo) => {
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

	function handelDelete(e, idx) {
		e.preventDefault();
		const newTodos = [...todos];
		newTodos.splice(idx, 1);
		setTodos(newTodos);
	}

	return (
		<>
			{filteredTodos?.map((todo, index) => {
				const { id, completed, text } = todo;
				return (
					<div className='todo-box' key={id}>
						<div className={`${completed ? "completed" : ""}`}>{text}</div>
						<button onClick={(e) => handleComplete(e, id, todo)}>{`${
							completed ? "completed" : "incomplete"
						}`}</button>
						<button
							onClick={(e) => handleEdit(e, id, text)}
							disabled={completed}>
							edit
						</button>
						<button
							onClick={(e) => handelDelete(e, index)}
							disabled={completed}>
							Delete
						</button>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
