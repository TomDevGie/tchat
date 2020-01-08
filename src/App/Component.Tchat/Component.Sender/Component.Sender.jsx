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
      <input onChange={(evt)=>{this.setState({inputText:evt.target.value})}} type="text" id="that-sender-text" />
      <button type="button" className="btn btn-primary" onClick={(evt)=>{
        this.props.store.dispatch({type:'ADD_MESSAGE',message:{message:this.state.inputText,userId:1}});
      }}>Envoyer</button>
    </div>;
  }
}

Sender.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Sender;
