import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { ITodo, TodoProps } from "../../interfaces/TodoList";
const Todo = ({ todos, removeTodo, updateTodo }: TodoProps) => {
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({
    id: null,
    value: "",
  });
  const submitUpdate = (value: ITodo) => {
    updateTodo(edit.id!, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id !== null) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo: ITodo, index: number) => (
        <div key={index}>
          <div
            key={todo.id}
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            {todo.text}
          </div>
          <div>
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
          </div>
        </div>
      ))}
    </>
  );
};
export default Todo;
