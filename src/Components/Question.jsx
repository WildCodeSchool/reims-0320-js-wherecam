import React from 'react';
import Axios from 'axios';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  getCam = () => {
    const url = '';
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => {});
  }

  render() {
    const { count } = this.state;
    return (
      <h1>{count}</h1>
    );
  }
}

export default Question;
