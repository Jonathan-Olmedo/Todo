import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage } from './useLocalStorage';

/* const defaultTodos = [ 
  { text: 'Tarea 1', completed: true},
  { text: 'Tarea 2', completed: true},
  { text: 'Tarea 3', completed: false},
  { text: 'Tarea 4', completed: true},
  { text: 'cebolla', completed: false},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */


function App() {
  
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo =>
    todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  function completedTodo(text) {
    const completeTodo = [...todos]
    const indexComplete = completeTodo.findIndex((todo) => todo.text === text)
    completeTodo[indexComplete].completed ^= true
    saveTodos(completeTodo)
  }

  function deleteTodo(text) {
    const deleteTodoArray = [...todos]
    const indexDelete = deleteTodoArray.findIndex((todo) => todo.text === text)
    deleteTodoArray.splice(indexDelete, 1)
    saveTodos(deleteTodoArray)
  }

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completedTodo={completedTodo}
    deleteTodo={deleteTodo}
    />
  )
}



export default App;
