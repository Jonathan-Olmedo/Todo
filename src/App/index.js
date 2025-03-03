import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';

/* const defaultTodos = [ 
  { text: 'Tarea 1', completed: true},
  { text: 'Tarea 2', completed: true},
  { text: 'Tarea 3', completed: false},
  { text: 'Tarea 4', completed: true},
  { text: 'cebolla', completed: false},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}



export default App;
