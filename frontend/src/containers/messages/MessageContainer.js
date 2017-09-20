import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      actions: {}
    }
  }

  render() {   
    return(      
      <section>
        Hello Message
      </section>
    );
  }
}

const mapStateToProps = (state) => {
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainer);