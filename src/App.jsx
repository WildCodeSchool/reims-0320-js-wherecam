import React, { useState } from 'react';
import Question from './Components/Question';
import Help from './Components/Help';
import './App.css';
import './Components/Question.css';

function App() {
  const [init, setInit] = useState(false);
  return (
    <>
      <div className="page">
        <div>
          <h1 className="title">WhereCam</h1>
        </div>

        <div className="accueilPage">
          {init === false
            ? <button className="buttonPlay" type="button" onClick={() => setInit(true)}>PLAY</button>
            : <Question />}
        </div>
        <div>
          <Help />
        </div>
      </div>
    </>
  );
}

export default App;
