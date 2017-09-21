import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form } from 'components/mbird/index';
import { sendMessage } from 'actions/actions_message';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {},
    }
  }

  sendMessage = (event) => {
    event.preventDefault();
    const message = {
        "message": {
          "originator": "5585988127241",
          "recipients": [
            "5585988127241"
          ],
          "body": "This is a test message."
        }
    };

    this.props.sendMessage(message);
  }

  render() {   
    return(      
      <section>
        <Form>
          <input placeholder="Phone Number"/>
          <textarea placeholder="What's up..."/>
          <button
            onClick={this.sendMessage}
          >
            Send
          </button>
        </Form>
      </section>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps)(MessageContainer);