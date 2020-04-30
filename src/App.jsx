import React, { useState } from 'react';
import Question from './Components/Question';
import Help from './Components/Help';
import './App.css';

function App() {
  const [init, setInit] = useState(false);
  return (
    <>
      <div>
        <h1>WhereCam</h1>
      </div>
      <div>
        {init === false
          ? <button type="button" onClick={() => setInit(true)}>PLAY</button>
          : <Question />}
      </div>
      <div>
        <Help />
      </div>
    </>
  );
}

export default App;
