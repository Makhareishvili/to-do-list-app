import "../sass/components/App.sass";
import TodoTime from "./Time/TodoTime";
import Todo from "./Todo/Todo";
const App = () => {
  return (
    <div className="App">
      <div className="MainContainer">
        <TodoTime />
        <Todo />
      </div>
    </div>
  );
};
export default App;
