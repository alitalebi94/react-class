import React from 'react'
import myMassege from './ConversationList'
export default class Chat extends React.Component {
  render () {
    return (
      <div className='d2'>
        <h1>
          chat
        </h1>
        <p className='contactName'>
          name: {this.props.name}
        </p>
        <p className='onlineIcon'>
          online
        </p>

      </div>
    )
  }
}
