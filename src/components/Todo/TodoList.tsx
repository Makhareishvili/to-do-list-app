import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { ITodo } from "../../interfaces/TodoList";
const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (todo: ITodo): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  const updateTodo = (todoId: number, newValue: ITodo): void => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id: number): void => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
};
export default TodoList;
