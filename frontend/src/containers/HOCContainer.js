import React, { Component } from 'react';
import { Alert } from 'components/mbird/index';

const HOCContainer = (WrapperdComponent) => {
  return class extends Component {
    handleAlert = () => {
      const { alertReducer } = this.props;
      if (alertReducer.type === 'ERROR') {
        return <Alert className="alert-danger" msg={alertReducer.message} />;
      } else if (alertReducer.type === 'SUCCESS') {
        return <Alert />;
      }
      return null;
    }

    render() {
      return (
        <div>
          { this.props.alertReducer !== null ? this.handleAlert() : null }
          <WrapperdComponent {...this.props} />
        </div>
      );
    }
  };
};

export default HOCContainer;
