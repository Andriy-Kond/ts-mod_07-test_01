import React from "react";

// interface IItem {
// 	id: string;
// 	title: string;
// }
import { IItem } from "../types/todo";

interface IProps {
	todos: IItem[];
	onRemoveTodo: (id: string) => void;
}

//^ Класові компоненти
// // Якщо є якийсь стейт, то при використанні класів його тре прокидувати за допомогою дженериків
// interface IState {
// 	count: number;
// }
// // class TodoListClass extends React.Component<IProps, IState> {
// // 	// Якби був якийсь стейт handler на стейт:
// // 	stateHandler() {
// // 		this.setState(({ count }) => {});
// // 	}

// // Компонент, який аналізує кількість кліків, більше він нічого не робить.
// class ClickStatistic extends React.Component<{}, IState> {
// 	// Компонент приймає два аргументи в дженерик, перше - це props, друге - state, я передав туди мій інтерфейс IState і тепер можу користуватися ним по код
// 	handleClick() {
// 		this.setState(({ count }) => {
// 			return {
// 				count: ++count,
// 			};
// 		});
// 	}

// 	render() {
// 		return <button onClick={this.handleClick}>Click my!</button>;
// 	}
// }

// export default ClickStatistic;

//^ Функціональні компоненти
// прокинути можна лише пропс
// type React.FC < P = { }> = React.FunctionComponent<P>
const TodoList: React.FC<IProps> = (props) => {
	return (
		<ul>
			{props.todos.map((item) => {
				return (
					<li key={item.id}>
						<div>{item.id}</div>
						<div>{item.title}</div>
						<button
							onClick={() => {
								props.onRemoveTodo(item.id);
							}}>
							Remove by empty fn
						</button>
						<button onClick={props.onRemoveTodo.bind(this, item.id)}>
							Remove by bind
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
