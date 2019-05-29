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
      <div className='clearfix app2'>
        <div className='navbar hidden-lg'>
          <ul className='nav navbar-nav'>
            <li><a herf='#'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact</a> </li>
            <li><a herf='part2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;massage</a> </li>
          </ul>
        </div>
        <div className='d1 col col-lg-3 col-sm-4'>
          <h2>&nbsp;&nbsp;</h2>
          <h2>&nbsp;&nbsp; Conversation List</h2>

          <ConversationListContainer />

        </div>
        <div id='part2' className='d2 col col-lg-9 col-sm-8'>
          <h2>&nbsp;&nbsp;</h2>
          <div className='chatTitle'>
            <div className='chatPic'>
              <img src={this.props.avatar} alt={'logo'} className='personPic' />
            </div>
            <div className='nameAndState'>
              <p className='contactName'>
                name: {this.props.user}
              </p>
              <p className='onlineIcon'>
                &nbsp;&nbsp;&nbsp;&nbsp;
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
