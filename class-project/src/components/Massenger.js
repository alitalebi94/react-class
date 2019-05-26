import React from 'react'
import logo from './profile.svg'
import { Link } from 'react-router-dom'
import ChatScreenContainer from '../container/ChatScreenContainer'
import FooterContainer from '../container/FooterContainer'
import ConversationListContainer from '../container/conversationListContainer'
export default class Massenger extends React.Component {
  constructor () {
    super()
    this.state = {
      newMessage: ''
    }
  }
  getNewMessage (newMessage) {
    console.log('Im here:', newMessage)
    this.setState({ newMessage })
  }

  render () {
    console.log("user2::",this.props.user)
    return (
      <div className='app2'>
        <div className='d1'>
          <h2>&nbsp;&nbsp; Conversation List</h2>

          <ConversationListContainer />

        </div>
        <div className='d2'>
          <div className='chatTitle'>
            <div className='chatPic'>
              <img src={logo} alt={'logo'} className='personPic' />
            </div>
            <div className='nameAndState'>
              <p className='contactName'>
                name: {this.props.user}
              </p>
              <p className='onlineIcon'>
                online
              </p>
            </div>
          </div>
          <div className='chatRoom'>
            <ChatScreenContainer newMessage={this.state.newMessage} />
          </div>
          <div className='writeMassage'>
            <FooterContainer getNewMessage={(newMessage) => this.getNewMessage(newMessage)} />
          </div>
        </div>
      </div>
    )
  }
}
