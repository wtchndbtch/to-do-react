import React, { useContext, useEffect, useMemo, useState } from "react";
import ListIcon from "./UI/ListIcon";
import CheckBadgeIcon from "./UI/CheckBadgeIcon";
import TaskList from "./TaskList";
import TaskContext from "../store/task-context";

import classes from "./TaskManager.module.css";

const TaskManager = props => {
  const [isShownCompletedList, setIsShowComplitedList] = useState(false);
  const ctx = useContext(TaskContext);

  console.log("zalupa", ctx.tasks);

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
        <div onClick={hideCompletedListHandler}>
          <ListIcon />
        </div>
        <div onClick={showCompletedListHandler} className={classes.disabled}>
          <CheckBadgeIcon />
        </div>
      </div>
      <main>
        <TaskList
          tasks={tasksToRender}
          // toggleTaskCompleted={props.toggleTaskCompleted}
        />
      </main>
    </>
  );
};

export default TaskManager;
