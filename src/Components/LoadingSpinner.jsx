import React from 'react';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';

const clockloader = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;
class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
 
  render() {
    const { loading } = this.state;
    return (
      <div className="sweet-loading">
        <ClockLoader
          css={clockloader}
          size={250}
          color="#123abc"
          loading={loading}
        />
      </div>
    );
  }
}

export default LoadingSpinner;
