import React, { useState } from "react";
import AddTodoOnChange from "./components/AddTodoOnChange";
import AddTodoRef from "./components/AddTodoRef";
import TodoList from "./components/TodoList";
import { IItem } from "./types/todo";

const App: React.FC = () => {
	const [todos, setTodos] = useState<IItem[]>([]);

	// обробники
	function todoAddHandler(todo: IItem) {
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: Math.random().toString(),
					title: todo.title,
				},
			];
		});
	}

	function todoRemoveHandler(id: string): void {
		setTodos((prevTodos) => {
			return prevTodos.filter((item) => {
				return item.id !== id;
			});
		});
	}

	return (
		<div className="App">
			<AddTodoOnChange onAddTodo={todoAddHandler} />
			<AddTodoRef />
			<TodoList todos={todos} onRemoveTodo={todoRemoveHandler} />
		</div>
	);
};

export default App;
