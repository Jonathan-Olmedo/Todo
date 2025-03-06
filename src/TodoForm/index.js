import React from "react"
import './TodoForm.css'
import { TodoContext } from "../TodoContext"
import react from "react"

function TodoForm(){
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const [newTodoValue, setNNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="cortar cebolla para el almuerzo" />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    )
}

export {TodoForm}