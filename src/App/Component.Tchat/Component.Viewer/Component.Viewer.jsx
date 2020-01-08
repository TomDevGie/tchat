import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const Viewer = (props) => {
//   return(
//     <div>

//     </div>
//   )
// };

// Viewer.propTypes = {
//   store: PropTypes.object.isRequired,
// };

class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.props= props;
    this.state={messages:[{text:'value',userId:''}]};
  }

   render = () => {
    return(
    <div className='viewer-messages'>
      {this.state.messages.map((e,i)=> <div className='viewer-message-message' key={'viewer-message'+i}>
      Message N° {i} : {e.text}
      </div>)}
    </div>
    )  
    };
}

export default Viewer;
