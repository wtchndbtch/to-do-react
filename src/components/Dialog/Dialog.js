import React, { useContext } from "react";

import TaskContext from "../../store/task-context";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

import classes from "./Dialog.module.css";

const Dialog = ({ onClose }) => {
  const ctx = useContext(TaskContext);

  const deleteAllTaskHandler = () => {
    ctx.onDeleteAllTasks();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={classes.container}>
        <h2 className={classes.h2}>Clear the task list?</h2>
        <p>Be careful, you won't be able to undo the changes.</p>
        <p>Though, you can always come up with some new tasks to do.</p>
        <div>
          <Button onClick={deleteAllTaskHandler} className={classes["sb-btn"]}>
            Do it!
          </Button>
          <Button onClick={onClose} className={classes["cancel-btn"]}>
            Wait...
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
