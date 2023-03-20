import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoTime from "./TodoTime";
import "../../sass/components/Todo/Todo.sass";
import Time from "./Time";
const Todo = () => {
  return (
    <div className="Todo">
      <TodoTime />
      <TodoForm />
      <TodoList />
      {/* <Time /> */}
    </div>
  );
};
export default Todo;
