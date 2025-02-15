import './TodoItem.css'
import { FaCheck, FaXmark  } from "react-icons/fa6";


function TodoItem({text, completed, onComplete, onDelete}) {
    return (
      <li className="TodoItem">
        <span onClick={onComplete} className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
          <FaCheck />
        </span>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {text}
        </p>
        <span onClick={onDelete} className="Icon Icon-delete">
          <FaXmark  />
        </span>
      </li>
    );
  }
  
  export {TodoItem}