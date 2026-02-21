
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function TodoItem({id, name, isComplete, onToggle, onDelete}){

        return(
        
            <li>
                <label> <input type="checkbox"  checked={isComplete} onChange={() => onToggle(id)} /> {name} </label>
                    <button onClick={() => onDelete(id)} className="ml-5" >  <FontAwesomeIcon icon={faTrashCan} /> </button>
            </li>);
       
}

export default TodoItem;