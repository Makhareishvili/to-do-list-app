import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "../../sass/components/Todo//TodoForm.sass";
import { ITodoFormProps } from "../../interfaces/Todo";
const TodoForm = ({
  handleSetTodos,
  update,
  handleUpdateTodo,
}: ITodoFormProps) => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) {
      return;
    }
    if (update.id) {
      const todo = { id: update.id, value: input };
      handleUpdateTodo(todo);
    } else {
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      const todo = { id: randomNumber, value: input };
      handleSetTodos(todo);
    }
    setInput("");
  };
  useEffect(() => {
    if (update.id) {
      setInput(update.value);
      inputRef.current?.focus();
    }
  }, [update]);
  return (
    <form onSubmit={handleOnSubmit} className="formContainer">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleOnChange}
      />
      <button type="submit">{update.id ? "Update" : "Add"}</button>
    </form>
  );
};
export default TodoForm;
