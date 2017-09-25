import React, { Component } from 'react';
import { Form } from 'components/mbird/index';
import HOCLoad from '../HOCLoad';

class TableMessage extends Component {
  render() {
    // just to end I put it, but you could
    // create a trrow component.
    const rows = [];
    this.props.messages.map(message =>
      rows.push(<tr key={message.id}>
        <td>{ message.originator }</td>
        <td>{ message.body }</td>
      </tr>));
    return (
      <table>
        <thead>
          <tr>
            <th> originator </th>
            <th> Message </th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}

export default HOCLoad(TableMessage);
