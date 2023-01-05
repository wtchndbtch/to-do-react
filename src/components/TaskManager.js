import React, { useContext, useMemo, useState } from "react";
import ListIcon from "./UI/ListIcon";
import CheckBadgeIcon from "./UI/CheckBadgeIcon";
import TaskList from "./TaskList";
import TaskContext from "../store/task-context";

import classes from "./TaskManager.module.css";

const TaskManager = () => {
  const [isShownCompletedList, setIsShowComplitedList] = useState(false);
  const ctx = useContext(TaskContext);

  const tasksToRender = useMemo(
    () =>
      isShownCompletedList
        ? ctx.tasks.filter(item => item.completed)
        : ctx.tasks,
    [isShownCompletedList, ctx.tasks]
  );

  const showCompletedListHandler = () => setIsShowComplitedList(true);

  const hideCompletedListHandler = () => setIsShowComplitedList(false);

  return (
    <>
      <div className={classes.menu}>
        <div
          onClick={hideCompletedListHandler}
          className={isShownCompletedList ? classes.disabled : classes.enabled}
        >
          <ListIcon />
        </div>
        <div
          onClick={showCompletedListHandler}
          className={isShownCompletedList ? classes.enabled : classes.disabled}
        >
          <CheckBadgeIcon />
        </div>
      </div>
      <main>
        <TaskList tasks={tasksToRender} />
      </main>
    </>
  );
};

export default TaskManager;
