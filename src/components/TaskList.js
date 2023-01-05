import Task from "./Task";
import TaskContext from "../store/task-context";
import React, { useContext } from "react";

const TaskList = props => {
  const ctx = useContext(TaskContext);
  return (
    <ul>
      {props.tasks.map(todo => {
        return (
          <Task
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleTask={ctx.toggleTask(todo.id)}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
