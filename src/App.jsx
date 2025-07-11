import { useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [InputValue, SetInputValue] = useState('')
  return (
    <>
      <TodoInput/>
    </>
  )
}

export default App;
