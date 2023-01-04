import React from "react";

import classes from "./Task.module.css";

const Task = props => {
  return (
    <div
      className={`${classes.input} ${props.completed ? classes.disabled : ""}`}
    >
      <input type="checkbox" value={props.task} onChange={props.toggleTask} />
      <label htmlFor={props.id}>{props.task}</label>
    </div>
  );
};

export default Task;
