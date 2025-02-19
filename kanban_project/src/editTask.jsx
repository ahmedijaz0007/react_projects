import { useState } from "react";

export default function EditTask({task,handleEditTask,handleTaskItem}){
    const [EditModel,setEditModel] = useState(false)
    const [projectDesc, setProjectDesc] = useState(task?.desc ||'');
  
    function handleInput(e) {
     setProjectDesc(e.target.value);
    }
  
    const HandleSubmit = (e) => {
      e.preventDefault(); // Prevents form submission refresh
     if (!projectDesc) return; // Prevent adding empty desc
        handleEditTask({ ...task, desc: projectDesc }); //update task on board list
        handleTaskItem({ ...task, desc: projectDesc }); //update task Item (Redundant)
      setEditModel(false);
    };

    return(

        <>
        <button onClick={()=>setEditModel(true)}>Edit</button>
        {EditModel ?<>  
          <div id="edit-task-container">
            <h3>Edit Task</h3>
            <button onClick={() => setEditModel(false)}>X</button>
            {/* Move the submit handler to the form */}
            <form onSubmit={HandleSubmit}>
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
              <button type='submit'>Edit Task</button>
            </form>
          </div>
        </> :null}
        </>
    );
}