import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Sender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { store } = this.props;
    return <div className="tchat-sender" >
      <input onClick={(evt)=>{console.log(evt)}} type="text" id="that-sender-text" />
      <button onClick={(evt)=>{console.log(evt)}}>Envoyer</button>
    </div>;
  }
}

Sender.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Sender;
