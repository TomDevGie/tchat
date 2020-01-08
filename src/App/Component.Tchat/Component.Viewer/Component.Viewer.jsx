import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Component.Viewer.css'
import moment from 'moment';


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
    this.props.store.subscribe(()=>{
      this.setState({messages:this.props.store.getState()})
    })
  }

//   componentDidMount(){
//     // console.log(this)
//     let config = {ressource:'publicDiscussions'} ;
//     httpGet(config,(response)=>{
//       console.log(response);
//           response.map((e,i)=>{console.log(e.message);
//             this.props.store.dispatch({type:'ADD_MESSAGE',message:{text:e.message,userId:1}});
//           })
//     })
// }

    render = () => {
      return(
        <div className='viewer-messages'>
          {this.state.messages.map((e,i)=> {
            let classColor=(i%2===0)?' _odd': ' _even';
            return (
                <div className={'viewer-message-message'+classColor} key={'viewer-message'+i}>
                  <div className='message-number'>Message N° {i} </div>
                  <div className='message-message'> {e.message}</div>
                  <div className='message-date'> {moment(e.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </div>
                )
            })
          }
            
          
        </div>
      )  
    };
}

export default Viewer;
