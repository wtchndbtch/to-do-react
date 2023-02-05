import React, { useContext } from "react";
import TaskContext from "../../store/task-context";

import Task from "../Task/Task";
import classes from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
  const ctx = useContext(TaskContext);

  return (
    <div className={classes.div}>
      <ul className={classes.ul}>
        {tasks.map(todo => {
          return (
            <Task
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              toggleTask={ctx.toggleTask(todo.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
