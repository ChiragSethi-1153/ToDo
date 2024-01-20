import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";
// import "./App.css";

function App(props) {

  const taskList = props.tasks?.map((task) => <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />)

  function addTask(name){
    alert(name)
  }

  return (
    <div className="todoapp stack-large">
      <h1>Todo List </h1>
     
      <Form addTask={addTask} />
      <div>
        <Filter />
        <Filter />
        <Filter />
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
      {taskList}
        {/* <Todo name="eat" completed id="1" />
        <Todo name="sleep" />
        <Todo name='code' /> */}
      </ul>
    </div>
  );
}

export default App;
