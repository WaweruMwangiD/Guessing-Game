
import {React, useState} from 'react'
import './App.css';
import Input from './components/input/Input';

function App() {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
      setInput({
        input: event.target.value
      })
      console.log(input)
  }
  return (
    <div className="app">
        <div className='app__header'>
          <h1>Guess Game</h1>
          <h3>1. 2. 3...</h3>
        </div>
        <Input value={input}  onChange={handleInput}/>
    </div>
  );
}

export default App;
