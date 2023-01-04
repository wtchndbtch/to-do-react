import React, { useState } from "react";

const TaskContext = React.createContext({
  tasks: [],
  onAddTask: task => {},
  toggleTask: id => {},
});

export const TaskContextProvider = props => {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = task => {
    setTaskList(prevUsersList => [
      ...prevUsersList,
      { id: Math.random().toString(), task: task, completed: false },
    ]);
  };

  const toggleTaskCompleted = id => () =>
    setTaskList(taskList =>
      taskList.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  return (
    <TaskContext.Provider
      value={{
        tasks: taskList,
        onAddTask: addTaskHandler,
        toggleTask: toggleTaskCompleted,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
