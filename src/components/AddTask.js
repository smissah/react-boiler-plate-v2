import React from "react";
import { useState } from "react";

const AddTask = ({ handleShowForm, handleAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    console.log(today);
    if (!text) {
      return;
    }

    if (!day) {
      console.log(day);
      return;
    }

    handleAddTask({ text, day, time, reminder });

    setText("");
    setDay("");
    setTime("");
    setReminder(false);
  };

  return (
    <form action="#" className="add-form" onSubmit={handleOnSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          placeholder="Add a task here!"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date-and-time">Date & Time</label>
        <input
          type="date"
          placeholder="When is it due?"
          onChange={(e) => {
            setDay(e.target.value.toString());
            // console.log(e.target.value.toString());
          }}
        />
        <input
          type="time"
          placeholder="When is it due?"
          onChange={(e) => {
            setTime(e.target.value.toString());
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="Set-reminder">Reminder</label>
        <input
          type="checkbox"
          onChange={
            (e) => setReminder(e.currentTarget.checked) //returns true or false if checked
          }
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn"
        style={{
          width: "55% ",
          marginLeft: "2rem",
        }}
        // onSubmit={handleAddTask}
      />
      <input
        type="button"
        value="Cancel"
        className="btn"
        style={{
          background: "#ED8175",
          width: "35% ",
          //   transform: "translateX(50%)",
        }}
        onClick={handleShowForm}
      />
    </form>
  );
};

export default AddTask;
