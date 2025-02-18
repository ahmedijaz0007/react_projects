import './App.css';
import { useState } from 'react';
import TaskList from './taskList'
import AddTask from './addTask';

function App() {
  return <Board />;
}

export default App;



function Board() {
  const [tasks, setTasks] = useState([]);

  function handleNewTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]); // Use prevTasks to update state correctly
  }

  function handleDeleteTask(title) {
    setTasks(tasks.filter((task) => task.title !== title)); // Remove the correct task
  }

  function handleEditTask(title, desc, status) {
    const newTasks = tasks.map((task) =>
      task.title === title ? { ...task, desc, status } : task
    );
    setTasks(newTasks);
  }

  return (
    <>
      <h1>03- The Task Tracker</h1>
      <h2>Click <AddTask addTaskFunc={handleNewTask} /> to add a new task</h2>
      <div id='task-lists-container'>
        <div className='' >
          <h2>To Do</h2>
          <TaskList tasks={tasks.filter((task) => task.status === 'incomplete')} />
        </div>

        <div>
          <h2>Completed</h2>
          <TaskList tasks={tasks.filter((task) => task.status === 'completed')} />
        </div>
      </div>
    </>
  );
}
