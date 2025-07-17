import { useEffect, useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue}/>
    </>
  )
}

export default App;
