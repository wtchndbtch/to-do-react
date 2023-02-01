import React, { useContext, useMemo, useState } from "react";
import TaskContext from "./store/task-context";

import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import CardHeading from "./components/UI/CardHeading/CardHeading";
import Card from "./components/UI/Card/Card";

function App() {
  const [isShownCompletedList, setIsShowComplitedList] = useState(false);

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
    <Card>
      <CardHeading
        isShownCompletedList={isShownCompletedList}
        showCompletedList={showCompletedList}
        hideCompletedList={hideCompletedList}
      />
      <TaskList tasks={tasksToRender} />
      <AddTask />
    </Card>
  );
}

export default App;
