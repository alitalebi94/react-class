import React from 'react'
import Chat from './showMyMassege'
export default class othersMassege extends React.Component {
  render() {
    return(
      <div >
        <Chat
          num = '1'
          date = '3/2'
          latestMessage = 'salammmm'
        />
        <Chat
          num = '2'
          date= 'yesterday'
          latestMessage = 'chetori?'
        />
        <Chat
           num = '3'
           date = '5/3'
           latestMessage = 'hi'
        />     
      </div>
    )
  }
}