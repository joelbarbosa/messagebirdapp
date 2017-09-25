import React, { Component } from 'react';

const HOCLoad = (WrapperdComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          { this.props.isLoad ?
            <div>Loading...</div> :
            <WrapperdComponent {...this.props} /> }
        </div>
      );
    }
  };
};

export default HOCLoad;
