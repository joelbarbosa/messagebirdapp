import React, { Component } from 'react';
import { Form } from 'components/mbird/index';

class TableMessage extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th> originator </th>
            <th> Message </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>+55 98812312</th>
            <th>Teste</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableMessage;
