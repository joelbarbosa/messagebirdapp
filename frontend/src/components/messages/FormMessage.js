import React, { Component } from 'react';
import { Form } from 'components/mbird/index';

class FormMessage extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onFormSubmit}>
        <input
          name="number"
          placeholder="Phone Number"
        />
        <textarea
          name="body"
          placeholder="What's up..."
        />
        <button
          type="submit"
        >
            Send
          </button>
      </Form>
    );
  }
}

export default FormMessage;
