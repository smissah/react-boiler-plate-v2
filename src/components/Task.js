import React from "react";
// import { FaTimes } from "react-icons/fa";

const Task = ({
  // text,
  // reminder,
  // day,
  // time,
  // taskId,
  task,
  handleDeleteTask,
  handleReminder,
}) => {
  return (
    <div key={task.id}>
      <div
        className={` task ${task.reminder && "reminder"} `}
        onDoubleClick={() => {
          handleReminder(task.id);
          //flip the bool and then change the class with a turnary
        }}
      >
        <h3>
          {task.text}
          <p
            style={{ color: "#EC7063", cursor: "pointer" }}
            onClick={() => {
              handleDeleteTask(task.id);
            }}
          >
            {/* delete */} ✖
          </p>
          {/* <FaTimes /> */}
        </h3>
        <p>
          {task.day} @ {task.time}
        </p>
      </div>
    </div>
  );
};

export default Task;
