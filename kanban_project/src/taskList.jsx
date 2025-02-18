import Timer from '/Users/ahmedijaz/Documents/react_projects/kanban_project/src/timer.jsx'


function TaskItem({task}) {
    return (<div>
      <h3>{task.title}</h3>
      <button>Edit</button>
      <h4>{task.desc}</h4>
      <Timer />
      <button>Delete</button>
    </div>);
  }
  
  
  export default function TaskList({ tasks }) {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks available.</p>;  // Fallback UI
      }
  
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    );
  }