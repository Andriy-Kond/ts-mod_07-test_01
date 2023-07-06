// Рефакторінг Ref на OnChange
import React, { useState } from "react";
import { IItem } from "../types/todo";

interface IProps {
	onAddTodo: (todo: IItem) => void;
}

type OnlyTitleVariable = Pick<IItem, "title">;

const AddTodoOnChange: React.FC<IProps> = (props) => {
	// Додаю обробник
	// Але якщо ми вкажемо як тип useState інтерфейс IItem, то треба буде одразу заповнювати усі поля
	// const [todo, setTodo] = useState<IItem>({id: "", title: ""});
	// Але я хочу передати пустий об'єкт
	// Можна використати Peak, щоби взяти лише те поле, яке потрібне
	// const [todo, setTodo] = useState<OnlyTitleVariable>({ title: "some title" });
	// Але це поле обов'язкове. Тобто його все одно тре вказувати.
	// Можна використати partial, тобто зробити поля OnlyTitleVariable не обов'язковими
	const [titleTodo, setTitleTodo] = useState<Partial<OnlyTitleVariable>>({});

	// e: React.ChangeEvent - каже, що це подія реакту ChangeEvent, який приймає HTML_Input_Element
	function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setTitleTodo({ title: e.target.value });
	}

	// e: React.FormEvent - каже, що це подія реакту FormEvent
	function submitHandler(e: React.FormEvent) {
		e.preventDefault();
		// Перевірка чи є title у titleTodo?
		if (!titleTodo.title) {
			return;
		}
		// якщо є, то виводимо:
		console.log("submitHandler >> titleTodo.title:", titleTodo.title);
		props.onAddTodo(titleTodo as IItem);
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<span>Add title by OnChange</span>
				<input type="text" id="add-todo" onChange={titleHandler} />
			</div>
			<button type="submit">Add todo</button>
		</form>
	);
};

export default AddTodoOnChange;
