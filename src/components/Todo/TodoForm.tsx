import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import "../../sass/components/Todo/TodoForm.sass";
import { ITodo, ITodoFormProps } from "../../interfaces/TodoList";
const TodoForm = ({ edit, onSubmit }: ITodoFormProps) => {
  const [input, setInput] = useState<string>(edit ? edit.value : "");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.focus();
    }
    return () => {
      if (inputElement) {
        inputElement.blur();
      }
    };
  }, [inputRef]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
    };
    if (onSubmit) {
      onSubmit(newTodo);
    }
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};
export default TodoForm;
