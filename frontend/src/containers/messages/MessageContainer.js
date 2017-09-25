/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage, allMessages } from 'actions';
import { FormMessage, TableMessage } from 'components';
import HOCContainer from '../HOCContainer';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {},
      messages: [],
      isLoad: true,
    };
  }

  componentDidMount() {
    this.props.allMessages();
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
        <TableMessage {...this.props} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    messageReducer: { message, messages, isLoad },
    alertReducer,
  } = state;

  return {
    alertReducer,
    message,
    messages,
    isLoad,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendMessage, allMessages },
    dispatch,
  );

export default connect(
  mapStateToProps, mapDispatchToProps)(HOCContainer(MessageContainer));
