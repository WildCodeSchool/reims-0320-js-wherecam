import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setModal(true)}>Help</button>
      {
        modal
          ? (
            <div className="modalBlock">
              <p className="modalText">
                Welcome ! If you are here, it is surely the first time ...
                Small explanation of how the trip will unfold: after pressing PLAY
                you will be able to see a landscape thanks to a camera as if you were there!
                However to score points it will be necessary
                to find by yourself the location among 3 answers.
                Don't worry at the end you will get your scrore and can see
                the names of the places corresponding to what you have seen!
                If you have understood everything:
              </p>
              <button type="button" className="modalButton" onClick={() => setModal(false)}>Let's go !</button>
            </div>
          )
          : null
      }
    </>
  );
}

export default Help;
