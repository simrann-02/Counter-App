import './App.css';
import {useState} from 'react';

function App() {

  const [count,setCount]=useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="Wrapper">
      <div className='heading'>Increment & Decrement</div>
      <div className='buttons'>
        <button className='button' onClick={decreaseHandler}>
        -
        </button>
        <div>
          {count}
        </div>
        <button className='button' onClick={increaseHandler}>
        +
        </button>
      </div>
      <button onClick={resetHandler} className='resetButton'>
        Reset
      </button>
    </div>
  );
}

export default App;
