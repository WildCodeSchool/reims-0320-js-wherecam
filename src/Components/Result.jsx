import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { questions, countGood } = props;
  return (
    <div>
      <p>
        {`You had ${countGood} good answer !`}
      </p>
      {questions.map((question) => (
        <div>
          <iframe src={question} title="local" />
          <p>locale</p>
        </div>
      ))
      }
    </div>
  );
}

Result.propTypes = {
  countGood: PropTypes.isRequired,
  questions: PropTypes.isRequired,
};

export default Result;
