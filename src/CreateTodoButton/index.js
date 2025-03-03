import React from 'react';
import './CreateTodoButton.css'
import { FaPlus } from "react-icons/fa6";
import { TodoContext } from '../TodoContext';


function CreateTodoButton(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <button onClick={(event) => {
            setOpenModal(!openModal)
        }} className='CreateTodoButton'>
            <FaPlus />
        </button>
    )
}

export {CreateTodoButton }