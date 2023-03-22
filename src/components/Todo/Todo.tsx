import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";
import "../../sass/components/Todo/Todo.sass";
import { ITodos, IUpdateTodos } from "../../interfaces/Todo";
const Todo = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [update, setUpdate] = useState<IUpdateTodos>({
    id: null,
    value: "",
  });
  const handleSetTodos = (props: ITodos) => {
    setTodos([props, ...todos]);
  };
  const handleUpdateTodo = (props: ITodos) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === props.id) {
        return { id: item.id, value: props.value };
      }
      return item;
    });
    setTodos(updatedTodos);
    setUpdate({ id: null, value: "" });
  };
  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  const handleSetUpdate = (id: number, value: string) => {
    setUpdate({ id, value });
  };
  return (
    <div className="TodoContainer">
      <TodoForm
        handleSetTodos={handleSetTodos}
        update={update}
        handleUpdateTodo={handleUpdateTodo}
      />
      {!update.id && (
        <div>
          {todos.map((item) => (
            <TodoListItem
              key={item.id}
              value={item.value}
              id={item.id}
              handleDelete={handleDelete}
              handleSetUpdate={handleSetUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Todo;
