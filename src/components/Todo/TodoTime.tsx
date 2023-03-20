import photo from "../../assets/Www.png";
import "../../sass/components/Todo/TodoTime.sass";
const TodoTime = () => {
  return (
    <div className="TodoTime">
      <div className="photoContainer">
        <img src={photo} alt="" />
      </div>
      <div className="DigitalClockContainer">
        <h1>Digital Clock</h1>
      </div>
    </div>
  );
};
export default TodoTime;
