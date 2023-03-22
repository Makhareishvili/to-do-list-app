interface ITodos {
  id: number;
  value: string;
}
interface IUpdateTodos {
  id: number | null;
  value: string;
}
interface ITodoFormProps {
  handleSetTodos: (props: ITodos) => void;
  update: IUpdateTodos;
  handleUpdateTodo: (props: ITodos) => void;
}
export type { ITodos, IUpdateTodos,ITodoFormProps };
