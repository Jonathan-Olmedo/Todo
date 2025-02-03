import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa6";


function CreateTodoButton(){
    return (
        <button onClick={(event) => {
            console.log(event)
            console.log(event.target)
        }} className='CreateTodoButton'>
            <FaPlus />
        </button>
    )
}

export {CreateTodoButton }