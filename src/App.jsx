import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/todo/AddTodo'
import Todos from './components/todo/Todos'

function App() {
  const [editTodo, setEditTodo] = useState(null);

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <Todos setEditTodo={setEditTodo} />
    </>
  )
}

export default App
