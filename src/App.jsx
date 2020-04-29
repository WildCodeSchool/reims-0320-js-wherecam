import React, { useState } from 'react';
import Question from './Components/Question';
import './App.css';

function App() {
  const [init, setInit] = useState(false);
  return (
    <>
      <div className="title">
        <h1>WhereCam</h1>
      </div>
      <div className="acceuilPage">
        {init === false
          ? <button className="buttonPlay" type="button" onClick={() => setInit(true)}>PLAY</button>
          : <Question />}
      </div>
    </>
  );
}

export default App;
