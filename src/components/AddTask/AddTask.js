import React, { useContext, useEffect, useRef, useState } from "react";
import TaskContext from "../../store/task-context";

import Button from "../UI/Button/Button";
import Plus from "../UI/Plus";
import RefreshIcon from "../UI/RefreshIcon";

import classes from "./AddTask.module.css";

const AddTask = ({ onOpenDialog }) => {
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
      <div className={classes["btn-container"]}>
        <Button
          onClick={addTaskHandler}
          className={`${classes.btn} ${classes["add-task-btn"]}`}
        >
          <Plus />
        </Button>
        <Button
          type="reset"
          onClick={onOpenDialog}
          className={classes["refresh-btn"]}
        >
          <RefreshIcon />
        </Button>
      </div>
    </form>
  );
};

export default AddTask;
