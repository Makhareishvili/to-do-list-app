interface ITodo {
  id: number;
  text: string;
  isComplete?: boolean;
}
interface TodoProps {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  updateTodo: (id: number, todo: ITodo) => void;
}
interface ITodoFormProps {
  edit?: {
    id: null | number;
    value: string;
  } | null;
  onSubmit?: (todo: ITodo) => void;
}
export type { ITodo, TodoProps,ITodoFormProps };
