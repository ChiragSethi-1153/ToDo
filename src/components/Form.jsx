import React from "react";
import { useState } from "react";
import '../App.css'

function Form(prop) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    prop.addTask(name);
    setName("");
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>
          <label htmlFor="new-todo-input" className="heading2">
             Add Task
          </label>
        </h2>
        <div className="add-area">
        <input
          type="text"
          id="new-todo-input"
          className="add-input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
