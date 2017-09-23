import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <form className="form" onSubmit={onSubmit} onChange={onChange}>
        { this.props.children }
      </form>
    );
  }
}

export default Form;
