import './TodoItem.css'
import { FaCheck, FaXmark  } from "react-icons/fa6";


function TodoItem({todos, setTodos, text, completed, onDelete}) {
  function completedTodo(){
    todos.find(todo => todo.text === text).completed ^= true;

    /* spreed operator */
    /* se debe cambiar la referencia del array original para que react detecte */
    const completeTodosArray = [...todos]
    setTodos(completeTodosArray)
  }
    return (
      <li className="TodoItem">
        <span onClick={completedTodo} className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
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