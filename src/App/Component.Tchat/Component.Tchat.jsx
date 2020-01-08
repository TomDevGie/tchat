import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Viewer from './Component.Viewer/Component.Viewer';
import Sender from './Component.Sender/Component.Sender';
import { createStore } from 'redux'


const messagesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [...state, action.message]
      default:
        return state
    }
  }
  
  // let state = messagesReducer ()
  // state = messagesReducer (state, {type: 'ADD_MESSAGE', message: 'Premier message'})
  // state = messagesReducer (state, {type: 'ADD_MESSAGE', message: 'Second message'})
  // console.log('messages : ', state);


let messageStore = createStore(messagesReducer);

class Tchat extends Component{
  constructor(props){
    super(props);
    this.state= {};
  }

   render() {
    return(
      
          <div>
            <Viewer store={messageStore} />
             <Sender store={messageStore} />
          </div>
    
  )
  }
}






export default Tchat;