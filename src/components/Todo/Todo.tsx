import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoTime from "./TodoTime";
import "../../sass/components/Todo/Todo.sass";
const Todo = () => {
  return (
    <div className="Todo">
      <TodoTime />
      <TodoForm />
      <TodoList />
    </div>
  );
};
export default Todo;
