import React from 'react';
import Axios from 'axios';
import Result from './Result';

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
    const categories = ['beach', 'city'];
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
        });
      });
  }

  render() {
    const {
      count, countGood, affichageQuestion, goodAnswer, answers,
    } = this.state;
    const { firstResponse, secondResponse, thirdResponse } = this.state;
    return (
      count < 3
        ? (
          <div>
            <div>
              <iframe src={affichageQuestion} title="webcam" />
              <h2>Choose a location :</h2>
              <form onSubmit={(event) => {
                const response = new FormData(event.target).get('response');
                let prevCountGood = countGood;
                if (response === goodAnswer) {
                  prevCountGood += 1;
                }
                this.setState({
                  count: count + 1,
                  countGood: prevCountGood,
                  answers: [...answers, { goodAnswer, affichageQuestion }],
                });
                event.preventDefault();
              }}
              >
                <input id="1" type="radio" name="response" value={firstResponse} />
                <label htmlFor="1">{firstResponse}</label>
                <input id="2" type="radio" name="response" value={secondResponse} />
                <label htmlFor="2">{secondResponse}</label>
                <input id="3" type="radio" name="response" value={thirdResponse} />
                <label htmlFor="3">{thirdResponse}</label>
                <button type="submit">Validate</button>

              </form>
            </div>
            <p>
              {count + 1}
              /
              3
            </p>
          </div>
        )
        : (
          <Result
            answers={answers}
            countGood={countGood}
          />
        )
    );
  }
}

export default Question;
