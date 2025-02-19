import { useState } from "react";
import './App.css';


export default function AddTask({ addTaskFunc }) {
    const [addModel, setAddModel] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
  
    function handleInput(e) {
      const { name, value } = e.target;
      if (name === "projectName") setProjectName(value);
      if (name === "projectDesc") setProjectDesc(value);
    }
  
    const addTask = (e) => {
      e.preventDefault(); // Prevents form submission refresh
      if (!projectName || !projectDesc) return; // Prevent adding empty tasks
      addTaskFunc({ title: projectName, desc: projectDesc, status: 'incomplete' });
      setAddModel(false);
      setProjectName('');
      setProjectDesc('');
    };
  
    
    return (
      <>
        <button onClick={() => setAddModel(true)}>+ New</button>
        {addModel && (
          <div id="add-task-container">
            <h3>Add New Task</h3>
            <button onClick={() => setAddModel(false)}>X</button>
            {/* Move the submit handler to the form */}
            <form onSubmit={addTask}>
              <label htmlFor='project-name'>Project Name</label>
              <textarea 
                name='projectName' 
                value={projectName} 
                onChange={handleInput} 
                id='project-name'
              />
              <br/>
              <label htmlFor='project-desc'>Project Desc</label>
              <textarea 
                name='projectDesc' 
                value={projectDesc} 
                onChange={handleInput} 
                id='project-desc' 
                rows='3'
              />
              <br/>
              <button type='submit'>Add Task</button>
            </form>
          </div>
        )}
      </>
    );
  }