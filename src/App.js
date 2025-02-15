import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { jsx } from 'react/jsx-runtime';

/* const defaultTodos = [ 
  { text: 'Tarea 1', completed: true},
  { text: 'Tarea 2', completed: true},
  { text: 'Tarea 3', completed: false},
  { text: 'Tarea 4', completed: true},
  { text: 'cebolla', completed: false},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */

function useLocalStorage (itemName, initialValue) {
  
  let localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
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
    const indexComplete = completeTodo.findIndex((todo) => todo.text == text)
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
    <>

      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => {
          /* otra manera de pasar eventos es con las props */
          return (<TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => { completedTodo(todo.text) }}
            onDelete={() => { deleteTodo(todo.text) }}
          />)
        })}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
