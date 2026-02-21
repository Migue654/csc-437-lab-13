

import { useState } from "react";

function AddTaskForm({onNewTask}){
    const [name, setName] = useState("");

        function handleButtonClicked() {
        onNewTask(name); 
        setName("");
      }
        function handlechange(event){
            setName(event.target.value);
            
        }

        return(
            <div className=""> {/* Unfortunately comments in JSX have to be done like this */}
              
              <input onChange= {handlechange} value={name} placeholder="New task name"
               aria-label="New task name" className="border m-2 rounded-sm p-1.5" />



              <button onClick={handleButtonClicked} className=" bg-blue-500 text-white rounded-sm p-1 hover:bg-sky-700 ">Add task</button>
          </div>
        );


}   

export default AddTaskForm;