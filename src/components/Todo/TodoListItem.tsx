import "../../sass/components/Todo/TodoListItem.sass";
import { GrClose } from "react-icons/gr";
const addZero = (i: number | string) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};
const TodoListItem = (props: any) => {
  const D = new Date();
  let minute = addZero(D.getMinutes());
  let hour = addZero(D.getHours());
  return (
    <div className="TodoListItemContainer">
      <div onClick={() => props.handleSetUpdate(props.id, props.value)}>
        <h2>{props.value}</h2>
        <p>{"Today at " + hour + ":" + minute}</p>
      </div>
      <div>
        <GrClose
          className="deleteIcon"
          onClick={() => props.handleDelete(props.id)}
        />
      </div>
    </div>
  );
};
export default TodoListItem;
