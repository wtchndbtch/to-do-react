import React from "react";
import TaskManager from "./TaskManager";

import AddTask from "./AddTask";

import classes from "./ToDoBoard.module.css";

const ToDoBoard = () => {
  return (
    <div className={classes.container}>
      <header>
        <TaskManager />
      </header>
      <AddTask />
    </div>
  );
};

export default ToDoBoard;
