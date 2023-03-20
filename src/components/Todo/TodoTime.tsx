import photo from "../../assets/Www.png";
import "../../sass/components/Todo/TodoTime.sass";
import Time from "./Time";
const TodoTime = () => {
  return (
    <div className="TodoTime">
      <div className="photoContainer">
        <img src={photo} alt="" />
      </div>
      <div className="DigitalClockContainer">
        <Time />
      </div>
    </div>
  );
};
export default TodoTime;
