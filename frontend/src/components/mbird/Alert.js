import React, { Component } from 'react';

class Alert extends Component {
  render() {
    const { className, msg } = this.props;
    return (
      <div className={className || 'alert-info'}>
        { msg || 'Action with success.' }
      </div>
    );
  }
}

export default Alert;
