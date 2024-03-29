import React, { useEffect, useState } from "react";

const TaskContext = React.createContext({
  tasks: [],
  onAddTask: task => {},
  toggleTask: id => {},
  onDeleteAllTasks: () => {},
});

const getInitialState = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const TaskContextProvider = props => {
  const [taskList, setTaskList] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

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

  const deleteAllTasksHandler = () => {
    setTaskList(prevUsersList => []);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: taskList,
        onAddTask: addTaskHandler,
        toggleTask: toggleTaskCompleted,
        onDeleteAllTasks: deleteAllTasksHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
