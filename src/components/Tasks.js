import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleDeleteTask, handleReminder }) => {
  return (
    <div>
      <p>Double-click a task to add reminder!</p> <hr />
      {tasks.map((task, index) => (
        <Task
          key={index}
          // taskId={id}
          // text={text}
          // time={time}
          // reminder={reminder}
          // day={day}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleReminder={handleReminder}
        />
      ))}
    </div>
  );
};

export default Tasks;
