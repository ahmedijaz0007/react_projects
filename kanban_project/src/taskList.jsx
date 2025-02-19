import Timer from './timer.jsx'
import EditTask from './editTask'
import { useState } from 'react';



function TaskItem({task,handleDeleteTask,handleEditTask}) {
    const [taskItem,setTaskItem] = useState(task)
    const handleTaskItem =(task)=>{
        setTaskItem(task)
    }

    return (<div className='task-container'>
        <div className='task-header'>
      <h3>{task.title}</h3>
      <EditTask task={taskItem} handleEditTask={handleEditTask} handleTaskItem={handleTaskItem}/>
      </div>
      <h4>{taskItem.desc}</h4>
      <Timer />
      <button onClick={handleDeleteTask}>Delete</button>
    </div>);
  }
  
  
  export default function TaskList({ tasks ,handleDeleteTask,handleEditTask }) {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks available.</p>;  // Fallback UI
      }
  
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskItem  handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} task={task} />
          </li>
        ))}
      </ul>
    );
  }