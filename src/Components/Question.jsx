import React from 'react';
import Axios from 'axios';
import Result from './Result';
import LoadingSpinner from './LoadingSpinner';
import './Question.css';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      countGood: 0,
      count: 0,
      affichageQuestion: '',
      firstResponse: 'A',
      secondResponse: 'B',
      thirdResponse: 'C',
      answers: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getCam();
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;
    if (prevState.count !== count) {
      this.getCam();
    }
  }

  getCam = () => {
    const categories = ['beach', 'city', 'building', 'traffic', 'harbor', 'bay', 'airport', 'coast', 'island', 'golf'];
    this.setState({ loading: true });
    const category = categories[Math.floor(Math.random() * categories.length)];
    const url = `https://api.windy.com/api/webcams/v2/list/category=${category}/limit=10?show=webcams:category,image,location,player&key=93eR13JT6BB1W8MkCSWGxeD1AtXmSlht`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => {
        const good = 1;
        const false1 = 2;
        const false2 = 3;

        const locations = [
          data.result.webcams[good].location.city,
          data.result.webcams[false1].location.city,
          data.result.webcams[false2].location.city,
        ];
        locations.sort(() => (-1 + Math.floor(Math.random() * 2) * 2));
        this.setState({
          affichageQuestion: data.result.webcams[good].player.day.embed,
          firstResponse: locations[0],
          secondResponse: locations[1],
          thirdResponse: locations[2],
          goodAnswer: data.result.webcams[good].location.city,
          loading: false,
        });
      });
  }

  render() {
    const {
      count, countGood, affichageQuestion, goodAnswer, answers, loading,
    } = this.state;
    const { firstResponse, secondResponse, thirdResponse } = this.state;
    return (
      count < 3
        ? (
          <div className="questionPage">
            <div className="questionBlock">
              {
              loading
                ? (<LoadingSpinner />)
                : (<iframe className="questionWebcam" src={affichageQuestion} title="webcam" />)
              }
              <h2 className="questionTitle">Choose a location :</h2>
              <form
                id="formulaire"
                className="responseForm"
                onSubmit={(event) => {
                  const response = new FormData(event.target).get('response');
                  let prevCountGood = countGood;
                  if (response === goodAnswer) {
                    prevCountGood += 1;
                  }
                  document.getElementById('rep1').checked = '';
                  document.getElementById('rep2').checked = '';
                  document.getElementById('rep3').checked = '';
                  this.setState({
                    count: count + 1,
                    countGood: prevCountGood,
                    answers: [...answers, { goodAnswer, affichageQuestion }],
                  });
                  event.preventDefault();
                }}
              >
                <div className="responseBlock">
                  <div className="responseCss">
                    <input className="responseInput" id="rep1" type="radio" name="response" value={firstResponse} />
                    <label htmlFor="rep1">{firstResponse}</label>
                  </div>
                  <div className="responseCss">
                    <input className="responseInput" id="rep2" type="radio" name="response" value={secondResponse} />
                    <label htmlFor="rep2">{secondResponse}</label>
                  </div>
                  <div className="responseCss">
                    <input className="responseInput" id="rep3" type="radio" name="response" value={thirdResponse} />
                    <label htmlFor="rep3">{thirdResponse}</label>
                  </div>
                </div>
                <button className="submitButton" type="submit">Validate</button>
              </form>
            </div>
            <p className="questionCount">
              {count + 1}
              /
              3
            </p>
          </div>
        )
        : (
          <div>
            <Result
              answers={answers}
              countGood={countGood}
            />
            <button
              className="buttonAgain"
              type="button"
              onClick={() => this.setState({
                countGood: 0,
                count: 0,
                affichageQuestion: '',
                firstResponse: 'A',
                secondResponse: 'B',
                thirdResponse: 'C',
                answers: [],
              })}
            >
              Play Again
            </button>
          </div>
        )
    );
  }
}

export default Question;
