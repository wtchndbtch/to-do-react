import React, { useContext, useMemo, useState } from "react";

import TaskContext from "./store/task-context";

import AddTask from "./components/AddTask/AddTask";
import CardHeading from "./components/UI/CardHeading/CardHeading";
import Card from "./components/UI/Card/Card";
import Dialog from "./components/Dialog/Dialog";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [isShownCompletedList, setIsShowComplitedList] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const openDialogHandler = () => {
    setShowDialog(true);
  };
  const closeDialogHandler = () => {
    setShowDialog(false);
  };

  const ctx = useContext(TaskContext);

  const tasksToRender = useMemo(
    () =>
      isShownCompletedList
        ? ctx.tasks.filter(item => item.completed)
        : ctx.tasks,
    [isShownCompletedList, ctx.tasks]
  );

  const showCompletedList = () => setIsShowComplitedList(true);
  const hideCompletedList = () => setIsShowComplitedList(false);

  return (
    <>
      <Card>
        <CardHeading
          isShownCompletedList={isShownCompletedList}
          showCompletedList={showCompletedList}
          hideCompletedList={hideCompletedList}
        />
        <TaskList tasks={tasksToRender} />
        <AddTask onOpenDialog={openDialogHandler} />
      </Card>
      {showDialog && <Dialog onClose={closeDialogHandler} />}
    </>
  );
}

export default App;
