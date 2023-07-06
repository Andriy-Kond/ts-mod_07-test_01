import React from "react";
// import AddTodoOnChange from "./components/AddTodoOnChange";
import AddTodoRef from "./components/AddTodoRef";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
	const todos = [{ id: "some id number 1", title: "some text" }];
	return (
		<div className="App">
			{/* <TodoList todos={todos} /> */}
			<AddTodoRef />
			{/* <AddTodoOnChange /> */}
		</div>
	);
};

export default App;
