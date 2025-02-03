import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [ 
  { text: 'Tarea 1', completed: true},
  { text: 'Tarea 2', completed: true},
  { text: 'Tarea 3', completed: false},
  { text: 'Tarea 4', completed: true},
  { text: 'cebolla', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
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

  function deleteTodo (text){
    const deleteTodoArray = [...todos]
    const indexDelete = deleteTodoArray.findIndex((todo) => todo.text === text)
    deleteTodoArray.splice(indexDelete,1)
    setTodos(deleteTodoArray)
  }

  return (
    <>
      
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => {
           /* otra manera de pasar eventos es con las props */
          return (<TodoItem 
            todos={todos} 
            setTodos={setTodos} 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onDelete={() => {deleteTodo(todo.text)}}
            />)
        })}
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}



export default App;
