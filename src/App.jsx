import React, { useState } from 'react';
import Question from './Components/Question'
import './App.css';

function App() {
  const [init, setInit] = useState(false);
  return (
    <div>
      {init === false
        ? <button type="button" onClick={() => setInit(true)}>PLAY</button>
        : <Question />
      }
    </div>
  );
}

export default App;
