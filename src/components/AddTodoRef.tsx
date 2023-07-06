// Refs
// import React, { useRef } from "react";
// const textInputRef = useRef<HTMLInputElement>(null);
// const enteredText = textInputRef.current!.value;

import React, { useRef } from "react";

const AddTodoRef: React.FC = () => {
	// додаємо ref і беремо з нього значення
	// Обов'язково тре вказувати тип елементу рефу
	const titleInputRef = useRef<HTMLInputElement>(null); // має бути такий тип елементу

	// Обробник подій
	// e: React.FormEvent - каже, що це подія реакту
	function submitHandler(e: React.FormEvent) {
		e.preventDefault();
		console.log(titleInputRef.current?.value); // "?" - якщо є, то виводь, бо TS не впевнений, що ми щось знайшли у titleInputRef. І він не може зв'язати ці параметри. Тому без "?" маємо помилку "Object is possibly 'null'"
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<span>Add title by REF</span>
				<input type="text" id="add-todo" ref={titleInputRef} />
			</div>
			<button type="submit">Add todo</button>
		</form>
	);
};

export default AddTodoRef;
