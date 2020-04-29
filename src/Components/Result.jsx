import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { answers, countGood } = props;
  return (
    <div className="resultPage">
      <p>
        {`Youre score is : ${countGood} !`}
      </p>
      {answers.map((answer) => (
        <>
          <iframe className="responseWebcam" src={answer.affichageQuestion} title={answer.goodAnswer} />
          <p className="resultAnswer" >{answer.goodAnswer}</p>
        </>
      ))}
    </div>
  );
}

Result.propTypes = {
  countGood: PropTypes.isRequired,
  answers: PropTypes.isRequired,
};

export default Result;
