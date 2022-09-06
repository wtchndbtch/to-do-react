import TaskManager from "./TaskManager";
import classes from "./ToDoBoard.module.css";

const ToDoBoard = props => {
  return (
    <div className={classes.container}>
      <header>
        <TaskManager />
      </header>
    </div>
  );
};

export default ToDoBoard;
