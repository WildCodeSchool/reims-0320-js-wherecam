import React from 'react';


class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <h1>{count}</h1>
    );
  }
}

export default Question;
