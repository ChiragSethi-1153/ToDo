import React from 'react'

function Form(prop) {

   function handleSubmit(event) {
    event.preventDefault();
    prop.addTask("Task Added");
   }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h2 >
          <label htmlFor="new-todo-input" className="">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  )
}

export default Form
