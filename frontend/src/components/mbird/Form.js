import React, { Component } from 'react';

class Form extends Component {
  render() {
    return( 
      <form className="form">
        { this.props.children }
      </form>
    );
  }
}

export default Form;