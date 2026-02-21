import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
 
import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import Modal from "./Modal.jsx";

import { useState } from "react";
import { nanoid } from "nanoid";



function App() {
    const [tasklist, setTaskList] = useState([
        { id: "todo-0", name: "Eat", isComplete: true },
        { id: "todo-1", name: "Sleep", isComplete: false },
        { id: "todo-2", name: "Repeat", isComplete: false }
    ]);

    
    function addTask(name){
        const taskcpy= [...tasklist , {  id:nanoid(), name: name, isComplete: false }]

        setTaskList(taskcpy)

    }
    function toggleTaskCompleted(id) {

        const updatedTasks = tasklist.map((task) => {
          if (id === task.id) {
            // use object spread to make a new object whose `isComplete` prop has been inverted
            return { ...task, isComplete: !task.isComplete };
          } else {
            return task;
          } 
        });
        setTaskList(updatedTasks);
      }
      function deleteItem(id) {
        const updatedTasks = tasklist.filter(
          (task) => id !== task.id
        );
      
        setTaskList(updatedTasks);
      }
      const [isModalOpen, setIsModalOpen] = useState(false);

    
  return (
      <main className="m-4" > 
        
        <Modal headerLabel="Add Task"  isOpen={isModalOpen} onCloseRequested={() => setIsModalOpen(false)}>
          
        <AddTaskForm onNewTask={(name) => { addTask(name); setIsModalOpen(false); }} />
        </Modal>
        <button onClick={() => setIsModalOpen(true)}  className="p-1 bg-blue-500 text-white" >Add Task</button>

          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul>

              {tasklist.map(task => 
              (<TodoItem key={task.id} id={task.id} name={task.name} isComplete={task.isComplete}
               onToggle={toggleTaskCompleted} onDelete={deleteItem} />
                ))}
              
                  
              </ul>
              
          </section>
          <button onClick={() => setTaskList([])} className="p-1 bg-red-600 text-white">Delete all</button>

          <button onClick={() => addTask("NewTask")} 
          className="p-1 bg-blue-500 text-white">New But Can't Set Name</button>
      </main>
  );
}

export default App;

