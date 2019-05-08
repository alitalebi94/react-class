import React from 'react'
import ConversationList from './ConversationList'
import Chat from './myMassege'
import Chat2 from './othersMassage'
export default class Massenger extends React.Component {
  render() {
    return(
      <div className="app">
        <div className='d1'>
          <p>&nbsp;&nbsp; Conversation List</p>
          <ConversationList />
        </div>
        <div className='d2'>
          <h1>
            chat
          </h1>
          <p className="contactName">
            name: {this.props.name}
          </p>  
          <p className="onlineIcon">
            online
          </p> 
          <div>
            <Chat />
          </div>   
          <div className="respon">
            <Chat2 />
          </div>
          
        </div> 
     </div>
    )
  }
}