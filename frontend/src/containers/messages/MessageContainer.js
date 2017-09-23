/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from 'actions';
import { FormMessage, TableMessage } from 'components';
import HOCContainer from '../HOCContainer';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {},
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { number, body } = event.target;
    const message = {
      message: {
        originator: number.value,
        recipients: [
          number.value,
        ],
        body: body.value,
      },
    };
    this.props.sendMessage(message);
  }

  render() {
    return (
      <section>
        <FormMessage {...this.props} onFormSubmit={this.onFormSubmit} />
        <TableMessage />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    messageReducer: { message },
    alertReducer,
  } = state;

  return {
    alertReducer,
    message,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendMessage },
    dispatch,
  );

export default connect(
  mapStateToProps, mapDispatchToProps)(HOCContainer(MessageContainer));
