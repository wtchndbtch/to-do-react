import React from "react";

import classes from "./Task.module.css";

const Task = ({ completed, task, toggleTask, id }) => {
  return (
    <div className={`${classes.input} ${completed ? classes.disabled : ""}`}>
      <input
        type="checkbox"
        value={task}
        onChange={toggleTask}
        checked={completed ? true : false}
      />
      <label htmlFor={id}>{task}</label>
    </div>
  );
};

export default Task;
