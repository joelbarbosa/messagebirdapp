import React, { Component } from 'react';

class Row extends Component {
  render() {
    let className = this.props.className || 'col-1';
    return( 
      <div className={className}>
        { this.props.children }
      </div>
    );
  }
}

export default Row;