import React, { useContext } from "react";
import TaskManager from "./TaskManager";
import TaskContext from "../store/task-context";

import AddTask from "./AddTask";

import classes from "./ToDoBoard.module.css";

const ToDoBoard = props => {
  // const [taskList, setTaskList] = useState([]);
  const ctx = useContext(TaskContext);

  // const addTaskHandler = task => {
  //   setTaskList(prevUsersList => {
  //     return [
  //       ...prevUsersList,
  //       { id: Math.random().toString(), task: task, completed: false },
  //     ];
  //   });
  // };

  // const toggleTaskCompleted = id => () =>
  //   setTaskList(taskList =>
  //     taskList.map(task =>
  //       task.id === id ? { ...task, completed: !task.completed } : task
  //     )
  //   );

  return (
    <div className={classes.container}>
      <header>
        <TaskManager
        // tasks={taskList}
        // toggleTaskCompleted={toggleTaskCompleted}
        />
      </header>

      <AddTask onAddUser={ctx.onAddTask} />
    </div>
  );
};

export default ToDoBoard;
