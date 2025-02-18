import './App.css';
import { useState } from 'react';
import TaskList from '/Users/ahmedijaz/Documents/react_projects/kanban_project/src/taskList.jsx'

function App() {
  return (
    <>
      <h1>03- The Task Tracker</h1>
      <h2>Hi There</h2>
      <h2>Click <button>+ New</button> to add a new task</h2>
      
      <Board />
    </>
  );
}

export default App;





function Board() {
  const [tasks, setTasks] = useState([{title:'Major Tasks at Hand',desc:'Learn REACT',status:'incomplete'},{title:'Minor Tasks at Hand',desc:'Learn CSS',status:'completed'}]);
  return (
    <>
      <div>
        <div>
          <h2>To Do</h2>
        </div>
        <TaskList tasks={tasks.filter((task)=> task.status === 'incomplete')} />
      </div>
      <div>
        <div>
          <h2>Completed</h2>
        </div>
        <TaskList tasks={tasks.filter((task)=> task.status === 'completed')} />
      </div>
    </>
  )
}