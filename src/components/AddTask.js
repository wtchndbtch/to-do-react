import React, { useContext, useEffect, useRef, useState } from "react";
import TaskContext from "../store/task-context";

import Plus from "./UI/Plus";
import classes from "./AddTask.module.css";

const AddTask = () => {
  const taskInputRef = useRef();
  const [error, setError] = useState(false);

  const ctx = useContext(TaskContext);

  const addTaskHandler = event => {
    event.preventDefault();
    const enteredTask = taskInputRef.current.value;
    if (enteredTask.trim().length === 0) {
      setError(true);
      taskInputRef.current.focus();
      return;
    }

    ctx.onAddTask(taskInputRef.current.value);

    taskInputRef.current.value = "";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) {
        setError(false);
      }
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <form
      onSubmit={addTaskHandler}
      className={`${classes.form} ${error ? classes.error : ""}`}
    >
      <input ref={taskInputRef} type="text" />
      <button className={classes["add-task-btn"]}>
        <span>
          <Plus />
        </span>
      </button>
    </form>
  );
};

export default AddTask;
