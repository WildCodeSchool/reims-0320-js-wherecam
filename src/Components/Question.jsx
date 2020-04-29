import React from 'react';
import Axios from 'axios';
import Result from './Result';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      countGood: 0,
      count: 1,
      fisrtQuestion: '',
      secondQuestion: '',
      thirdQuestion: '',
      affichageQuestion: '',
      firstResponse: 'A',
      secondResponse: 'B',
      thirdResponse: 'C',
    };
  }

  getCam = () => {
    const url = '';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => {});
  }

  render() {
    const url = '';
    const { count, affichageQuestion, countGood } = this.state;
    const { firstQuestion, secondQuestion, thirdQuestion } = this.state;
    const { firstResponse, secondResponse, thirdResponse } = this.state;
    if (count === 1) { this.setState({ firstQuestion: url })};
    if (count === 2) { this.setState({ secondQuestion: url })};
    if (count === 3) { this.setState({ thirdQuestion: url })};
    return (
      count < 4 ?
      <div>
        <div>
          <iframe src={affichageQuestion} title="webcam" />
          <h2>Choose a location :</h2>
          <input type="radio" name="response" value="0" /><label htmlFor="1">{firstResponse}</label>
          <input type="radio" name="response" value="0" /><label htmlFor="2">{secondResponse}</label>
          <input type="radio" name="response" value="0" /><label htmlFor="3">{thirdResponse}</label>
          <button type="button" onClick={() => this.setState({ count: count + 1 })}>Validate</button>
        </div>
        <p>{count}/3</p>
      </div>
      : (
        <Result
          firstQuestion={firstQuestion}
          secondQuestion={secondQuestion}
          thirdQuestion={thirdQuestion}
      />
    )
    );
  }
}

export default Question;
