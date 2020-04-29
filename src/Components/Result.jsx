import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { answers, countGood } = props;

  return (
    <div>
      <p>
        {`You had ${countGood} good answer !`}
      </p>
      {answers.map((answer) => (
        <>
          <iframe src={answer.affichageQuestion} title={answer.goodAnswer} />
          <p>{answer.goodAnswer}</p>
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
