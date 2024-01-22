import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import {nanoid} from "nanoid";
import "./App.css";




const Filter_Map = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}
const Filter_Names = Object.keys(Filter_Map);


function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  const taskList = tasks.filter(Filter_Map[filter]).map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = Filter_Names.map((name) => (
    <Filter 
    key={name} 
    name={name} 
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if(id === task.id) {
        return { ...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if(id === task.id){
        return { ...task, name: newName};
      }

      return task;
    });
    setTasks(editedTaskList);
    }

  

  return (
    <div>
      <h1 className="heading">Todo List </h1>

      <Form addTask={addTask} />
      <div className="filters">
        {filterList}
      </div>

      <h2 className="heading2" >{headingText}</h2>
      <ul
        role="list"
        className="tasks"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
