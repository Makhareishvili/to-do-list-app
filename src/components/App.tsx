import "../sass/components/App.sass";
import TodoTime from "./Todo/TodoTime";
import "../sass/components/Todo/TodoList.sass";
import TodoList from "./Todo/TodoList";
const App = () => {
  return (
    <div className="App">
      <div className="TodoList">
        <TodoTime />
        <TodoList />
      </div>
    </div>
  );
};
export default App;
