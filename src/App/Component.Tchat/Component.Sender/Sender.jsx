import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { store } = this.props;
    return <div />;
  }
}

Sender.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Sender;
